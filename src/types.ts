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
    [key: string]: any;
  };
  icon: {
    paths: string[];
    attrs?: Record<string, any>[];
    width?: number | string;
    [key: string]: any;
  };
  [key: string]: any;
}

export interface IconSet {
  icons: Icon[];
}
