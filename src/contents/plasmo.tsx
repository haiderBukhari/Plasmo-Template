import Extension from "@/components/extension"
import type { PlasmoCSConfig, PlasmoGetInlineAnchor, PlasmoGetShadowHostId, PlasmoGetStyle } from "plasmo"

import styleText from "data-text:../style.css"

const INJECTED_COMPONENT_ID = "#secondary.style-scope.ytd-watch-flexy"

export const getStyle: PlasmoGetStyle = () => {
  const style = document.createElement("style")
  style.textContent = styleText
  return style
}

export const config: PlasmoCSConfig = {
  matches: ["https://www.youtube.com/*"]
}

export const getShadowHostId: PlasmoGetShadowHostId = () => `adonais`

export const getInlineAnchor: PlasmoGetInlineAnchor = async () => ({
  element: document.querySelector(INJECTED_COMPONENT_ID),
  insertPosition: "afterbegin"
})

function PlasmoUI() {
  return(
    <div className="w-full text-md">
      <Extension />
    </div>
  )
}

export default PlasmoUI
