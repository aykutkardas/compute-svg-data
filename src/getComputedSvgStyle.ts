import { Options } from "./types";

function getComputedSvgStyle(options: Options = {}) {
  const initialStyle: Record<string, any> = {
    display: "inline-block",
    stroke: "currentColor",
    fill: "currentColor",
  };

  // For ReactNative support - (react-icomoon)
  if (options.native) {
    initialStyle.display = "flex";
    initialStyle.flexDirection = "row";
    initialStyle.flexWrap = "wrap";
  }

  const removeInlineStyle =
    options.removeInitialStyle || options.removeInlineStyle;

  const comptuedStyle = {
    ...(removeInlineStyle ? {} : initialStyle),
    ...(options.size ? { width: options.size, height: options.size } : {}),
    ...(options.style || {}),
  };

  return comptuedStyle;
}

export default getComputedSvgStyle;
