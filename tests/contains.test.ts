import { describe, it, expect } from "vitest";
import { contains } from "../src/contains";

describe("contains", () => {
  it("should return true when the substring is present", () => {
    expect(contains("seafood", "foo")).toBe(true);
    expect(contains("hello world", "world")).toBe(true);
  });

  it("should return false when the substring is not present", () => {
    expect(contains("seafood", "bar")).toBe(false);
    expect(contains("hello world", "goodbye")).toBe(false);
  });

  it("should return true for an empty substring", () => {
    // In Go, strings.Contains(s, "") is always true.
    expect(contains("seafood", "")).toBe(true);
    expect(contains("", "")).toBe(true);
  });

  it("should return false if the main string is empty and substring is not", () => {
    expect(contains("", "a")).toBe(false);
  });

  it("should be case-sensitive", () => {
    expect(contains("seafood", "Foo")).toBe(false);
    expect(contains("abc", "B")).toBe(false);
  });

  it("should return true when the string and substring are identical", () => {
    expect(contains("test", "test")).toBe(true);
  });

  it("should handle substrings at the beginning or end", () => {
    expect(contains("hello world", "hello")).toBe(true);
    expect(contains("hello world", "world")).toBe(true);
  });
});
