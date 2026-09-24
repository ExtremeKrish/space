// quartz/components/scripts/svg-theme.inline.ts
import colorMap from "../../static/excalidraw-colors.json"

function isCentered(img: HTMLImageElement) {
  return img.alt.trim().toLowerCase() === "center"
}

async function themeSvgs() {
  const allImgs = document.querySelectorAll<HTMLImageElement>("img")

  for (const img of allImgs) {
    const src = img.getAttribute("src")
    const centered = isCentered(img)

    if (src && src.endsWith(".svg")) {
      // --- existing SVG inlining + color-swap logic ---
      const res = await fetch(src)
      let svgText = await res.text()

      for (const [hex, entry] of Object.entries(colorMap)) {
        const re = new RegExp(hex, "gi")
        svgText = svgText.replace(re, `var(--ex-${entry.name})`)
      }

      const explicitWidth = img.getAttribute("width")

      const svgWrapper = document.createElement("span")
      svgWrapper.className = "ex-svg-wrapper"
      svgWrapper.innerHTML = svgText

      const svgEl = svgWrapper.querySelector("svg")
      if (svgEl) {
        svgEl.removeAttribute("width")
        svgEl.removeAttribute("height")
        svgEl.style.width = explicitWidth ? `${explicitWidth}px` : "100%"
        svgEl.style.height = "auto"
      }

      if (centered) {
        const center = document.createElement("div")
        center.className = "ex-center"
        center.appendChild(svgWrapper)
        img.replaceWith(center)
      } else {
        img.replaceWith(svgWrapper)
      }
    } else if (centered) {
      // --- plain jpg/png etc, just needs wrapping ---
      const center = document.createElement("div")
      center.className = "ex-center"
      img.replaceWith(center)
      center.appendChild(img)
    }
  }
}

document.addEventListener("nav", themeSvgs)
