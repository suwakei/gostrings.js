import { describe, it, expect } from "vitest";
import { split } from "../src/split";

describe("split", () => {
  it("should split a string by a separator", () => {
    expect(split("a,b,c", ",")).toEqual(["a", "b", "c"]);
    expect(split("foo-bar-baz", "-")).toEqual(["foo", "bar", "baz"]);
  });

  it("should handle leading and trailing separators", () => {
    expect(split(",a,b", ",")).toEqual(["", "a", "b"]);
    expect(split("a,b,", ",")).toEqual(["a", "b", ""]);
  });

  it("should handle consecutive separators", () => {
    expect(split("a,,b", ",")).toEqual(["a", "", "b"]);
  });

  it("should return a slice with the original string if the separator is not found", () => {
    expect(split("abc", "-")).toEqual(["abc"]);
  });

  it("should return a slice of characters if the separator is an empty string", () => {
    // This matches Go's strings.Split behavior
    expect(split("abc", "")).toEqual(["a", "b", "c"]);
  });

  it("should handle an empty input string", () => {
    // Go: strings.Split("", ",") -> [""]
    expect(split("", ",")).toEqual([""]);
  });

  it("should handle an empty input string and an empty separator", () => {
    // Go: strings.Split("", "") -> []
    expect(split("", "")).toEqual([]);
  });
});
