// One Emoji, One Dream Vacation — make.fun bounty
// u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35
//
// The entry is exactly one emoji: a hot air balloon (U+1F388).
// One codepoint, no ZWJ, no variation selector, no skin tone —
// 4 bytes of UTF-8, safely inside the gate's 1–8 characters.
//
// Why this emoji: a dawn balloon ride over Cappadocia is the kind of
// trip people keep on a bucket list for years. One glyph, and a stranger
// sees the whole postcard at once — the basket, the burner, the valley
// waking up below — and wants to book it. It is specific (not "any
// holiday"), fresh (not the beach/plane everyone else picks), and it
// reads instantly at any size, in any culture.

import { mkdirSync, writeFileSync } from "node:fs";

const EMOJI = "🎈";

// Guard: the gate wants 1–8 UTF-8 characters and exactly one emoji.
// Refuse to write anything else rather than submit an invalid entry.
if ([...EMOJI].length !== 1 || EMOJI.trim() === "") {
  throw new Error("entry must be exactly one emoji");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EMOJI, "utf8");
console.log(`wrote ${Buffer.byteLength(EMOJI, "utf8")} byte(s): ${EMOJI}`);
