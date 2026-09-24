// quartz/components/scripts/svg-theme.inline.ts
import colorMap from "../../static/excalidraw-colors.json"

async function themeSvgs() {
  const imgs = document.querySelectorAll<HTMLImageElement>("img[data-ex-svg]")
  for (const img of imgs) {
    const src = img.getAttribute("src")
    if (!src) continue

    const res = await fetch(src)
    let svgText = await res.text()

    // replace every known hex with a CSS var reference
    for (const [hex, entry] of Object.entries(colorMap)) {
      const re = new RegExp(hex, "gi")
      svgText = svgText.replace(re, `var(--ex-${entry.name})`)
    }

    const wrapper = document.createElement("span")
    wrapper.className = "ex-svg-wrapper"
    wrapper.innerHTML = svgText
    img.replaceWith(wrapper)
  }
}

document.addEventListener("nav", themeSvgs)
