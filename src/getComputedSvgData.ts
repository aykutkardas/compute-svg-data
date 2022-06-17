import getComputedSvgStyle from "./getComputedSvgStyle";
import getCurrentIcon from "./getCurrentIcon";
import getSvgPaths from "./getSvgPaths";
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
  const paths = getSvgPaths(currentIcon, options);

  return {
    viewBox,
    style: computedStyle,
    paths,
    title: options.title,
  };
}

export default getComputedSvgData;
