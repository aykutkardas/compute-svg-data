import { expect } from "chai";
import "mocha";

import getSvgPaths from "../getSvgPaths";
import { Icon } from "../types";

const documentIcon: Icon = {
  icon: {
    paths: ["M48 1024h672c26.464"],
    width: 768,
    attrs: [],
    isMulticolor: false,
    isMulticolor2: false,
    tags: ["document", "file", "paper", "text"],
    defaultCode: 57349,
    grid: 32,
  },
  attrs: [],
  properties: {
    id: 6,
    order: 1005,
    prevSize: 32,
    code: 57349,
    name: "document",
  },
  setIdx: 0,
  setId: 5,
  iconIdx: 5,
};

describe("getSvgPaths", () => {
  it("Default", () => {
    const paths = getSvgPaths(documentIcon);

    expect([
      {
        d: "M48 1024h672c26.464",
        key: "document0",
      },
    ]).to.deep.equal(paths);
  });

  it("With Attribute", () => {
    documentIcon.icon.attrs = [{ fill: "red", stroke: "blue" }];
    const paths = getSvgPaths(documentIcon);
    expect([
      {
        d: "M48 1024h672c26.464",
        key: "document0",
        fill: "red",
        stroke: "blue",
      },
    ]).to.deep.equal(paths);
  });

  it("With DisableFill", () => {
    documentIcon.icon.attrs = [{ fill: "red", stroke: "blue" }];
    const options = { disableFill: true };
    const paths = getSvgPaths(documentIcon, options);
    expect([
      {
        d: "M48 1024h672c26.464",
        key: "document0",
        stroke: "blue",
      },
    ]).to.deep.equal(paths);
  });
});
