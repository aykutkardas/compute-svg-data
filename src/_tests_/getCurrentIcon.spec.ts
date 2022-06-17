import { expect } from "chai";
import "mocha";

import getCurrentIcon from "../getCurrentIcon";

import iconSet from "./selection.json";

const documentIcon = {
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

describe("getCurrentIcon", () => {
  it("Exist", () => {
    const currentIcon = getCurrentIcon(iconSet, "document");

    expect(documentIcon).to.deep.equal(currentIcon);
  });

  it("No Found", () => {
    const currentIcon = getCurrentIcon(iconSet, "blabla");

    expect(null).to.equal(currentIcon);
  });
});
