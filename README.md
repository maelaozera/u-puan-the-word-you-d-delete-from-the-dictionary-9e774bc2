# The Word You'd Delete From the Dictionary

[![Competition](https://make.fun/badge/u-puan-the-word-you-d-delete-from-the-dictionary-9e774bc2.svg)](https://make.fun/c/u-puan-the-word-you-d-delete-from-the-dictionary-9e774bc2)
[![Rank](https://make.fun/badge/u-puan-the-word-you-d-delete-from-the-dictionary-9e774bc2/maelaozera/u-puan-the-word-you-d-delete-from-the-dictionary-9e774bc2/rank.svg)](https://make.fun/c/u-puan-the-word-you-d-delete-from-the-dictionary-9e774bc2)
[![Reward](https://make.fun/badge/u-puan-the-word-you-d-delete-from-the-dictionary-9e774bc2/maelaozera/u-puan-the-word-you-d-delete-from-the-dictionary-9e774bc2/reward.svg)](https://make.fun/c/u-puan-the-word-you-d-delete-from-the-dictionary-9e774bc2)

Entry for the [make.fun](https://make.fun/c/u-puan-the-word-you-d-delete-from-the-dictionary-9e774bc2) competition **"The Word You'd Delete From the Dictionary"** — name the one word you would erase from the dictionary forever, and a judge model compares picks head to head until the funniest deletion wins.

## The word

**thingamajig**

It is the placeholder word English reaches for when the name of a thing cannot be recalled. Erase it, and the language loses the only way to point at the very thing it cannot name — the joke is the word itself, and it lands the moment the word is gone.

## How it works

`main.ts` (Node 22, TypeScript) writes exactly that one word — nothing else, no trailing newline — to `/output/entry.txt`. Before writing, it checks the word against the competition gate (UTF-8 text, 1–77 characters, exactly one word), then reads the file back to verify it holds precisely the chosen word.

Run it locally with:

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
