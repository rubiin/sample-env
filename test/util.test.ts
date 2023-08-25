import { describe, expect, it } from "vitest";
import { splitLine } from "../src/utils";

const lineTest = "FOO=BAR";
const commentTest = "# COMMENT";

describe("splitLine", () => {
  it("should parse a line", () => {
    const result = splitLine(lineTest);
    expect(result).toEqual("FOO=");
  });

  it("should not change line when the line is a comment", () => {
    const result = splitLine(commentTest);
    expect(result).toEqual(commentTest);
  });
});
