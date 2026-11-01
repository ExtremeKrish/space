import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

// @ts-ignore
import script from "./scripts/tocToggle.inline"

export default (() => {
  const TocToggle: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    return (
      <button
        type="button"
        id="toc-toggle-btn"
        class={`toc-toggle-button ${displayClass ?? ""}`}
        aria-label="Toggle Table of Contents"
        title="Toggle Table of Contents"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="toc-toggle-icon"
        >
          <line x1="21" y1="6" x2="3" y2="6"></line>
          <line x1="15" y1="12" x2="3" y2="12"></line>
          <line x1="17" y1="18" x2="3" y2="18"></line>
        </svg>
      </button>
    )
  }

  TocToggle.afterDOMLoaded = script

  return TocToggle
}) satisfies QuartzComponentConstructor