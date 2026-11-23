import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { FilePath, resolveRelative, simplifySlug, slugifyFilePath } from "../util/path"
import { QuartzPluginData } from "../plugins/vfile"

// Accepts "[[Page Name]]", "[[Page Name|alias]]", "folder/Page Name", or a slug
function findPage(raw: unknown, allFiles: QuartzPluginData[]): QuartzPluginData | undefined {
  if (typeof raw !== "string") return undefined

  const target = raw
    .trim()
    .replace(/^\[\[/, "")
    .replace(/\]\]$/, "")
    .split("|")[0]
    .split("#")[0]
    .trim()
  if (!target) return undefined

  const slug = slugifyFilePath(target as FilePath)
  const lastSegment = slug.split("/").pop()

  return (
    // exact slug
    allFiles.find((f) => f.slug === slug) ??
    // slug ignoring trailing /index
    allFiles.find((f) => f.slug && simplifySlug(f.slug) === simplifySlug(slug)) ??
    // just the file name (like Obsidian's shortest-path links)
    allFiles.find((f) => f.slug && f.slug.split("/").pop() === lastSegment) ??
    // finally, by title
    allFiles.find(
      (f) => f.frontmatter?.title?.toLowerCase() === target.toLowerCase(),
    )
  )
}

export default (() => {
  const PrevNext: QuartzComponent = ({ fileData, allFiles }: QuartzComponentProps) => {
    const fm = fileData.frontmatter as Record<string, unknown> | undefined
    const prev = findPage(fm?.previous, allFiles)
    const next = findPage(fm?.next, allFiles)

    if (!prev && !next) return null

    const current = fileData.slug!
    const titleOf = (p: QuartzPluginData) => p.frontmatter?.title ?? p.slug!

    return (
      <nav class="prev-next" aria-label="Previous and next pages">
        {prev ? (
          <a href={resolveRelative(current, prev.slug!)} class="internal prev-next-link prev">
            <svg
              class="prev-next-arrow"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
            <span class="prev-next-text">
              <span class="prev-next-label">Previous</span>
              <span class="prev-next-title">{titleOf(prev)}</span>
            </span>
          </a>
        ) : (
          <span class="prev-next-spacer" />
        )}

        {next ? (
          <a href={resolveRelative(current, next.slug!)} class="internal prev-next-link next">
            <span class="prev-next-text">
              <span class="prev-next-label">Next</span>
              <span class="prev-next-title">{titleOf(next)}</span>
            </span>
            <svg
              class="prev-next-arrow"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </a>
        ) : (
          <span class="prev-next-spacer" />
        )}
      </nav>
    )
  }

  return PrevNext
}) satisfies QuartzComponentConstructor