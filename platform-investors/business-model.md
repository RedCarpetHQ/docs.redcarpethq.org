# Business Model & Revenue

## How RedCarpetHQ Makes Money

We do not charge producers to raise capital. We do not take a percentage of campaign funding. Our revenue model is entirely transaction-based — aligned with market activity, not fundraising extraction.

---

## Revenue Streams

### 1. Trading Fees (Primary)

**Rate**: 2.5% on every filled offer in the marketplace

**Mechanics**:
- Buyer sends USDC; seller receives USDC minus fee
- Fee is automatically routed to the FeeDistributor contract
- No manual invoicing, no off-chain accounting

**Example**:
```
Trade Value: $10,000 USDC
Fee Collected: $250 (2.5%)
Seller Receives: $9,750
```

### 2. Protocol Interest Share

When borrowers pay interest on vault loans, a portion is directed to the protocol treasury:

| Risk Tier | Protocol Share | Insurance | Lenders |
|---|---|---|---|
| GREEN | 4% | 6% | 90% |
| YELLOW | 6% | 9% | 85% |
| RED | 10% | 15% | 75% |

This creates counter-cyclical revenue: when markets are volatile (RED tier), protocol share increases, stabilizing treasury inflows.

### 3. Liquidation Fees

When positions are liquidated:
- **10% Liquidation Bonus**: Paid by borrower, incentivizing rapid liquidation
- **2% Protocol Fee**: Taken from liquidated collateral

### 4. Future Revenue Lines

| Opportunity | Status |
|---|---|
| Premium listing tiers (featured placement, analytics) | 📅 Planned |
| Institutional API access for market makers | 📅 Planned |
| Data licensing (on-chain entertainment IP analytics) | 📅 Future |
| Bridge fees for cross-chain token migration | 📅 Future |

---

## Fee Distribution: The 40/40/10/10 Model

All collected fees are split automatically via smart contract:

```
┌─────────────────────────────────────────┐
│         Total Fee Pool                  │
├─────────────────────────────────────────┤
│  40% → Protocol Treasury                │
│       (Development, audits, ops)        │
│                                         │
│  40% → Trading Contest Pool             │
│       (Incentivizes volume & liquidity) │
│                                         │
│  10% → UnifiedVault                     │
│       (Compounds for all lenders)       │
│                                         │
│  10% → Producer Rewards                 │
│       (Passive income to IP creators)   │
└─────────────────────────────────────────┘
```

### Why This Split?

| Recipient | Rationale |
|---|---|
| **40% Treasury** | Funds ongoing development, security, and operations |
| **40% Contests** | Recycles fees into trading incentives, driving volume (and more fees) |
| **10% Vault** | Protocol's own vault share compounds, creating long-term treasury assets |
| **10% Producer** | Aligns creators with secondary market success; they earn even after the raise |

---

## Unit Economics

### Per-Token Economics

Each successful campaign creates a self-sustaining economic unit:

```
Campaign Raises: $500,000
Token Supply: 500,000 tokens

Year 1 Projections (moderate activity):
- Trading Volume: $2,000,000
- Trading Fees: $50,000
- Borrowing Interest: $30,000
- Total Protocol Revenue: $80,000

Distribution:
- Treasury: $32,000
- Contest Pool: $32,000
- Vault: $8,000
- Producer: $8,000
```

### Platform-Level Economics

Assuming 50 graduated tokens with average $1M market cap and 2x annual turnover:

```
Aggregate Trading Volume: $100,000,000
Trading Fees (2.5%): $2,500,000

Protocol Treasury (40%): $1,000,000
Contest Pool (40%): $1,000,000
Vault (10%): $250,000
Producers (10%): $250,000
```

### Cost Structure

| Category | Est. Annual Cost |
|---|---|
| Smart contract development & maintenance | $300,000 |
| Security audits (continuous) | $150,000 |
| Frontend & infrastructure | $200,000 |
| Legal & compliance | $100,000 |
| Community & support | $50,000 |
| **Total Burn** | **~$800,000** |

**Break-even**: ~20 actively trading tokens at $4M average annual volume each.

---

## Path to Profitability

### Phase 1: Testnet (Current)
- Validate all smart contract mechanics
- Onboard beta producers and test campaigns
- Refine RiskOracle parameters
- **Revenue**: $0

### Phase 2: Mainnet Launch (Q3 2026)
- Launch with 5–10 curated IP campaigns
- Activate full trading + lending + contests
- Target: $10M aggregate trading volume in Month 1
- **Revenue**: ~$250,000/month trading fees

### Phase 3: Scale (2027)
- 50+ graduated tokens
- Institutional market makers enter
- First dividend distributions from released projects
- **Revenue**: $1M–$2M/month

### Phase 4: Ecosystem (2028+)
- Cross-chain bridges
- Institutional lending integrations
- Data & analytics products
- **Revenue**: $5M+/month

---

*Next: [Technology Moat](technology-moat.md) →*
