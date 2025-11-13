import { describe, it, expect } from "vitest";
import { indexOf } from "../src/indexOf";

describe("indexOf", () => {
  it("should return the indexOf of the first instance of the substring", () => {
    expect(indexOf("chicken", "ken")).toBe(4);
    expect(indexOf("hello world", "o")).toBe(4);
  });

  it("should return -1 if the substring is not present", () => {
    expect(indexOf("chicken", "dmr")).toBe(-1);
    expect(indexOf("hello", "z")).toBe(-1);
  });

  it("should return 0 if the substring is at the beginning", () => {
    expect(indexOf("abc", "a")).toBe(0);
  });

  it("should handle an empty substring", () => {
    // In Go, strings.IndexOf(s, "") returns 0.
    expect(indexOf("abc", "")).toBe(0);
    expect(indexOf("", "")).toBe(0);
  });

  it("should return -1 if the string is empty but the substring is not", () => {
    expect(indexOf("", "a")).toBe(-1);
  });

  it("should be case-sensitive", () => {
    expect(indexOf("Chicken", "c")).toBe(3);
    expect(indexOf("CHICKEN", "c")).toBe(-1);
    expect(indexOf("abc", "A")).toBe(-1);
  });

  it("should return 0 for identical strings", () => {
    expect(indexOf("abc", "abc")).toBe(0);
  });

  it("should return -1 if the substring is longer than the string", () => {
    expect(indexOf("a", "ab")).toBe(-1);
  });
});
