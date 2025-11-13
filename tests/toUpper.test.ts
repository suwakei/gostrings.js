import { describe, it, expect } from "vitest";
import { toUpper } from "../src/toUpper";

describe("toUpper", () => {
  it("should convert an all-lowercase string to uppercase", () => {
    expect(toUpper("hello world")).toBe("HELLO WORLD");
  });

  it("should convert a mixed-case string to uppercase", () => {
    expect(toUpper("HeLlO wOrLd")).toBe("HELLO WORLD");
  });

  it("should leave an already uppercase string unchanged", () => {
    expect(toUpper("HELLO WORLD")).toBe("HELLO WORLD");
  });

  it("should handle strings with numbers and symbols", () => {
    expect(toUpper("hello 123!@#")).toBe("HELLO 123!@#");
  });

  it("should return an empty string for an empty input", () => {
    expect(toUpper("")).toBe("");
  });

  it("should handle unicode characters", () => {
    // Greek small letter sigma to capital letter Sigma
    expect(toUpper("σ")).toBe("Σ");
    expect(toUpper("hello σ world")).toBe("HELLO Σ WORLD");
  });
});
