// quartz/components/scripts/svg-theme.inline.ts
import colorMap from "../../static/excalidraw-colors.json"

async function themeSvgs() {
  const imgs = document.querySelectorAll<HTMLImageElement>('img[src$=".svg"]')

  for (const img of imgs) {
    const src = img.getAttribute("src")
    if (!src) continue

    const res = await fetch(src)
    let svgText = await res.text()

    for (const [hex, entry] of Object.entries(colorMap)) {
      const re = new RegExp(hex, "gi")
      svgText = svgText.replace(re, `var(--ex-${entry.name})`)
    }

    // grab any width Obsidian's |number syntax set on the <img>, before we lose it
    const explicitWidth = img.getAttribute("width")

    const wrapper = document.createElement("span")
    wrapper.className = "ex-svg-wrapper"
    wrapper.innerHTML = svgText

    const svgEl = wrapper.querySelector("svg")
    if (svgEl) {
      // drop Excalidraw's hardcoded 2x pixel dimensions — the viewBox
      // alone is enough to keep the aspect ratio correct
      svgEl.removeAttribute("width")
      svgEl.removeAttribute("height")

      if (explicitWidth) {
        svgEl.style.width = `${explicitWidth}px`
      } else {
        svgEl.style.width = "100%"
      }
      svgEl.style.height = "auto"
    }

    img.replaceWith(wrapper)
  }
}

document.addEventListener("nav", themeSvgs)
