import { IconSet } from "./types";

function getIconList(iconSet: IconSet) {
  if (!iconSet || !Array.isArray(iconSet.icons)) return null;

  return iconSet.icons.map((icon) => icon.properties.name);
}

export default getIconList;
