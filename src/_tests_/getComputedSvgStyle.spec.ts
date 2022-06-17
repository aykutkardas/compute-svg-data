import { expect } from "chai";
import "mocha";

import getComputedSvgStyle from "../getComputedSvgStyle";

const initialStyle = {
  display: "inline-block",
  stroke: "currentColor",
  fill: "currentColor",
};

describe("getComputedSvgStyle", () => {
  it("Default", () => {
    const options = {};
    const computedStyle = getComputedSvgStyle(options);

    expect(initialStyle).to.deep.equal(computedStyle);
  });

  it("Native", () => {
    const options = { native: true };
    const computedStyle = getComputedSvgStyle(options);

    expect({
      ...initialStyle,
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
    }).to.deep.equal(computedStyle);
  });

  it("With Size", () => {
    const options = { size: 20 };
    const computedStyle = getComputedSvgStyle(options);

    expect({
      ...initialStyle,
      width: 20,
      height: 20,
    }).to.deep.equal(computedStyle);
  });

  it("With Style", () => {
    const options = {
      style: {
        border: "1px solid red",
      },
    };
    const computedStyle = getComputedSvgStyle(options);

    expect({
      ...initialStyle,
      border: "1px solid red",
    }).to.deep.equal(computedStyle);
  });

  it("Mixin", () => {
    const options = {
      size: 10,
      style: {
        border: "1px solid red",
      },
    };
    const computedStyle = getComputedSvgStyle(options);

    expect({
      ...initialStyle,
      width: 10,
      height: 10,
      border: "1px solid red",
    }).to.deep.equal(computedStyle);
  });
});
