import { describe, it, expect } from "vitest";
import { lastIndexOf } from "../src/lastIndexOf";

describe("lastIndexOf", () => {
  it("should return the index of the last instance of the substring", () => {
    expect(lastIndexOf("go gopher", "go")).toBe(3);
    expect(lastIndexOf("banana", "na")).toBe(4);
  });

  it("should return -1 if the substring is not present", () => {
    expect(lastIndexOf("chicken", "dmr")).toBe(-1);
    expect(lastIndexOf("hello", "z")).toBe(-1);
  });

  it("should return the correct index for multiple occurrences", () => {
    expect(lastIndexOf("abacaba", "a")).toBe(6);
    expect(lastIndexOf("abc", "a")).toBe(0);
  });

  it("should handle an empty substring", () => {
    // In Go, strings.LastIndex(s, "") returns len(s).
    expect(lastIndexOf("abc", "")).toBe(3);
    expect(lastIndexOf("", "")).toBe(0);
  });

  it("should return -1 if the string is empty but the substring is not", () => {
    expect(lastIndexOf("", "a")).toBe(-1);
  });

  it("should be case-sensitive", () => {
    expect(lastIndexOf("Gopher", "p")).toBe(2);
    expect(lastIndexOf("Gopher", "P")).toBe(-1);
  });

  it("should return 0 for identical strings", () => {
    expect(lastIndexOf("abc", "abc")).toBe(0);
  });

  it("should return -1 if the substring is longer than the string", () => {
    expect(lastIndexOf("a", "ab")).toBe(-1);
  });
});
