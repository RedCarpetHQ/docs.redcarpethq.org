# Finance Overview

RedCarpetHQ integrates DeFi (Decentralized Finance) features that allow producers and supporters to leverage their tokens and USDC for additional value.

## DeFi Features

### For Token Holders

**Lending (Deposit USDC)**
- Deposit USDC into token-specific vaults
- Earn interest from borrowers
- Receive ERC4626 vault shares
- Withdraw anytime (subject to liquidity)

**Borrowing (Use Tokens as Collateral)**
- Deposit campaign tokens as collateral
- Borrow USDC against token value
- Pay interest on borrowed amount
- Flexible repayment

**Trading**
- Buy/sell tokens on marketplace
- Create buy/sell offers
- Participate in trading contests
- Earn fee rewards

**Dividends**
- Receive film revenue distributions
- Claim proportional to holdings
- Multiple distribution rounds
- Snapshot-based fairness

### For Producers

**Revenue Tools**
- Distribute dividends to token holders
- Create redemption events
- Manage token economics
- Engage community financially

**Liquidity Access**
- Borrow against own tokens
- Access working capital
- Flexible financing
- No traditional lenders needed

**Fee Income**
- Earn 10% of trading fees
- Passive income from token activity
- Automatic distribution
- Long-term alignment

## UnifiedVault Architecture

Each graduated token has its own ERC4626-compliant vault.

### Vault Structure

```
┌─────────────────────────────────────┐
│       UnifiedVault (Token X)      │
├─────────────────────────────────────┤
│                                     │
│  Total USDC: $100,000               │
│                                     │
│  ┌───────────────────────────────┐ │
│  │  Lending Pool (80%)           │ │
│  │  $80,000                      │ │
│  │  - Available for borrowing    │ │
│  │  - Earns interest             │ │
│  └───────────────────────────────┘ │
│                                     │
│  ┌───────────────────────────────┐ │
│  │  Stability Pool (20%)         │ │
│  │  $20,000                      │ │
│  │  - Auto-liquidations          │ │
│  │  - Collateral gains           │ │
│  └───────────────────────────────┘ │
│                                     │
│  ┌───────────────────────────────┐ │
│  │  Insurance Fund               │ │
│  │  $5,000                       │ │
│  │  - Funded by interest         │ │
│  │  - Bad debt coverage          │ │
│  └───────────────────────────────┘ │
│                                     │
└─────────────────────────────────────┘
```

### Deposit Allocation

When you deposit USDC:
```
Deposit: 1,000 USDC

Automatic Split:
├─ 800 USDC → Lending Pool (80%)
└─ 200 USDC → Stability Pool (20%)

You Receive: 1,000 vault shares
Complexity: Hidden from user
```

### Interest Accrual

Interest earned from borrowers is split based on risk tier:

**GREEN Tier (Healthy)**
```
100 USDC interest earned:
├─ 4 USDC → Protocol (4%)
├─ 6 USDC → Insurance Fund (6%)
└─ 90 USDC → Lenders (90%)
```

**YELLOW Tier (Moderate Risk)**
```
100 USDC interest earned:
├─ 6 USDC → Protocol (6%)
├─ 9 USDC → Insurance Fund (9%)
└─ 85 USDC → Lenders (85%)
```

**RED Tier (High Risk)**
```
100 USDC interest earned:
├─ 10 USDC → Protocol (10%)
├─ 15 USDC → Insurance Fund (15%)
└─ 75 USDC → Lenders (75%)
```

## Risk Tiers

The RiskOracle assesses each token's risk level continuously.

### Tier Definitions

| Tier | Color | Risk Level | Collateral Factor | Liquidation Threshold |
|------|-------|------------|-------------------|----------------------|
| 0 | 🟢 GREEN | Low | 50% | 60% |
| 1 | 🟡 YELLOW | Medium | 40% | 50% |
| 2 | 🔴 RED | High | 30% | 40% |

### Risk Factors

**Price Staleness**
- GREEN: Updated within 1 hour
- YELLOW: Updated within 6 hours
- RED: Stale > 6 hours

**Vault Utilization**
- GREEN: < 85%
- YELLOW: 85-95%
- RED: > 95%

**Market Health**
- Wash trading detection
- Unique participant count
- Trade frequency
- Volume patterns

**Disputes**
- OptimisticPriceOracle disputes
- Price manipulation attempts
- Community reports

### Tier Impact

**On Borrowing:**
- Lower collateral factor = less borrowing power
- Higher liquidation risk
- Reduced supply caps

**On Interest:**
- More to insurance fund
- More to protocol
- Less to lenders

**On Deposits:**
- Risk-based caps
- Minimum liquidity requirements
- Circuit breaker thresholds

## Interest Rate Model

Dynamic interest rates based on utilization.

### Jump Rate Model

```
Interest Rate = Base Rate + (Utilization × Multiplier)

If Utilization > Optimal (70%):
  Interest Rate = Base + (Optimal × Multiplier) + 
                  ((Utilization - Optimal) × Jump Multiplier)
```

### Rate Curve Example

```
Utilization | Interest Rate (APY)
------------|--------------------
0%          | 2%
25%         | 5%
50%         | 8%
70%         | 12% (Optimal)
80%         | 20%
85%         | 35% (Max, no more borrowing)
```

### Why This Works

**Low Utilization:**
- Low rates encourage borrowing
- Lenders earn less but safe
- Capital underutilized

