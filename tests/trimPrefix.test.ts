import { describe, it, expect } from "vitest";
import { trimPrefix } from "../src/trimPrefix";

describe("trimPrefix", () => {
  it("should remove the prefix if the string starts with it", () => {
    expect(trimPrefix("¡¡¡Hello, Gophers!!!", "¡¡¡")).toBe("Hello, Gophers!!!");
    expect(trimPrefix("abc-hello", "abc-")).toBe("hello");
  });

  it("should return the original string if it does not start with the prefix", () => {
    expect(trimPrefix("Hello, Gophers!!!", "¡¡¡")).toBe("Hello, Gophers!!!");
    expect(trimPrefix("abc-hello", "xyz-")).toBe("abc-hello");
  });

  it("should return an empty string if the string is identical to the prefix", () => {
    expect(trimPrefix("hello", "hello")).toBe("");
  });

  it("should return the original string if the prefix is empty", () => {
    expect(trimPrefix("hello", "")).toBe("hello");
  });

  it("should return an empty string for an empty input string", () => {
    expect(trimPrefix("", "abc")).toBe("");
    expect(trimPrefix("", "")).toBe("");
  });

  it("should be case-sensitive", () => {
    expect(trimPrefix("Hello", "hello")).toBe("Hello");
    expect(trimPrefix("Hello", "He")).toBe("llo");
  });

  it("should return the original string if the prefix is longer than the string", () => {
    expect(trimPrefix("hi", "hello")).toBe("hi");
  });
});
