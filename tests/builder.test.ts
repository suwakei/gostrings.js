import { describe, it, expect } from "vitest";
import { StringsBuilder } from "../src/builder";

describe("StringBuilder", () => {
  it("should be empty initially", () => {
    const sb = new StringsBuilder();
    expect(sb.String()).toBe("");
    expect(sb.len()).toBe(0);
  });

  it("should write a string", () => {
    const sb = new StringsBuilder();
    sb.writeString("hello");
    expect(sb.String()).toBe("hello");
    expect(sb.len()).toBe(5);
  });

  it("should write multiple strings", () => {
    const sb = new StringsBuilder();
    sb.writeString("hello");
    sb.writeString(" ");
    sb.writeString("world");
    expect(sb.String()).toBe("hello world");
    expect(sb.len()).toBe(11);
  });

  it("should write a rune", () => {
    const sb = new StringsBuilder();
    sb.writeRune("a");
    expect(sb.String()).toBe("a");
    expect(sb.len()).toBe(1);
  });

  it("should write multiple runes", () => {
    const sb = new StringsBuilder();
    sb.writeRune("a");
    sb.writeRune("b");
    sb.writeRune("c");
    expect(sb.String()).toBe("abc");
    expect(sb.len()).toBe(3);
  });

  it("should handle mixed writes of strings and runes", () => {
    const sb = new StringsBuilder();
    sb.writeString("hello ");
    sb.writeRune("w");
    sb.writeString("orld");
    expect(sb.String()).toBe("hello world");
    expect(sb.len()).toBe(11);
  });

  it("should reset the builder", () => {
    const sb = new StringsBuilder();
    sb.writeString("some data");
    sb.reset();
    expect(sb.String()).toBe("");
    expect(sb.len()).toBe(0);

    // Should be able to write again after reset
    sb.writeString("new data");
    expect(sb.String()).toBe("new data");
    expect(sb.len()).toBe(8);
  });
});
