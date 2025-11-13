import { describe, it, expect } from "vitest";
import { hasPrefix } from "../src/hasPrefix";

describe("hasPrefix", () => {
  it("should return true if the string starts with the prefix", () => {
    expect(hasPrefix("abc", "a")).toBe(true);
    expect(hasPrefix("gopher", "go")).toBe(true);
  });

  it("should return false if the string does not start with the prefix", () => {
    expect(hasPrefix("abc", "b")).toBe(false);
    expect(hasPrefix("gopher", "ph")).toBe(false);
  });

  it("should return true if the string is identical to the prefix", () => {
    expect(hasPrefix("abc", "abc")).toBe(true);
  });

  it("should return false if the prefix is longer than the string", () => {
    expect(hasPrefix("a", "ab")).toBe(false);
  });

  it("should return true for an empty prefix", () => {
    // In Go, strings.HasPrefix(s, "") is always true.
    expect(hasPrefix("abc", "")).toBe(true);
  });

  it("should return false if the string is empty but the prefix is not", () => {
    expect(hasPrefix("", "a")).toBe(false);
  });

  it("should return true if both the string and prefix are empty", () => {
    expect(hasPrefix("", "")).toBe(true);
  });

  it("should be case-sensitive", () => {
    expect(hasPrefix("Gopher", "g")).toBe(false);
    expect(hasPrefix("Gopher", "G")).toBe(true);
  });
});
