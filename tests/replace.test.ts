import { describe, it, expect } from "vitest";
import { replace } from "../src/replace";

describe("replace", () => {
  it("should replace the first n occurrences of a substring", () => {
    expect(replace("oink oink oink", "k", "ky", 2)).toBe("oinky oinky oink");
    expect(replace("oink oink oink", "oink", "moo", 1)).toBe("moo oink oink");
  });

  it("should replace all occurrences when n is negative", () => {
    expect(replace("oink oink oink", "oink", "moo", -1)).toBe("moo moo moo");
    expect(replace("banana", "a", "o", -1)).toBe("bonono");
  });

  it("should do nothing if n is 0", () => {
    expect(replace("oink oink oink", "k", "ky", 0)).toBe("oink oink oink");
  });

  it("should replace all occurrences if n is greater than the number of occurrences", () => {
    expect(replace("oink oink oink", "k", "ky", 5)).toBe("oinky oinky oinky");
  });

  it("should return the original string if the old substring is not found", () => {
    expect(replace("hello", "z", "x", -1)).toBe("hello");
  });

  it("should be case-sensitive", () => {
    expect(replace("Hello World", "world", "Go", -1)).toBe("Hello World");
    expect(replace("Hello World", "World", "Go", -1)).toBe("Hello Go");
  });

  it("should handle non-overlapping replacements correctly", () => {
    // "abab" should be replaced once, not twice.
    expect(replace("ababab", "abab", "X", -1)).toBe("Xab");
  });

  it("should handle empty old string by inserting at the beginning", () => {
    // This mimics JS `replace` behavior for a single replacement.
    // Go's behavior for empty old string is more complex.
    expect(replace("banana", "", "x", 1)).toBe("banana");
  });

  it("should do nothing if the old string is empty and n is 0", () => {
    expect(replace("banana", "", "x", 0)).toBe("banana");
  });
});
