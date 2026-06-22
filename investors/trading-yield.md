# Trading & Yield Strategies

## How to Generate Returns Beyond Token Appreciation

Even if a token's price stays flat, RedCarpetHQ offers multiple yield mechanisms to generate returns. This guide covers trading, lending, and contest strategies.

---

## Strategy 1: Lending (The "Yield-First" Approach)

### How It Works

Deposit USDC into a token's UnifiedVault. Your capital is automatically split:
- **80%** to the Lending Pool (earns interest from borrowers)
- **20%** to the Stability Pool (used for auto-liquidations)

You receive vault shares. As interest accrues, your shares appreciate in value.

### Expected Returns

| Vault Utilization | Approx. APY | Risk Level |
|---|---|---|
| 0–50% | 2–8% | Low |
| 50–70% | 8–12% | Low-Medium |
| 70–85% | 12–35% | Medium |
| 85%+ | Borrowing disabled | N/A |

**Blended APY**: Typically 8–15% depending on the token's borrowing demand.

### Risk Tier Impact

| Tier | Lender Share of Interest | Notes |
|---|---|---|
| GREEN | 90% | Best returns, lowest risk |
| YELLOW | 85% | Moderate returns, higher insurance allocation |
| RED | 75% | Lower returns, but risk is priced in |

### Best Practices

- Diversify across multiple vaults, not just one
- Monitor RiskOracle tiers. RED vaults pay less but are genuinely riskier
- Withdrawals may be partially restricted if utilization is >85%
- No lock-up period — exit anytime if liquidity exists

---

## Strategy 2: Trading (The "Active" Approach)

### Marketplace Mechanics

The RedCarpetHQ marketplace uses escrow offers:
- **Sell Offers**: Seller locks tokens, sets price, waits for buyer
- **Buy Offers**: Buyer locks USDC, sets price, waits for seller
- **Atomic Swaps**: No counterparty risk; funds exchange simultaneously

### Trading Strategies

#### Market Making

Create both buy and sell offers around the current VWAP:

```
Current VWAP: $1.02
Your Buy Offer: $1.00
Your Sell Offer: $1.05

If both fill: Profit = $0.05 per token (minus 2.5% fees)
Risk: Price moves outside your range
```

#### Momentum Trading

- **Buy** when a project announces distribution deals or festival selections
- **Sell** when momentum fades or RiskOracle downgrades to YELLOW/RED
- Track producer updates and external news

#### Dip Buying

When a token's price drops due to short-term FUD (but fundamentals are sound):
- Create buy offers below market
- Accumulate at discount
- Hold for recovery or lending yield

#### Arbitrage (Future)

As entertainment tokens gain external liquidity:
- Buy on RedCarpetHQ at lower price
- Sell on external DEX at higher price
- Profit from spread minus fees

### Fee Considerations

```
Trade Value: $1,000
Fee: $25 (2.5%)

To break even on a round-trip trade:
Buy at $1.00, sell at $1.051 (5.1% gain required)

To profit after fees:
Buy at $1.00, sell at $1.10 (10% gain → 7.5% net)
```

---

## Strategy 3: Trading Contests (The "Volume" Approach)

### How Contests Work

Every 6 hours, a new epoch begins. Traders compete on **buy-side volume**. The top volume contributors split 40% of all trading fees from that epoch.

### Participation

1. Trade campaign tokens during the epoch
2. Only **buy volume** counts (sells do not)
3. Meet the minimum threshold (typically $15,000 USDC)
4. Claim your pro-rata reward after the epoch ends

### Reward Calculation

```
Your Reward = (Your Buy Volume / Total Qualified Volume) × Contest Pool

Example:
- Contest Pool: $1,000
- Total Qualified Volume: $100,000
- Your Buy Volume: $5,000
- Your Reward: $50 (5% of pool)
```

### Strategy: Fee Arbitrage

```
Trading Fees Paid: $5,000 × 2.5% = $125
Contest Reward: $50
Net Cost: $75

If the token appreciates or you earn lending yield, this is profitable.
```

**Note**: Do not trade solely for contests. The reward must exceed the fees you pay.

---

## Strategy 4: Combined Strategies

### The "Yield + Dividend" Stack

1. Buy tokens in a project you believe in
2. Lend your USDC in the same token's vault for APY
3. Hold tokens for potential dividends
4. Trade around core position if volatility emerges

### The "Contest + Lending" Stack

1. Deposit USDC in vault for baseline APY
2. Use separate capital for contest trading
3. Earn from both lending and contest rewards

---

## Risk Management for Traders

### Position Sizing

- Never risk more than you can afford to lose completely
- Entertainment tokens are illiquid and thinly traded
- Slippage can be significant for large orders

### Stop-Loss Considerations

There are no automatic stop-losses on-chain. You must:
- Monitor positions manually
- Set price alerts (externally)
- Be prepared for large gaps between buy and sell offers

### Liquidity Awareness

Before trading, check:
- Total sell offers available
- Total buy offers
- Spread between best bid and ask
- 24-hour volume

Thin liquidity means:
- Large orders move the price
- Exiting a position may take time
- You may need to accept worse prices

---

## Tax Implications

- **Trading profits**: Capital gains/losses
- **Lending interest**: Ordinary income
- **Contest rewards**: Ordinary income
- **Dividends**: Ordinary income (in most jurisdictions)

Keep detailed records of all transactions. The blockchain provides an immutable trail.

---

*Next: [Dividends & Claims](dividends-claims.md) →*
