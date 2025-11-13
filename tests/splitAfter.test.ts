import { describe, it, expect } from "vitest";
import { splitAfter } from "../src/splitAfter";

describe("splitAfter", () => {
  it("should split a string after each separator", () => {
    expect(splitAfter("a,b,c", ",")).toEqual(["a,", "b,", "c"]);
  });

  it("should handle leading and trailing separators", () => {
    expect(splitAfter(",a,b", ",")).toEqual([",", "a,", "b"]);
    expect(splitAfter("a,b,", ",")).toEqual(["a,", "b,"]);
  });

  it("should handle consecutive separators", () => {
    expect(splitAfter("a,,b", ",")).toEqual(["a,", ",", "b"]);
  });

  it("should return a slice with the original string if the separator is not found", () => {
    expect(splitAfter("abc", "-")).toEqual(["abc"]);
  });

  it("should return a slice of characters if the separator is an empty string", () => {
    // This matches Go's strings.SplitAfter behavior
    expect(splitAfter("abc", "")).toEqual(["a", "b", "c"]);
  });

  it("should handle an empty input string", () => {
    // Go: strings.SplitAfter("", ",") -> [""]
    expect(splitAfter("", ",")).toEqual([""]);
  });

  it("should handle an empty input string and an empty separator", () => {
    // Go: strings.SplitAfter("", "") -> []
    expect(splitAfter("", "")).toEqual([]);
  });
});
