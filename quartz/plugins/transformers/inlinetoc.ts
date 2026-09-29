import { QuartzTransformerPlugin } from "../types"
import { Root } from "mdast"
import { visit } from "unist-util-visit"
import { toString } from "mdast-util-to-string"
import Slugger from "github-slugger"

type Style = "bullet" | "numbered" | "outline"

interface Options {
  minDepth: number
  maxDepth: number
  title: string
  defaultStyle: Style
  stripNumbers: boolean
}

const defaultOptions: Options = {
  minDepth: 1,
  maxDepth: 4,
  title: "Table of Contents",
  defaultStyle: "bullet",
  stripNumbers: true,
}

interface Entry {
  depth: number
  text: string // shown in the TOC (number removed)
  slug: string // always made from the ORIGINAL heading
}
interface TreeNode {
  entry?: Entry
  children: TreeNode[]
}

// removes "1. ", "1) ", "1.2 ", "1.2.3. " from the start of a heading
const leadingNumber = /^\s*(?:\d+(?:\.\d+)+\.?|\d+[.)])\s+/

function cleanText(text: string, strip: boolean): string {
  if (!strip) return text
  const cleaned = text.replace(leadingNumber, "").trim()
  return cleaned.length > 0 ? cleaned : text
}

function buildTree(entries: Entry[]): TreeNode {
  const root: TreeNode = { children: [] }
  const stack: { depth: number; node: TreeNode }[] = [{ depth: 0, node: root }]
  for (const entry of entries) {
    while (stack[stack.length - 1].depth >= entry.depth) stack.pop()
    const node: TreeNode = { entry, children: [] }
    stack[stack.length - 1].node.children.push(node)
    stack.push({ depth: entry.depth, node })
  }
  return root
}

function toHast(nodes: TreeNode[], tag: "ul" | "ol"): any {
  return {
    type: "element",
    tagName: tag,
    properties: {},
    children: nodes.map((n) => ({
      type: "element",
      tagName: "li",
      properties: {},
      children: [
        {
          type: "element",
          tagName: "a",
          properties: { href: `#${n.entry!.slug}` },
          children: [{ type: "text", value: n.entry!.text }],
        },
        ...(n.children.length > 0 ? [toHast(n.children, tag)] : []),
      ],
    })),
  }
}

// matches: toc | table of contents, optionally followed by bullet | numbered | outline
const markerRegex = /^(?:table of contents|toc)(?:\s+(bullet|numbered|outline))?$/

export const InlineTOC: QuartzTransformerPlugin<Partial<Options>> = (userOpts) => {
  const opts = { ...defaultOptions, ...userOpts }
  return {
    name: "InlineTOC",
    markdownPlugins() {
      return [
        () => {
          return (tree: Root) => {
            const slugger = new Slugger()
            const entries: Entry[] = []
            visit(tree, "heading", (node) => {
              const original = toString(node)
              const slug = slugger.slug(original)
              if (node.depth >= opts.minDepth && node.depth <= opts.maxDepth) {
                entries.push({
                  depth: node.depth,
                  text: cleanText(original, opts.stripNumbers),
                  slug,
                })
              }
            })

            visit(tree, "code", (node: any, index, parent) => {
              const raw = `${node.lang ?? ""} ${node.meta ?? ""}`.trim().toLowerCase()
              const match = raw.match(markerRegex)
              if (!match) return
              if (!parent || index === undefined || entries.length === 0) return

              const style: Style = (match[1] as Style) ?? opts.defaultStyle
              const listTag = style === "bullet" ? "ul" : "ol"

              parent.children[index] = {
                type: "inlineToc",
                data: {
                  hName: "nav",
                  hProperties: { className: ["inline-toc", `inline-toc-${style}`] },
                  hChildren: [
                    {
                      type: "element",
                      tagName: "p",
                      properties: { className: ["inline-toc-title"] },
                      children: [{ type: "text", value: opts.title }],
                    },
                    toHast(buildTree(entries).children, listTag),
                  ],
                },
              } as any
            })
          }
        },
      ]
    },
  }
}
