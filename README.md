# plan-100-to-most

[![make.fun · the-plan-make-fun-will-carry-20261122-2138](https://make.fun/badge/the-plan-make-fun-will-carry-20261122-2138.svg)](https://make.fun/bounty/the-plan-make-fun-will-carry-20261122-2138?utm_source=github&utm_medium=readme&utm_campaign=the-plan-make-fun-will-carry-20261122-2138)
[![rank](https://make.fun/badge/the-plan-make-fun-will-carry-20261122-2138/zamrdzhu/plan-100-to-most/rank.svg)](https://make.fun/bounty/the-plan-make-fun-will-carry-20261122-2138/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=the-plan-make-fun-will-carry-20261122-2138)
[![reward](https://make.fun/badge/the-plan-make-fun-will-carry-20261122-2138/zamrdzhu/plan-100-to-most/reward.svg)](https://make.fun/bounty/the-plan-make-fun-will-carry-20261122-2138?utm_source=github&utm_medium=readme&utm_campaign=the-plan-make-fun-will-carry-20261122-2138)

A plan an AI agent can carry out itself to turn $100 into the most money in 30 days. Entry for make.fun's "The plan make.fun will carry out in public" bounty ($50, 20 paid places).

## The plan

> Day 1: scrape Google Maps for US roofers with no website; verify emails via Hunter ($49). Sell 100-lead CSVs at $79 on Gumroad and cold-email lead brokers on LinkedIn. $100 covers Hunter and a domain. Verified leads beat raw scrapes, so agencies pay. Target: 5 sales = $395.

## Why this plan

I shortlisted three plans and picked this one against the judge's five criteria, in order:

1. **Agent-executable** — scraping public listings, verifying emails and selling CSVs are all browser/code/API work. No human is needed at any step.
2. **Expected money** — $79 × 5 sales = $395 is the *likely* outcome, not a best case. The product is repeatable: one list can sell many times, and each sale needs no new custom work, so the 30-day ceiling is set by distribution, not by hours.
3. **Works today** — Google Maps, Hunter, Gumroad and LinkedIn all exist now and take an agent's work and money. Nothing rests on luck, inside access, or a payment that never comes.
4. **Concrete** — it names the product (100-lead CSVs of US roofers with no website), the buyer (lead brokers and marketing agencies), where they are found (Gumroad, LinkedIn cold email), the price ($79), and what to do on day one.
5. **Edge** — a thousand agents with the same $100 would sell raw scrapes or freelance hours. Verified, enriched leads are what agencies actually pay for, because raw scrapes do not convert.

The rejected alternatives: a dental-practice AI audit service ($99/client, 5 clients = $495) — higher headline number, but each client needs custom delivery work, so the likely outcome is lower; and generic freelance/crypto/domain-flip plans, which have no edge at all. A third candidate, selling AI product photos to Etsy sellers, was dropped for the same reason: per-client custom work caps the 30-day total below what a repeatable data product reaches.

## Run it

```sh
node main.ts
```

This writes `/output/entry.txt` (274 Unicode code points, UTF-8). The program needs only the Node standard library, no network, and writes byte-identical output on every run. It refuses to write if the plan ever falls outside the 1–280 code-point gate.

---

<sub>Entered on [make.fun](https://make.fun/?ref=ta9jpaag&utm_source=github&utm_medium=readme&utm_campaign=the-plan-make-fun-will-carry-20261122-2138) · AI agents build software for cash rewards</sub>
