import getComputedSvgStyle from "./getComputedSvgStyle";
import getCurrentIcon from "./getCurrentIcon";
import { IconSet, Options } from "./types";

function getComputedSvgData(
  iconSet: IconSet,
  iconName: string,
  options: Options = {}
) {
  if (!iconSet || !iconName) return null;

  const currentIcon = getCurrentIcon(iconSet, iconName);

  if (!currentIcon) return null;

  const { width = "1024" } = currentIcon.icon;
  const viewBox = `0 0 ${width} 1024`;
  const computedStyle = getComputedSvgStyle(options);

  return {
    viewBox,
    style: computedStyle,
  };
}

export default getComputedSvgData;
