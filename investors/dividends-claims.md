# Dividends & Claims

## How Revenue Flows from the Screen to Your Wallet

One of the most powerful features of RedCarpetHQ is direct, on-chain profit sharing. When a film or TV project generates revenue, token holders receive their share — no intermediaries, no opaque accounting, no delays.

---

## How Dividends Work

### The Lifecycle

```
Film Generates Revenue
         │
         ▼
Producer Deposits USDC into DividendDistributor
         │
         ▼
Smart Contract Takes Snapshot of All Holders
         │
         ▼
Round is Activated — Claims Open
         │
         ▼
You Claim Your Pro-Rata Share
```

### Pro-Rata Calculation

```
Your Dividend = (Your Token Balance / Total Token Supply) × Total Dividend Amount

Example:
- Total Dividend: 50,000 USDC
- Total Supply: 500,000 tokens
- Your Balance: 5,000 tokens (1%)
- Your Claim: 500 USDC
```

### Key Properties

- **No Expiration**: Claim anytime. Tomorrow, next year, never — your share is reserved
- **Automatic Inclusion**: Even if your tokens are deposited in the vault, you are counted
- **Multiple Rounds**: A single project can have many dividend events over years
- **On-Chain Proof**: Every transaction is verifiable on a block explorer

---

## How to Claim

### Step 1: Check for Active Rounds

Visit the project's page or DividendDistributor interface:

```
Project: "The Last Frontier"
Active Rounds: 2

Round #1: "Streaming Revenue Q1 2027"
  Total: 25,000 USDC
  Your Share: 250 USDC
  Status: Unclaimed

Round #2: "Licensing Deal — Japan"
  Total: 10,000 USDC
  Your Share: 100 USDC
  Status: Unclaimed
```

### Step 2: Claim Your Share

1. Connect your wallet
2. Select the dividend round
3. Click "Claim"
4. Confirm the transaction
5. USDC arrives in your wallet

### Step 3: Track Your History

```
Claimed Rounds:
- Round #1: 250 USDC (claimed on 2027-03-15)
- Round #2: 100 USDC (claimed on 2027-04-02)

Total Claimed: 350 USDC
```

---

## What Revenue Sources Qualify

Producers can distribute any revenue they choose. Common sources include:

| Source | Description | Typical Timing |
|---|---|---|
| **Streaming licensing** | Netflix, Amazon, Hulu, Disney+ deals | 6–18 months post-release |
| **Theatrical** | Box office collections | 12–36 months |
| **International sales** | Territory-by-territory licensing | 6–24 months |
| **Festival prizes** | Cash awards from festivals | 6–12 months |
| **Merchandise** | T-shirts, posters, collectibles | Ongoing |
| **Soundtrack** | Music streaming, licensing | Ongoing |
| **Remake/sequel rights** | Option sales | Variable |

---

## Evaluating Dividend Potential

Before investing, assess a project's likely dividend capacity:

### Strong Dividend Signals
- Pre-existing distribution deals (letters of intent)
- Genre with proven streaming demand (horror, true crime, documentary)
- Festival circuit potential (Sundance, Cannes, TIFF)
- Producer with previous distribution relationships
- Genre with strong international appeal

### Weak Dividend Signals
- No distribution plan mentioned
- Overly ambitious scope for the budget
- Genre with limited commercial appeal (experimental, very niche)
- Producer has never completed a project
- No streaming platform interest signals

---

## Tax Considerations

### For Investors

- **Dividend claims** are typically treated as ordinary income in most jurisdictions
- **Record keeping**: The blockchain provides an immutable record, but you should track:
  - Claim amounts
  - Claim dates
  - USD values at time of claim
  - Transaction hashes

### For Producers

- **Dividend distributions** may be deductible as business expenses
- **Record keeping**: Keep documentation linking distributions to specific revenue sources
- **Consult a tax professional** — entertainment finance has unique tax considerations

---

## Frequently Asked Questions

**Q: What if I sell my tokens after a snapshot but before claiming?**
A: Snapshots capture your balance at a specific block. If you held tokens at the snapshot block, you can claim even if you sold afterward.

**Q: What if I bought tokens after a snapshot?**
A: You are not eligible for rounds that occurred before you held tokens. You qualify for future rounds.

**Q: Do vault depositors receive dividends?**
A: Yes. The snapshot includes vault depositors (via their vault share balances). If you deposited USDC in the vault, you still receive dividend rights.

**Q: Can a producer refuse to distribute dividends?**
A: Yes. Dividend distribution is at the producer's discretion. This is why evaluating the producer's integrity and revenue plan is critical before investing.

**Q: What if a producer distributes fake USDC or scams?**
A: The producer must deposit real USDC into the DividendDistributor. The contract only distributes what is deposited. However, a producer could promise dividends and never deposit. This is a project risk, not a smart contract risk.

**Q: Is there a deadline to claim?**
A: No. Claims never expire. Your USDC will sit in the contract until you claim it.

---

*Next: [Key Concepts](getting-started/key-concepts.md) →*
