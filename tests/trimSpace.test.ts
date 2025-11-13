import { describe, it, expect } from "vitest";
import { trimSpace } from "../src/trimSpace";

describe("trimSpace", () => {
  it("should remove leading and trailing spaces", () => {
    expect(trimSpace("  hello world  ")).toBe("hello world");
  });

  it("should remove leading and trailing tabs and newlines", () => {
    expect(trimSpace("\t\n hello world \t\n ")).toBe("hello world");
  });

  it("should not remove whitespace from the middle of the string", () => {
    expect(trimSpace("hello   world")).toBe("hello   world");
  });

  it("should return an empty string for a string with only whitespace", () => {
    expect(trimSpace(" \t\r\n ")).toBe("");
  });

  it("should return the original string if there is no surrounding whitespace", () => {
    expect(trimSpace("hello world")).toBe("hello world");
  });

  it("should return an empty string for an empty input string", () => {
    expect(trimSpace("")).toBe("");
  });

  it("should handle various unicode whitespace characters", () => {
    // \u00A0 is a non-breaking space
    expect(trimSpace("\u00A0hello world\u00A0")).toBe("hello world");
  });
});
