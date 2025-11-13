import { describe, it, expect } from "vitest";
import { compare } from "../src/compare";

describe("compare", () => {
  it("should return 0 for equal strings", () => {
    expect(compare("abc", "abc")).toBe(0);
    expect(compare("", "")).toBe(0);
  });

  it("should return -1 when the first string is lexicographically smaller", () => {
    expect(compare("a", "b")).toBe(-1);
    expect(compare("abc", "abd")).toBe(-1);
    expect(compare("", "a")).toBe(-1);
  });

  it("should return 1 when the first string is lexicographically larger", () => {
    expect(compare("b", "a")).toBe(1);
    expect(compare("abd", "abc")).toBe(1);
    expect(compare("a", "")).toBe(1);
  });

  it("should be case-sensitive", () => {
    // 'a' (ASCII 97) > 'A' (ASCII 65)
    expect(compare("a", "A")).toBe(1);
    expect(compare("A", "a")).toBe(-1);
  });

  it("should handle strings of different lengths where one is a prefix of the other", () => {
    expect(compare("ab", "a")).toBe(1);
    expect(compare("a", "ab")).toBe(-1);
  });
});
