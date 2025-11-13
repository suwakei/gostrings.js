import { describe, it, expect } from "vitest";
import { toLower } from "../src/toLower";

describe("toLower", () => {
  it("should convert an all-uppercase string to lowercase", () => {
    expect(toLower("HELLO WORLD")).toBe("hello world");
  });

  it("should convert a mixed-case string to lowercase", () => {
    expect(toLower("HeLlO wOrLd")).toBe("hello world");
  });

  it("should leave an already lowercase string unchanged", () => {
    expect(toLower("hello world")).toBe("hello world");
  });

  it("should handle strings with numbers and symbols", () => {
    expect(toLower("HELLO 123!@#")).toBe("hello 123!@#");
  });

  it("should return an empty string for an empty input", () => {
    expect(toLower("")).toBe("");
  });

  it("should handle unicode characters", () => {
    // Greek capital letter Sigma to small letter sigma
    expect(toLower("Σ")).toBe("σ");
    expect(toLower("HELLO Σ WORLD")).toBe("hello σ world");
  });
});
