import { Options, Icon } from "./types";

function getSvgPaths(currentIcon: Icon, options: Options = {}) {
  if (!currentIcon) return [];

  return currentIcon.icon.paths.map((_path, index) => {
    const attrs = currentIcon.icon.attrs?.[index] || {};

    if (options.disableFill) {
      delete attrs.fill;
    }

    const path = {
      d: _path,
      key: currentIcon.properties.name + index,
      ...attrs,
    };

    return path;
  });
}

export default getSvgPaths;
