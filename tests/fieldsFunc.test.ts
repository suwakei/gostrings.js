import { describe, it, expect } from "vitest";
import { fieldsFunc } from "../src/fieldsFunc";

describe("fieldsFunc", () => {
  it("should split a string using a function that identifies a single character", () => {
    const s = "a,b,c";
    const f = (c: string) => c === ",";
    expect(fieldsFunc(s, f)).toEqual(["a", "b", "c"]);
  });

  it("should handle multiple consecutive separators", () => {
    const s = "a,,b, c";
    const f = (c: string) => c === "," || c === " ";
    expect(fieldsFunc(s, f)).toEqual(["a", "b", "c"]);
  });

  it("should handle leading and trailing separators", () => {
    const s = ",,a,b,c,,";
    const f = (c: string) => c === ",";
    expect(fieldsFunc(s, f)).toEqual(["a", "b", "c"]);
  });

  it("should return an empty array for an empty string", () => {
    const f = (c: string) => c === ",";
    expect(fieldsFunc("", f)).toEqual([]);
  });

  it("should return an empty array if the string consists only of separators", () => {
    const s = ",,, ,";
    const f = (c: string) => c === "," || c === " ";
    expect(fieldsFunc(s, f)).toEqual([]);
  });

  it("should return the original string in an array if no characters match the function", () => {
    const s = "abc";
    const f = (c: string) => c === ",";
    expect(fieldsFunc(s, f)).toEqual(["abc"]);
  });
});
