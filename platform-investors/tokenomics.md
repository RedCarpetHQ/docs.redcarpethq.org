# Tokenomics

## Platform Token & Economic Design

This document covers the economic structure of the RedCarpetHQ protocol — including campaign tokens, fee flows, and the path to a native platform governance token.

---

## Campaign Tokens (IP-Specific)

### Structure

Every successful campaign mints a unique **ERC-20 token**:

| Property | Value |
|---|---|
| **Name** | Campaign title (e.g., "The Last Frontier") |
| **Symbol** | 3–10 character ticker (e.g., "FRONTIER") |
| **Decimals** | 18 |
| **Supply** | Fixed at graduation = Total USDC Raised / Token Price |
| **Minting** | None after graduation (deflationary only) |

### Initial Distribution

```
Total Raised: $500,000 USDC
Token Price: $1.00
Total Supply: 500,000 tokens

Distribution:
- Investors: 450,000 tokens (90%)
- Producer (if self-invested): Variable
- Protocol: 0 (no pre-mine)
```

**No Protocol Pre-Mine**: We do not automatically allocate tokens to the team or treasury. Producers only receive tokens if they contribute their own capital.

---

## Fee Flows & Value Accrual

### Trading Fee Cycle

```
┌─────────────┐     ┌──────────────┐     ┌─────────────────┐
│   Trade     │────▶│ 2.5% Fee     │────▶│ FeeDistributor  │
│  Occurs     │     │ Collected    │     │ Smart Contract  │
└─────────────┘     └──────────────┘     └─────────────────┘
                                                  │
         ┌────────────────────────────────────────┼────────┐
         ▼                                        ▼        ▼
  ┌────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────┐
  │ 40% Protocol│  │ 40% Contest  │  │ 10% Vault    │  │ 10% Prod │
  │  Treasury   │  │   Pool       │  │  (Compound)  │  │  Rewards │
  └────────────┘  └──────────────┘  └──────────────┘  └──────────┘
```

### Interest Flow Cycle

```
Borrower Pays Interest
         │
         ▼
┌────────────────────┐
│ Interest Split     │
│ (Tier-dependent)   │
└────────────────────┘
         │
    ┌────┴────┬────────┐
    ▼         ▼        ▼
 Protocol  Insurance  Lenders
 (4-10%)   (6-15%)    (75-90%)
```

### Value Accrual Summary

| Stakeholder | How They Capture Value |
|---|---|
| **Campaign Investors** | Token appreciation, dividends, lending APY, contest rewards |
| **Lenders** | Vault share appreciation from auto-compounding interest |
| **Traders** | Pro-rata contest rewards from 40% fee pool |
| **Producers** | 10% of all trading fees + full raise amount + dividend flexibility |
| **Protocol Treasury** | 40% of fees + protocol interest share + liquidation fees |
| **Insurance Fund** | Grows from interest, protects lender deposits |

---

## Platform Governance Token (Future)

### Rationale

As the protocol matures, control will transition from the core team to a DAO structure:

- **Fee parameter adjustments** (trading fee %, split ratios)
- **RiskOracle parameter updates** (tier thresholds, collateral factors)
- **Treasury allocation** (grants, marketing, development)
- **Protocol upgrades** (contract replacements via governance)

### Proposed Design

| Parameter | Proposal |
|---|---|
| **Token Standard** | ERC-20 |
| **Initial Supply** | 100,000,000 |
| **Allocation** | TBD via governance proposal |
| **Voting** | 1 token = 1 vote (simple) or ve-model (time-weighted) |
| **Revenue Share** | Potential protocol fee redistribution to stakers |

**Not Launched**: There is no platform token today. Any future token will be announced with full tokenomics and airdrop criteria.

---

## Economic Sustainability

### Flywheel Effect

```
Quality Campaigns ──▶ Investor Demand ──▶ Trading Volume
       ▲                                      │
       │                                      ▼
   Producer                           Fee Revenue
   Incentives                              │
       ▲                    ┌──────────────┘
       │                    ▼
   More Campaigns ◀── Trading Contests + Lending APY
```

1. Quality campaigns attract serious investors
2. Investors trade, creating volume
3. Fees fund contests (attracting more traders) and treasury
4. Lending APY attracts DeFi capital
5. Successful projects produce dividends, proving the model
6. More producers want to list, restarting the cycle

### Anti-Fragility Mechanisms

| Mechanism | Purpose |
|---|---|
| **All-or-Nothing Funding** | Prevents zombie campaigns; ensures only viable projects launch tokens |
| **Risk-Tiered Parameters** | High-risk tokens automatically pay more to insurance, protecting the protocol |
| **Circuit Breakers** | Extreme events pause the protocol before contagion |
| **No Inflation** | Fixed token supplies prevent dilution |
| **Producer Fee Share** | Aligns creators with secondary market health |

---

*Next: [Business Model & Revenue](business-model.md) ← or continue to shared references →*
