import { QuartzTransformerPlugin } from "../types"
import { Root } from "mdast"
import { visit } from "unist-util-visit"
import { toString } from "mdast-util-to-string"
import Slugger from "github-slugger"

interface Options {
  minDepth: number
  maxDepth: number
  title: string
}

const defaultOptions: Options = {
  minDepth: 1,
  maxDepth: 4,
  title: "Table of Contents",
}

interface Entry {
  depth: number
  text: string
  slug: string
}
interface TreeNode {
  entry?: Entry
  children: TreeNode[]
}

// turn flat headings into a nested tree (handles skipped levels like h2 -> h4)
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

// nested tree -> hast (HTML tree)
function toHast(nodes: TreeNode[]): any {
  return {
    type: "element",
    tagName: "ul",
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
        ...(n.children.length > 0 ? [toHast(n.children)] : []),
      ],
    })),
  }
}

export const InlineTOC: QuartzTransformerPlugin<Partial<Options>> = (userOpts) => {
  const opts = { ...defaultOptions, ...userOpts }
  return {
    name: "InlineTOC",
    markdownPlugins() {
      return [
        () => {
          return (tree: Root) => {
            // pass 1: collect all headings (slugger must see every heading
            // so duplicate names get the same -1, -2 suffixes as the page)
            const slugger = new Slugger()
            const entries: Entry[] = []
            visit(tree, "heading", (node) => {
              const text = toString(node)
              const slug = slugger.slug(text)
              if (node.depth >= opts.minDepth && node.depth <= opts.maxDepth) {
                entries.push({ depth: node.depth, text, slug })
              }
            })

            // pass 2: replace the marker code block
            visit(tree, "code", (node: any, index, parent) => {
              const marker = `${node.lang ?? ""} ${node.meta ?? ""}`.trim().toLowerCase()
              if (marker !== "table of contents" && marker !== "toc") return
              if (!parent || index === undefined || entries.length === 0) return

              const replacement: any = {
                type: "inlineToc",
                data: {
                  hName: "nav",
                  hProperties: { className: ["inline-toc"] },
                  hChildren: [
                    {
                      type: "element",
                      tagName: "p",
                      properties: { className: ["inline-toc-title"] },
                      children: [{ type: "text", value: opts.title }],
                    },
                    toHast(buildTree(entries).children),
                  ],
                },
              }
              parent.children[index] = replacement
            })
          }
        },
      ]
    },
  }
}
