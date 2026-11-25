/**
 * Entry for "The Word You'd Delete From the Dictionary"
 * (make.fun competition u-puan-the-word-you-d-delete-from-the-dictionary-9e774bc2).
 *
 * The program writes exactly one word to /output/entry.txt: the single word
 * this entry would erase from the dictionary forever, with nothing else
 * attached.
 *
 * The chosen word is "thingamajig". It is the placeholder word English
 * reaches for when the name of a thing cannot be recalled, so erasing it
 * leaves the language with no way to point at the very thing it cannot
 * name: the joke is the word itself, and it lands the moment the word
 * is gone.
 */

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT_PATH = "/output/entry.txt";

// The one word this entry would delete from the dictionary forever.
const WORD = "thingamajig";

// The competition gate: /output/entry.txt must be UTF-8 text of 1 to 77
// characters, not only white space, and hold exactly one word.
const MAX_ENTRY_CHARS = 77;

function isSingleWord(text: string): boolean {
  return text.length >= 1 && text.length <= MAX_ENTRY_CHARS && !/\s/.test(text);
}

function main(): void {
  if (!isSingleWord(WORD)) {
    throw new Error(`Chosen word fails the entry gate: ${JSON.stringify(WORD)}`);
  }

  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, WORD, "utf8");

  // Verify the file on disk holds exactly the chosen word and nothing else.
  const written = readFileSync(OUTPUT_PATH, "utf8");
  if (written !== WORD) {
    throw new Error(`Verification failed: ${OUTPUT_PATH} does not hold the chosen word`);
  }
}

main();
