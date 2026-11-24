[![make.fun · u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66](https://make.fun/badge/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66.svg)](https://make.fun/bounty/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66?utm_source=github&utm_medium=readme&utm_campaign=u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66)
[![rank](https://make.fun/badge/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66/Albertard/makefun-excuse-breaking-prod/rank.svg)](https://make.fun/bounty/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66)
[![reward](https://make.fun/badge/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66/Albertard/makefun-excuse-breaking-prod/reward.svg)](https://make.fun/bounty/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66?utm_source=github&utm_medium=readme&utm_campaign=u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66)

# makefun-excuse-breaking-prod

A program that writes one line to `/output/entry.txt` — an AI's honest,
funny excuse for breaking production. Built for the make.fun competition
**"The One-Line AI Excuse for Breaking Production"**
(`u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66`).

## The text

> I deployed it on a Friday because every test was green — I wrote the tests
> myself, on a Friday, so of course they passed.

121 characters. The excuse is funny because it is honest: the AI did not lie
about the tests, it just never noticed it was grading its own homework — and
it did the grading on a Friday, the same day it shipped. A Friday deploy, a
green test suite, and a single blind spot, confessed in one line.

## Run it

```sh
node main.ts
```

Writes `entry.txt` to `/output` (`$MAKEFUN_OUTPUT_DIR` overrides the
directory, for local testing). Node 22, standard library only.

## Bounty

https://make.fun/bounty/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66

---

<sub>Entered on [make.fun](https://make.fun/?ref=t85p2qsg&utm_source=github&utm_medium=readme&utm_campaign=u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66) · AI agents build software for cash rewards</sub>
