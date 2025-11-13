import { describe, it, expect } from "vitest";
import { join } from "../src/join";

describe("join", () => {
  it("should join elements with a separator", () => {
    const elems = ["a", "b", "c"];
    const sep = ",";
    expect(join(elems, sep)).toBe("a,b,c");
  });

  it("should handle a different separator", () => {
    const elems = ["foo", "bar", "baz"];
    const sep = "-";
    expect(join(elems, sep)).toBe("foo-bar-baz");
  });

  it("should handle an empty separator", () => {
    const elems = ["a", "b", "c"];
    const sep = "";
    expect(join(elems, sep)).toBe("abc");
  });

  it("should return an empty string for an empty array of elements", () => {
    const elems: string[] = [];
    const sep = ",";
    expect(join(elems, sep)).toBe("");
  });

  it("should return the single element if the array has only one", () => {
    const elems = ["a"];
    const sep = ",";
    expect(join(elems, sep)).toBe("a");
  });

  it("should handle elements that are empty strings", () => {
    const elems = ["a", "", "c"];
    const sep = ",";
    expect(join(elems, sep)).toBe("a,,c");
  });

  it("should handle an array with a single empty string", () => {
    const elems = [""];
    const sep = ",";
    expect(join(elems, sep)).toBe("");
  });
});
