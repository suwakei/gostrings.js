import { describe, it, expect } from "vitest";
import { repeat } from "../src/repeat";

describe("repeat", () => {
  it("should repeat a string a given number of times", () => {
    expect(repeat("a", 3)).toBe("aaa");
    expect(repeat("ab", 2)).toBe("abab");
    expect(repeat("go", 3)).toBe("gogogo");
  });

  it("should return an empty string if count is 0", () => {
    expect(repeat("a", 0)).toBe("");
  });

  it("should return the string itself if count is 1", () => {
    expect(repeat("abc", 1)).toBe("abc");
  });

  it("should return an empty string if the input string is empty", () => {
    expect(repeat("", 10)).toBe("");
  });

  it("should throw an error if count is negative", () => {
    // In Go, Repeat panics if count is negative.
    // In JS, String.prototype.repeat() throws a RangeError.
    expect(() => repeat("a", -1)).toThrow();
  });

  it("should handle an empty string and zero count", () => {
    expect(repeat("", 0)).toBe("");
  });
});
