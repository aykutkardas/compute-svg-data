import { Options, Icon } from "./types";

type Path = {
  d: string;
  key: string;
  [key: string]: any;
};

function getSvgPaths(currentIcon: Icon, options: Options = {}) {
  if (!currentIcon) return [];

  return currentIcon.icon.paths.map((_path, index) => {
    const attrs = currentIcon.icon.attrs?.[index] || {};

    if (options.disableFill) {
      delete attrs.fill;
    }

    const path: Path = {
      d: _path,
      key: currentIcon.properties.name + index,
      ...attrs,
    };

    return path;
  });
}

export default getSvgPaths;
