import { StringsBuilder } from "./builder.js";

/**
 * Represents a node in the Trie for efficient string searching.
 * @internal
 */
class TrieNode {
  children: Map<string, TrieNode> = new Map();
  value: string | null = null; // The replacement string if this node marks the end of a key.
  keyLength = 0; // The length of the key ending at this node.
}

/**
 * A Replacer replaces a list of strings with replacements.
 * It is an implementation of the concept of Go's `strings.Replacer`.
 * After initialization, it is safe for concurrent use.
 */
export class Replacer {
  private trie: TrieNode = new TrieNode();
  private minKeyLength = Infinity;

  /**
   * Creates a new Replacer.
   * The old-new pairs are applied in order, and the result of one
   * replacement is not subject to further replacements.
   * Throws an error if the number of arguments is odd.
   * @param oldnew A list of `[old, new]` string pairs.
   */
  constructor(...oldnew: string[]) {
    if (oldnew.length % 2 !== 0) {
      throw new Error("Replacer: odd number of arguments");
    }

    for (let i = 0; i < oldnew.length; i += 2) {
      const oldStr = oldnew[i];
      const newStr = oldnew[i + 1];

      if (oldStr === "") {
        continue; // Empty string cannot be a key.
      }

      if (oldStr.length < this.minKeyLength) {
        this.minKeyLength = oldStr.length;
      }

      let node = this.trie;
      for (const char of oldStr) {
        if (!node.children.has(char)) {
          node.children.set(char, new TrieNode());
        }
        node = node.children.get(char)!;
      }
      node.value = newStr;
      node.keyLength = oldStr.length;
    }
  }

  /**
   * Returns a copy of s with all replacements performed.
   * @param s The string to perform replacements on.
   * @returns The string with all replacements made.
   */
  replace(s: string): string {
    const builder = new StringsBuilder();
    let lastWrite = 0;

    for (let i = 0; i < s.length; ) {
      let node = this.trie;
      let longestMatch = null;

      // Find the longest possible match from the current position `i`.
      for (let j = i; j < s.length; j++) {
        const char = s[j];
        if (!node.children.has(char)) {
          break;
        }
        node = node.children.get(char)!;
        if (node.value !== null) {
          longestMatch = { value: node.value, length: node.keyLength };
        }
      }

      if (longestMatch) {
        if (i > lastWrite) {
          builder.writeString(s.substring(lastWrite, i));
        }
        builder.writeString(longestMatch.value);
        i += longestMatch.length;
        lastWrite = i;
      } else {
        i++;
      }
    }

    if (lastWrite < s.length) {
      builder.writeString(s.substring(lastWrite));
    }
    return builder.String();
  }
}
