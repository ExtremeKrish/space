import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

export default (() => {
  const CustomTableOfContents: QuartzComponent = ({
    fileData,
    displayClass,
  }: QuartzComponentProps) => {
    if (!fileData.toc) {
      return null
    }

    return (
      <div class={classNames(displayClass, "custom-toc-container")}>
        <h3 class="custom-toc-title">Contents</h3>
        <ul class="custom-toc-list">
          {fileData.toc.map((tocEntry) => (
            <li key={tocEntry.slug} class={`depth-${tocEntry.depth}`}>
              <a href={`#${tocEntry.slug}`} data-for={tocEntry.slug}>
                {tocEntry.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  return CustomTableOfContents
}) satisfies QuartzComponentConstructor