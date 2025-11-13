import { describe, it, expect } from "vitest";
import { trim } from "../src/trim";

describe("trim", () => {
  it("should remove leading and trailing characters from the cutset", () => {
    expect(trim("¡¡¡Hello, Gophers!!!", "!¡")).toBe("Hello, Gophers");
    expect(trim("abchelloabc", "abc")).toBe("hello");
  });

  it("should not remove characters from the middle of the string", () => {
    expect(trim("h.e.l.l.o", ".")).toBe("h.e.l.l.o");
  });

  it("should return an empty string if the entire string consists of characters from the cutset", () => {
    expect(trim("123123123", "123")).toBe("");
  });

  it("should return the original string if no characters from the cutset are at the ends", () => {
    expect(trim("hello", "abc")).toBe("hello");
  });

  it("should return an empty string for an empty input string", () => {
    expect(trim("", "abc")).toBe("");
  });

  it("should return the original string if the cutset is empty", () => {
    expect(trim("hello", "")).toBe("hello");
  });

  it("should remove only leading characters if only they exist", () => {
    expect(trim("...hello", ".")).toBe("hello");
  });

  it("should remove only trailing characters if only they exist", () => {
    expect(trim("hello...", ".")).toBe("hello");
  });

  it("should handle unicode characters", () => {
    expect(trim("@@@你好@@@", "@")).toBe("你好");
  });
});
