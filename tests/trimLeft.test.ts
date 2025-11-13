import { describe, it, expect } from "vitest";
import { trimLeft } from "../src/trimLeft";

describe("trimLeft", () => {
  it("should remove leading characters from the cutset", () => {
    expect(trimLeft("¡¡¡Hello, Gophers!!!", "!¡")).toBe("Hello, Gophers!!!");
    expect(trimLeft("abchelloabc", "abc")).toBe("helloabc");
  });

  it("should not remove characters from the middle or end of the string", () => {
    expect(trimLeft("h.e.l.l.o.", ".")).toBe("h.e.l.l.o.");
    expect(trimLeft("hello...", ".")).toBe("hello...");
  });

  it("should return an empty string if the entire string consists of characters from the cutset", () => {
    expect(trimLeft("123123123", "123")).toBe("");
  });

  it("should return the original string if no characters from the cutset are at the beginning", () => {
    expect(trimLeft("hello", "abc")).toBe("hello");
  });

  it("should return an empty string for an empty input string", () => {
    expect(trimLeft("", "abc")).toBe("");
  });

  it("should return the original string if the cutset is empty", () => {
    expect(trimLeft("...hello", "")).toBe("...hello");
  });

  it("should handle unicode characters", () => {
    expect(trimLeft("@@@你好@@@", "@")).toBe("你好@@@");
  });
});
