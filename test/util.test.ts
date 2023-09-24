import { describe, expect, it } from "vitest";
import { splitLine } from "../src/utils";

const lineTest = "FOO=BAR";
const commentTest = "# COMMENT";

describe("splitLine", () => {
  it("should parse a line", () => {
    expect(splitLine(lineTest)).toEqual("FOO=");
  });

  it("should not change line when the line is a comment", () => {
    expect(splitLine(commentTest)).toEqual(commentTest);
  });
  
});
