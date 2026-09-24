import { QuartzComponentConstructor } from "./types"
import script from "./scripts/svg-theme.inline.ts"

export default (() => {
  function SvgTheme() {
    return null // renders nothing, just carries the script
  }
  SvgTheme.afterDOMLoaded = script
  return SvgTheme
}) satisfies QuartzComponentConstructor
