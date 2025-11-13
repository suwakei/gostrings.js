import { describe, it, expect } from "vitest";
import { trimRight } from "../src/trimRight";

describe("trimRight", () => {
  it("should remove trailing characters from the cutset", () => {
    expect(trimRight("¡¡¡Hello, Gophers!!!", "!¡")).toBe("¡¡¡Hello, Gophers");
    expect(trimRight("abchelloabc", "abc")).toBe("abchello");
  });

  it("should not remove characters from the middle or beginning of the string", () => {
    expect(trimRight(".h.e.l.l.o", ".")).toBe(".h.e.l.l.o");
    expect(trimRight("...hello", ".")).toBe("...hello");
  });

  it("should return an empty string if the entire string consists of characters from the cutset", () => {
    expect(trimRight("123123123", "123")).toBe("");
  });

  it("should return the original string if no characters from the cutset are at the end", () => {
    expect(trimRight("hello", "abc")).toBe("hello");
  });

  it("should return an empty string for an empty input string", () => {
    expect(trimRight("", "abc")).toBe("");
  });

  it("should return the original string if the cutset is empty", () => {
    expect(trimRight("hello...", "")).toBe("hello...");
  });

  it("should handle unicode characters", () => {
    expect(trimRight("@@@你好@@@", "@")).toBe("@@@你好");
  });
});
