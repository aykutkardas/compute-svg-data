import { IconSet } from "./types";

function getCurrentIcon(iconSet: IconSet, iconName: string) {
  if (!iconSet || !iconName) return null;

  const currentIcon = iconSet.icons.find(
    (item) => item.properties.name === iconName
  );

  return currentIcon || null;
}

export default getCurrentIcon;
