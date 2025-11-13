import { describe, it, expect } from "vitest";
import { containsAny } from "../src/containsAny";

describe("containsAny", () => {
  it("should return true if s contains any characters from chars", () => {
    expect(containsAny("team", "a")).toBe(true);
    expect(containsAny("failure", "u & i")).toBe(true);
    expect(containsAny("seafood", "fo")).toBe(true);
    expect(containsAny("seafood", "ox")).toBe(true);
  });

  it("should return false if s does not contain any characters from chars", () => {
    expect(containsAny("team", "i")).toBe(false);
    expect(containsAny("team", "u")).toBe(false);
    expect(containsAny("seafood", "zx")).toBe(false);
  });

  it("should return false if chars is empty", () => {
    expect(containsAny("abc", "")).toBe(false);
  });

  it("should return false if s is empty", () => {
    expect(containsAny("", "a")).toBe(false);
  });

  it("should return false if both s and chars are empty", () => {
    expect(containsAny("", "")).toBe(false);
  });

  it("should be case-sensitive", () => {
    expect(containsAny("Team", "t")).toBe(false);
    expect(containsAny("Team", "T")).toBe(true);
  });

  it("should handle unicode characters", () => {
    expect(containsAny("golang", "λ")).toBe(false);
    expect(containsAny("goλang", "λ")).toBe(true);
  });
});
