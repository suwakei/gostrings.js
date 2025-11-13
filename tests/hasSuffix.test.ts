import { describe, it, expect } from "vitest";
import { hasSuffix } from "../src/hasSuffix";

describe("hasSuffix", () => {
  it("should return true if the string ends with the suffix", () => {
    expect(hasSuffix("abc", "c")).toBe(true);
    expect(hasSuffix("gopher", "er")).toBe(true);
  });

  it("should return false if the string does not end with the suffix", () => {
    expect(hasSuffix("abc", "b")).toBe(false);
    expect(hasSuffix("gopher", "go")).toBe(false);
  });

  it("should return true if the string is identical to the suffix", () => {
    expect(hasSuffix("abc", "abc")).toBe(true);
  });

  it("should return false if the suffix is longer than the string", () => {
    expect(hasSuffix("a", "ab")).toBe(false);
  });

  it("should return true for an empty suffix", () => {
    // In Go, strings.HasSuffix(s, "") is always true.
    expect(hasSuffix("abc", "")).toBe(true);
  });

  it("should return false if the string is empty but the suffix is not", () => {
    expect(hasSuffix("", "a")).toBe(false);
  });

  it("should return true if both the string and suffix are empty", () => {
    expect(hasSuffix("", "")).toBe(true);
  });

  it("should be case-sensitive", () => {
    expect(hasSuffix("Gopher", "R")).toBe(false);
    expect(hasSuffix("Gopher", "r")).toBe(true);
  });
});
