import { describe, it, expect } from "vitest";
import { trimSuffix } from "../src/trimSuffix";

describe("trimSuffix", () => {
  it("should remove the suffix if the string ends with it", () => {
    expect(trimSuffix("¡¡¡Hello, Gophers!!!", "!!!")).toBe("¡¡¡Hello, Gophers");
    expect(trimSuffix("hello-abc", "-abc")).toBe("hello");
  });

  it("should return the original string if it does not end with the suffix", () => {
    expect(trimSuffix("Hello, Gophers!!!", "???")).toBe("Hello, Gophers!!!");
    expect(trimSuffix("hello-abc", "-xyz")).toBe("hello-abc");
  });

  it("should return an empty string if the string is identical to the suffix", () => {
    expect(trimSuffix("hello", "hello")).toBe("");
  });

  it("should return the original string if the suffix is empty", () => {
    expect(trimSuffix("hello", "")).toBe("hello");
  });

  it("should return an empty string for an empty input string", () => {
    expect(trimSuffix("", "abc")).toBe("");
    expect(trimSuffix("", "")).toBe("");
  });

  it("should be case-sensitive", () => {
    expect(trimSuffix("Hello", "LLO")).toBe("Hello");
    expect(trimSuffix("Hello", "llo")).toBe("He");
  });

  it("should return the original string if the suffix is longer than the string", () => {
    expect(trimSuffix("hi", "hello")).toBe("hi");
  });
});