**Optimal Utilization (70%):**
- Balanced rates
- Good returns for lenders
- Reasonable cost for borrowers

**High Utilization (>70%):**
- High rates discourage borrowing
- Encourages repayment
- Protects lender liquidity

**Maximum (85%):**
- Hard cap prevents bank runs
- Always 15% available
- Safety mechanism

## Liquidation System

### When Liquidation Occurs

```
Collateral Value / Borrowed Amount < Liquidation Threshold

Example:
Collateral: 100 tokens @ $10 = $1,000
Borrowed: $500
Ratio: 50% (safe)

Price drops to $8:
Collateral: 100 tokens @ $8 = $800
Borrowed: $500
Ratio: 62.5% > 60% threshold
→ LIQUIDATION TRIGGERED
```

### Liquidation Process

**Step 1: Stability Pool Liquidation**
```
1. Stability pool USDC repays debt
2. Borrower's collateral seized
3. Collateral distributed to stability depositors
4. Pro-rata based on deposits
```

**Step 2: Auto-Sell Collateral**
```
1. Vault holds seized tokens
2. Creates sell offer on Market
3. Discounted price (10% bonus)
4. Buyers get discount
5. USDC returns to stability pool
```

**Step 3: Insurance Fund (If Needed)**
```
If bad debt remains:
1. Insurance fund covers shortfall
2. Protects lender deposits
3. Maintains vault solvency
```

### Liquidation Bonus

**10% Liquidation Bonus**
```
Debt: $500
Collateral seized: $550 worth (10% bonus)

Liquidator profit: $50
Incentivizes quick liquidation
```

### Protocol Liquidation Fee

**2% Protocol Fee**
```
Collateral seized: $550
Protocol fee: $11 (2%)
To liquidator: $539

Funds platform operations
```

## Fee Structure

### Trading Fees (2.5%)

```
Trade: 100 tokens @ $10 = $1,000
Fee: $25 (2.5%)

Distribution:
├─ $10 → Protocol Treasury (40%)
├─ $10 → Trading Contest (40%)
├─ $2.50 → UnifiedVault (10%)
└─ $2.50 → Producer (10%)
```

### Borrowing Fees

**Interest Only**
- No origination fee
- No early repayment penalty
- Only pay interest on borrowed amount
- Accrues per block

### Liquidation Fees

**Liquidation Bonus: 10%**
- Paid by borrower
- Incentivizes liquidators

**Protocol Fee: 2%**
- On liquidated collateral
- Funds platform

### Withdrawal Fees

**None**
- Free to withdraw from vaults
- Only gas fees
- No time locks (if liquidity available)

## Capital Efficiency

### For Lenders

**Single-Sided Deposits**
- Only deposit USDC
- No impermanent loss
- Predictable returns
- ERC4626 standard

**Auto-Compounding**
- Interest auto-reinvested
- Vault shares appreciate
- No manual claiming
- Gas-efficient

**Liquidity**
- Withdraw anytime
- Subject to utilization
- 15% always available
- No lock-ups

### For Borrowers

**Flexible Collateral**
- Use campaign tokens
- No selling required
- Maintain upside exposure
- Flexible repayment

**No Fixed Terms**
- Borrow indefinitely
- Repay anytime
- No maturity dates
- Interest-only payments

**Leverage Opportunities**
- Borrow to buy more tokens
- Increase position size
- Amplify returns (and risks)
- Sophisticated strategies

## Safety Mechanisms

### 4-Layer Protection

**Layer 1: Collateral**
- Borrower's tokens
- First line of defense
- Liquidation at threshold

**Layer 2: Stability Pool (20%)**
- Auto-liquidation buffer
- Instant USDC available
- No external liquidators needed

**Layer 3: Insurance Fund**
- Funded by interest
- Covers bad debt
- Grows with protocol

**Layer 4: Protocol Treasury**
- Last resort backstop
- Emergency situations
- Governance-controlled

### Circuit Breakers

**Automatic Pauses When:**
- Bad debt > $10,000
- Utilization > 99%
- Price stale > 12 hours

**Purpose:**
- Prevent cascading failures
- Protect user funds
- Allow intervention

### Risk Oracle Monitoring

**Continuous Assessment:**
- Price staleness
- Utilization levels
- Wash trading
- Market health

**Automatic Adjustments:**
- Tier changes
- Parameter updates
- Supply caps
- Interest splits

## Getting Started

### As a Lender

1. **Choose Token**: Browse graduated campaigns
2. **Check Risk**: Review tier and APY
3. **Deposit USDC**: Enter amount and confirm
4. **Earn Interest**: Automatic accrual
5. **Withdraw**: Anytime (subject to liquidity)

### As a Borrower

1. **Deposit Collateral**: Transfer tokens to vault
2. **Check Limit**: See max borrow amount
3. **Borrow USDC**: Specify amount
4. **Monitor Health**: Watch collateral ratio
5. **Repay**: Pay back anytime to unlock collateral

### Risk Management

**For Lenders:**
- ✅ Diversify across tokens
- ✅ Monitor risk tiers
- ✅ Understand utilization
- ✅ Check insurance fund

**For Borrowers:**
- ✅ Maintain safe collateral ratio
- ✅ Monitor price changes
- ✅ Set price alerts
- ✅ Keep extra collateral ready

---

**Next Steps:**
- [Learn Lending & Borrowing →](lending-borrowing.md)
- [Understand Dividends →](dividends.md)
- [Explore Fee Structure →](fees.md)
