import { expect } from "chai";
import "mocha";

import getComputedSvgData from "../getComputedSvgData";

import iconSet from "./selection.json";

const initialStyle = {
  display: "inline-block",
  stroke: "currentColor",
  fill: "currentColor",
};

describe("getComputedSvgData", () => {
  it("Default", () => {
    const iconData = getComputedSvgData(iconSet, "document");

    expect({
      viewBox: "0 0 768 1024",
      style: {
        ...initialStyle,
      },
      paths: [{ d: "M48 1024h672c26.464", key: "document0" }],
      title: undefined,
    }).to.deep.equal(iconData);
  });

  it("With Title", () => {
    const iconData = getComputedSvgData(iconSet, "document", {
      title: "Document",
    });

    expect({
      viewBox: "0 0 768 1024",
      style: {
        ...initialStyle,
      },
      paths: [{ d: "M48 1024h672c26.464", key: "document0" }],
      title: "Document",
    }).to.deep.equal(iconData);
  });
});
