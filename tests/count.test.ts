import { describe, it, expect } from "vitest";
import { count } from "../src/count";

describe("count", () => {
  it("should count non-overlapping instances of a substring", () => {
    expect(count("cheese", "e")).toBe(3);
    expect(count("five", "f")).toBe(1);
    expect(count("ababa", "aba")).toBe(1); // non-overlapping
    expect(count("aaaaa", "aa")).toBe(2); // non-overlapping
  });

  it("should return 0 if the substring is not found", () => {
    expect(count("cheese", "z")).toBe(0);
  });

  it("should handle counting in an empty string", () => {
    expect(count("", "a")).toBe(0);
  });

  it("should handle counting an empty substring", () => {
    // In Go, strings.Count(s, "") is len(s) + 1
    expect(count("cheese", "")).toBe(7);
    expect(count("a", "")).toBe(2);
  });

  it("should handle counting an empty substring in an empty string", () => {
    expect(count("", "")).toBe(1);
  });

  it("should be case-sensitive", () => {
    expect(count("Cheese", "e")).toBe(3);
    expect(count("Cheese", "E")).toBe(0);
  });

  it("should return 0 if substring is longer than the string", () => {
    expect(count("a", "aa")).toBe(0);
  });
});
