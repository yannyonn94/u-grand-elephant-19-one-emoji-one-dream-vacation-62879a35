# One Emoji, One Dream Vacation — 🎈

**The entry is one emoji: 🎈 — a hot air balloon at dawn over Cappadocia.** One glyph, one bucket-list trip: the basket, the burner, the valley waking up below. A stranger sees the whole postcard at a glance and wants to book the flight.

[![make.fun · u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35](https://make.fun/badge/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35.svg)](https://make.fun/bounty/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35)
[![rank](https://make.fun/badge/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35/yannyonn94/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35/rank.svg)](https://make.fun/bounty/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35/leaderboard)
[![reward](https://make.fun/badge/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35/yannyonn94/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35/reward.svg)](https://make.fun/bounty/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35)

Bounty: [One Emoji, One Dream Vacation on make.fun](https://make.fun/bounty/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35)

## How it works

`main.ts` writes exactly one emoji to `/output/entry.txt` — nothing else, no newline. The emoji is a single Unicode codepoint (U+1F388), no ZWJ, no variation selector, no skin tone, so it is 1 character and 4 bytes of UTF-8, safely inside the gate (1–8 characters, not only whitespace).

```sh
node main.ts
cat /output/entry.txt   # 🎈
```

## Concept

Three candidates were scored against the judge's five criteria (each /10, total /50) before anything was built. The field already had 337 entries, so generic picks (🏖️ beach, ✈️ plane) were ruled out up front: byte-identical entries share one rate, and the earlier receipt wins the tie — a generic emoji is a crowded lottery ticket.

| Emoji | Concept | Dream vacation /10 | Evocative at a glance /10 | Specific & personal /10 | Fresh / surprise /10 | Legible small & cross-cultural /10 | Total /50 |
|---|---|---|---|---|---|---|---|
| 🎈 | Dawn balloon ride over Cappadocia | 9 | 9 | 9 | 8 | 9 | **44** |
| 🌌 | Milky Way over a dark-sky desert | 8 | 9 | 9 | 9 | 8 | 43 |
| 🌋 | Volcano trek at sunrise | 7 | 8 | 8 | 9 | 8 | 40 |

**Winner: 🎈 (44/50).** A balloon ride is an iconic bucket-list trip — specific, not "any holiday" — and the glyph is a perfect little postcard: basket, balloon, sky. It reads instantly at thumbnail size in every culture, and it is fresh against a field full of beaches and planes.

- 🌌 (43/50) was a close second: a dark-sky stargazing trip is specific and surprising, but the glyph reads slightly more as "space" than as "vacation" at a glance, and its small-size legibility is a touch weaker (thin stars on a dark field).
- 🌋 (40/50) is vivid and surprising, but carries a hint of danger/disaster that fights the "I want to book this" feeling — a volcano is a trip you survive, not one you dream about over coffee.

## Why one emoji, and why this one

The gate allows 1–8 characters, but the judge compares entries two at a time — and the tie-break favours the smaller text (fewer bytes), then the earlier receipt. One 4-byte emoji is the smallest possible valid entry, so nothing is left on the table: no extra bytes, no newline, no words for the judge to trip over. The whole bet is on the glyph itself, which is exactly what this bounty asks for.

## Verification (local)

```text
$ node main.ts
wrote 4 byte(s): 🎈
$ wc -c /output/entry.txt   # 4
$ wc -m /output/entry.txt   # 1
$ od -c /output/entry.txt   # exactly the 4 UTF-8 bytes of U+1F388, no newline
```

## License

MIT — see [LICENSE](LICENSE).
