import { describe, it, expect } from "vitest";
import { equalFold } from "../src/equalFold";

describe("equalFold", () => {
  it("should return true for identical strings", () => {
    expect(equalFold("abc", "abc")).toBe(true);
  });

  it("should return true for strings that are equal under case-folding", () => {
    expect(equalFold("abc", "ABC")).toBe(true);
    expect(equalFold("Go", "go")).toBe(true);
  });

  it("should return false for different strings", () => {
    expect(equalFold("abc", "abd")).toBe(false);
    expect(equalFold("a", "b")).toBe(false);
  });

  it("should handle empty strings", () => {
    expect(equalFold("", "")).toBe(true);
    expect(equalFold("a", "")).toBe(false);
    expect(equalFold("", "a")).toBe(false);
  });

  it("should handle strings with different lengths", () => {
    expect(equalFold("abc", "ab")).toBe(false);
  });

  it("should handle strings with only case differences", () => {
    expect(equalFold("Abc", "aBC")).toBe(true);
  });

  it("should handle unicode characters", () => {
    // Note: toLocaleLowerCase() is locale-sensitive.
    // For example, in Turkish, 'I' becomes 'ı'.
    expect(equalFold("Σ", "σ")).toBe(true);
  });
});
