import { expect } from "chai";
import "mocha";

import getIconList from "../getIconList";

import iconSet from "./selection.json";

describe("getIconList", () => {
  it("Default", () => {
    const iconList = getIconList(iconSet);

    expect(["document"]).to.deep.equal(iconList);
  });
});
