// quartz/components/scripts/svg-theme.inline.ts
import colorMap from "../../static/excalidraw-colors.json"

async function themeSvgs() {
  // grabs every SVG image on the page — adjust the selector if you
  // want to be more specific, e.g. img[src*="/diagrams/"]
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

    const wrapper = document.createElement("span")
    wrapper.className = "ex-svg-wrapper"
    wrapper.innerHTML = svgText
    img.replaceWith(wrapper)
  }
}

document.addEventListener("nav", themeSvgs)
