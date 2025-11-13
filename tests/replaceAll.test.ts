import { describe, it, expect } from "vitest";
import { replaceAll } from "../src/replaceAll";

describe("replaceAll", () => {
  it("should replace all occurrences of a substring", () => {
    expect(replaceAll("oink oink oink", "oink", "moo")).toBe("moo moo moo");
    expect(replaceAll("banana", "a", "o")).toBe("bonono");
  });

  it("should return the original string if the old substring is not found", () => {
    expect(replaceAll("hello", "z", "x")).toBe("hello");
  });

  it("should be case-sensitive", () => {
    expect(replaceAll("Hello World", "world", "Go")).toBe("Hello World");
    expect(replaceAll("Hello World", "World", "Go")).toBe("Hello Go");
  });

  it("should handle non-overlapping replacements correctly", () => {
    // "abab" should be replaced once, not twice.
    expect(replaceAll("ababab", "abab", "X")).toBe("Xab");
  });

  it("should return an empty string if the input is empty", () => {
    expect(replaceAll("", "a", "b")).toBe("");
  });

  it("should handle an empty old string by inserting the new string between each character", () => {
    // This mimics the behavior of `s.split('').join(newStr)`
    expect(replaceAll("abc", "", "x")).toBe("axbxc");
    expect(replaceAll("", "", "x")).toBe("");
  });

  it("should handle an empty new string by deleting all occurrences of the old string", () => {
    expect(replaceAll("banana", "a", "")).toBe("bnn");
  });
});
