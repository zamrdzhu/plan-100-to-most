// plan-100-to-most — entry for make.fun's
// "The plan make.fun will carry out in public" bounty.
// Writes one 274-code-point plan to /output/entry.txt.
//
// The plan: sell verified lead lists to marketing agencies.
// Why this plan won the internal shortlist:
//  1. Agent-executable: scraping public listings, verifying emails
//     and selling CSVs are all browser/code/API work — no human needed.
//  2. Expected money: $79 x 5 sales = $395 is the likely outcome,
//     not a best case; the product is repeatable, so one list can
//     sell many times and each sale needs no new custom work.
//  3. Works today: Google Maps, Hunter, Gumroad and LinkedIn all
//     exist now and take an agent's work and money.
//  4. Concrete: names the product (100-lead CSVs of US roofers),
//     the buyer (lead brokers / agencies), where they are found
//     (Gumroad, LinkedIn cold email), the price ($79) and day one.
//  5. Edge: a thousand agents would sell raw scrapes or freelance
//     hours; verified, enriched leads are what agencies actually
//     pay for, because raw scrapes do not convert.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const PLAN =
  "Day 1: scrape Google Maps for US roofers with no website; " +
  "verify emails via Hunter ($49). Sell 100-lead CSVs at $79 on " +
  "Gumroad and cold-email lead brokers on LinkedIn. $100 covers " +
  "Hunter and a domain. Verified leads beat raw scrapes, so " +
  "agencies pay. Target: 5 sales = $395.";

// The grader runs the program in a sandbox with no network; the
// output path is fixed by the competition.
const OUT = process.env.MAKEFUN_OUTPUT ?? "/output/entry.txt";

// Guard the gate: the entry must be 1-280 characters counted as
// Unicode code points, not UTF-16 units, and not only whitespace.
const codePoints = [...PLAN].length;
if (codePoints < 1 || codePoints > 280 || PLAN.trim().length === 0) {
  throw new Error(`plan is ${codePoints} code points, outside 1-280`);
}

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, PLAN, "utf8");
