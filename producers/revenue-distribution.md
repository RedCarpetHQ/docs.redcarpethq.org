# Revenue Distribution for Producers

## How to Share Profits with Your Token Holders

One of the most powerful features of RedCarpetHQ is the ability to distribute real-world revenue directly to your token holders — transparently, automatically, and without intermediaries.

---

## The Dividend System

### How It Works

When your film or TV project generates revenue (streaming, box office, licensing), you can distribute a portion to token holders via the **DividendDistributor** smart contract.

```
Step 1: Producer deposits USDC into DividendDistributor
Step 2: Contract takes a snapshot of all token holders
Step 3: Activate the round — claims become available
Step 4: Holders claim their pro-rata share directly
```

### Key Properties

- **No Expiration**: Holders can claim anytime. No deadlines.
- **Pro-Rata Fair**: Each holder receives exactly their ownership percentage
- **Includes Vault Depositors**: Even lenders who deposited USDC (and received vault shares) are counted
- **Multi-Round**: You can run multiple dividend rounds as revenue arrives

---

## Step-by-Step Guide

### Step 1: Prepare Revenue

Gather the USDC you want to distribute. This comes from:
- Streaming platform payments (Netflix, Amazon, etc.)
- Theatrical box office collections
- Licensing deals (international, airline, hotel)
- Merchandise and soundtrack revenue

### Step 2: Create a Dividend Round

```
Action: Create Dividend Round
Amount: 10,000 USDC
Round Name: "Q1 2027 Streaming Revenue"
```

### Step 3: Snapshot

The contract records every address holding your token at the current block:

```
Snapshot taken at Block #12,345,678
Total Supply: 500,000 tokens
Unique Holders: 1,247 addresses
```

### Step 4: Activate

Once activated, holders can claim:

```
Example:
- Total Dividend: 10,000 USDC
- You hold: 5,000 tokens (1% of supply)
- Your claim: 100 USDC

Claim anytime. No rush. No expiration.
```

---

## Best Practices

### Communication

- **Announce before distributing**: Tell your community a dividend round is coming
- **Explain the source**: "This is from our Netflix licensing deal" builds trust
- **Set expectations**: Not every round will be large. Be transparent about revenue timing.

### Frequency

| Model | When to Use |
|---|---|
| **Milestone-based** | Distribute when a specific revenue event occurs (streaming deal, festival sale) |
| **Quarterly** | Regular, predictable distributions once revenue is steady |
| **Annual** | Large, lump-sum distributions after a full fiscal year |

### Amount Guidance

There is no requirement to distribute any specific percentage. However, transparent producers typically:
- Share a portion of net revenue (after production costs recouped)
- Communicate the formula upfront in campaign materials
- Reserve treasury for marketing, festival submissions, and contingency

---

## Producer Exit Strategy

If you want to cash out some of your own tokens without dumping them on the market, use the **Burn for Vault Shares** mechanism:

```
1. Burn your tokens
2. Receive the protocol's 10% vault allocation
3. No market impact
4. 25% exit fee applies (protects ecosystem)
```

This lets you exit without crashing your token price.

---

## Community Engagement Beyond Dividends

### Project Updates

Keep investors informed with regular updates:
- Production milestones (casting, shooting, post-production)
- Festival selections and awards
- Distribution deals signed
- Revenue forecasts

### Surveys

Use the survey system to gather community input:
- Poster design voting
- Title options
- Distribution preference (theatrical vs. streaming)

Note: Surveys are non-binding advisory votes. You retain creative and business control.

---

## Tax Considerations

**For Producers**:
- Dividend distributions may be deductible business expenses
- Keep records of all rounds, amounts, and snapshots
- Consult a tax professional in your jurisdiction

**For Investors**:
- Dividends are typically taxable as income
- Investors should track claim amounts and dates
- The blockchain provides an immutable record

---

*Next: [Producer Rights & Protection](producer-rights.md) →*
