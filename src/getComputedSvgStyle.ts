import { Options } from "./types";

function getComputedSvgStyle(options: Options = {}) {
  const initialStyle = {
    display: "inline-block",
    stroke: "currentColor",
    fill: "currentColor",
  };

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
