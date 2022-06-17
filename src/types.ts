export interface Options {
  size?: string | number;
  removeInitialStyle?: boolean;
  removeInlineStyle?: boolean;
  style?: Record<string, any>;
  disableFill?: boolean;
  [key: string]: any;
}

export interface Icon {
  properties: {
    name: string;
  };
  icon: {
    paths: string[];
    attrs?: Object[];
    width?: number | string;
  };
}

export interface IconSet {
  icons: Icon[];
}
