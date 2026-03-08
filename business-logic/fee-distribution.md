# Fee Distribution

Understanding how fees flow through the RedCarpetHQ ecosystem helps you appreciate the platform's sustainability and your role as a producer.

## FeeDistributor Contract

The FeeDistributor is the central hub for all protocol fees, implementing a fixed 40/40/10/10 split.

### Fee Sources

**1. Trading Fees (Market Contract)**
- 2.5% of every trade
- Collected on token trades
- **Note:** Minimum trade size is 1 USDC (`MIN_TRADE_SIZE = 1e6`) to prevent dust spam.
- Largest fee source

**2. Interest Income (UnifiedVault)**
- Protocol's share of interest
- Risk-tiered percentages
- From borrower payments

### Distribution Split

```
┌─────────────────────────────────────────┐
│         FeeDistributor (100%)           │
├─────────────────────────────────────────┤
│                                         │
│  ┌───────────────────────────────────┐ │
│  │  Protocol Treasury (40%)          │ │
│  │  - Platform development           │ │
│  │  - Security audits                │ │
│  │  - Infrastructure                 │ │
│  │  - Team operations                │ │
│  └───────────────────────────────────┘ │
│                                         │
│  ┌───────────────────────────────────┐ │
│  │  Trading Contest (40%)            │ │
│  │  - Trader rewards                 │ │
│  │  - 6-hour epochs                  │ │
│  │  - Pro-rata distribution          │ │
│  │  - First claimer bounty           │ │
│  └───────────────────────────────────┘ │
│                                         │
│  ┌───────────────────────────────────┐ │
│  │  UnifiedVault (10%)               │ │
│  │  - Protocol's vault allocation    │ │
│  │  - Earns lending interest         │ │
│  │  - Compounds over time            │ │
│  │  - Used for Producer Exit         │ │
│  └───────────────────────────────────┘ │
│                                         │
│  ┌───────────────────────────────────┐ │
│  │  Producer (10%)                   │ │
│  │  - Token creator reward           │ │
│  │  - Claimable anytime              │ │
│  │  - Passive income                 │ │
│  │  - Long-term alignment            │ │
│  └───────────────────────────────────┘ │
│                                         │
└─────────────────────────────────────────┘
```

## Trading Fee Flow

### Example Trade

**Trade Details:**
```
Buyer: 0xAAA...
Seller: 0xBBB...
Token: FRONTIER
Amount: 1,000 tokens
Price: $1.00 per token
Total: $1,000
```

**Fee Calculation:**
```
Trade Value: $1,000
Fee Rate: 2.5%
Total Fee: $25

Seller receives: $975 ($1,000 - $25)
Buyer pays: $1,000 (fee included in price)
```

**Fee Distribution:**
```
$25 total fee collected:

1. Protocol Treasury: $10 (40%)
   → FEE_SAFE_ADDRESS
   
2. Trading Contest: $10 (40%)
   → Contest contract (current epoch)
   
3. UnifiedVault: $2.50 (10%)
   → Protocol's vault shares
   
4. Producer: $2.50 (10%)
   → Pending producer rewards
```

### Automatic Distribution

**On Every Trade:**
1. Market contract collects fee
2. Calls FeeDistributor.distributeFees()
3. Splits according to 40/40/10/10
4. Sends to respective destinations
5. Emits FeesDistributed event

**Gas Efficiency:**
- Single transaction
- Atomic distribution
- No manual intervention
- Transparent on-chain

## Producer Rewards (10%)

### Earning Producer Fees

**Automatic Accrual:**
```
Your Token: FRONTIER
Total Trading Volume: $100,000
Total Fees Collected: $2,500 (2.5%)
Your Share (10%): $250

Status: Claimable
```

**Per-Epoch Tracking:**
```
Epoch 1: $25 fees → $2.50 to you
Epoch 2: $30 fees → $3.00 to you
Epoch 3: $20 fees → $2.00 to you
Total: $75 fees → $7.50 claimable
```

### Claiming Producer Rewards

**Via Platform:**
1. Navigate to campaign management
2. Click "Fees Collected" tab
3. View claimable amount
4. Click "Claim Producer Rewards"
5. Confirm transaction
6. Receive USDC

**Via Contract:**
```solidity
UnifiedVault.claimProducerReward(tokenAddress)
```

**Example:**
```
Token: FRONTIER (0x123...)
Claimable: $250 USDC
Gas Cost: ~80,000 gas

Transaction:
- Function: claimProducerReward()
- Contract: UnifiedVault (Token specific)
- Result: $250 USDC to your wallet
- Event: ProducerRewardClaimed
```

### Claiming Strategy

**When to Claim:**

**Frequent (Weekly):**
- ✅ Regular income
- ✅ Lower risk
- ❌ Higher gas costs

**Batched (Monthly):**
- ✅ Lower gas costs
- ✅ Larger amounts
- ❌ Delayed income

**Threshold-Based:**
```
If claimable > $100:
  Claim rewards
Else:
  Wait for more accumulation
```

### Producer Fee History

**Tracking:**
```
Total Fees Earned: $1,250
Total Claimed: $1,000
Pending: $250
Claim Count: 10 claims
Average Claim: $100
First Claim: Feb 1, 2025
Last Claim: Mar 15, 2025
```

**Per-Epoch Breakdown:**
```
Epoch | Fees | Your Share | Status
------|------|------------|--------
1     | $25  | $2.50      | Claimed
2     | $30  | $3.00      | Claimed
3     | $20  | $2.00      | Claimed
4     | $35  | $3.50      | Pending
5     | $40  | $4.00      | Pending
```

## Interest Income Distribution

### From UnifiedVault

**Interest Split (Risk-Tiered):**

**GREEN Tier:**
```
$100 interest earned:
├─ $4 → Protocol (4%)
├─ $6 → Insurance Fund (6%)
└─ $90 → Lenders (90%)

Protocol's $4 → FeeDistributor
```

**YELLOW Tier:**
```
$100 interest earned:
├─ $6 → Protocol (6%)
├─ $9 → Insurance Fund (9%)
└─ $85 → Lenders (85%)

Protocol's $6 → FeeDistributor
```

**RED Tier:**
```
$100 interest earned:
├─ $10 → Protocol (10%)
├─ $15 → Insurance Fund (15%)
└─ $75 → Lenders (75%)

Protocol's $10 → FeeDistributor
```

### Interest Fee Distribution

**Same 40/40/10/10 Split:**
```
Protocol interest: $10

Distribution:
├─ $4 → Protocol Treasury (40%)
├─ $4 → Trading Contest (40%)
├─ $1 → UnifiedVault (10%)
└─ $1 → Producer (10%)
```

**Why This Matters:**
- More borrowing = more interest
- More interest = more producer income
- Healthy DeFi = passive income
- Long-term sustainability

## Contest Distribution (40%)

### How Contest Fees Work

**Fee Collection:**
```
Trading fees collected per epoch:
Epoch 1: $100 → $40 to Contest
Epoch 2: $150 → $60 to Contest
Epoch 3: $200 → $80 to Contest
```

**Prize Pool:**
```
Epoch 3 Prize Pool: $80

Qualified Traders:
- Trader A: 50,000 USDC volume (50%)
- Trader B: 30,000 USDC volume (30%)
- Trader C: 20,000 USDC volume (20%)

Distribution:
- Trader A: $40 (50%)
- Trader B: $24 (30%)
- Trader C: $16 (20%)

First Claimer Bounty: $0.80 (1%)
```

**Why 40% to Traders:**
- Incentivizes trading activity
- Creates liquidity
- Rewards active participants
- Sustainable ecosystem

## Protocol Treasury (40%)

### Usage

**Platform Development:**
- Smart contract development
- Frontend improvements
- New features
- Bug fixes

**Security:**
- Smart contract audits
- Security monitoring
- Incident response

**Infrastructure:**
- Server costs
- API services
- Database hosting
- CDN and storage

**Operations:**
- Team salaries
- Legal compliance
- Marketing
- Community management

### Transparency

**Treasury Address:**
```
FEE_SAFE_ADDRESS: [Address]
Balance: Publicly viewable
Transactions: On-chain
Usage: Documented
```

**Governance (Future):**
- Community input
- Transparent spending
- DAO structure (potential)
- Stakeholder alignment

## Vault Allocation (10%)

### Protocol's Vault Position

**Purpose:**
```
10% of fees → UnifiedVault deposits
Earns lending interest
Compounds over time
Used for Producer Exit feature
```

**Example:**
```
Month 1: $100 fees → $10 deposited
Month 2: $150 fees → $15 deposited
Month 3: $200 fees → $20 deposited

Total Deposited: $45
Interest Earned: $2
Total Value: $47
```

### Producer Exit Strategy

**Burn for Vault Shares:**
```
Producer wants to exit:
1. Burns own tokens
2. Receives protocol's vault allocation
3. No market impact
4. Fair value exchange

Requirements:
- Minimum $10 threshold
- 25% exit fee
- Only protocol's shares
- Doesn't affect other holders
```

**Example:**
```
Protocol's vault shares: $10,000
Producer burns: 10% of supply
Producer receives: $1,000 worth of shares
Exit fee (25%): $250
Net to producer: $750
```

## Fee Tracking

### For Producers

**Dashboard Metrics:**
```
Your Token: FRONTIER

Trading Fees:
- Total Collected: $2,500
- Your Share (10%): $250
- Claimed: $200
- Pending: $50

Interest Fees:
- Total Collected: $500
- Your Share (10%): $50
- Claimed: $40
- Pending: $10

Total Earnings: $300
Total Claimed: $240
Total Pending: $60
```

### Historical Data

**Monthly Breakdown:**
```
Month    | Trading | Interest | Total | Claimed
---------|---------|----------|-------|--------
Jan 2025 | $50     | $10      | $60   | $60
Feb 2025 | $75     | $15      | $90   | $90
Mar 2025 | $125    | $25      | $150  | $90
Total    | $250    | $50      | $300  | $240
```

### Analytics

**Fee Trends:**
```
Week 1: $25 fees
Week 2: $30 fees (+20%)
Week 3: $35 fees (+17%)
Week 4: $40 fees (+14%)

Trend: Growing ✅
Average: $32.50/week
Projected Monthly: $130
```

## Maximizing Producer Income

### Strategies

**1. Increase Trading Volume**
- Engage community
- Post regular updates
- Create trading incentives
- Build excitement

**2. Encourage DeFi Usage**
- Promote lending pools
- Explain borrowing benefits
- Share APY rates
- Educate holders

**3. Long-Term Thinking**
- Sustainable growth
- Community building
- Quality over quantity
- Aligned incentives

**4. Regular Claims**
- Claim strategically
- Consider gas costs
- Reinvest if desired
- Track for taxes

### What NOT to Do

**Avoid:**
- ❌ Wash trading (detected and penalized)
- ❌ Price manipulation
- ❌ Fake volume
- ❌ Misleading community

**Consequences:**
- Risk tier elevation
- Reduced trading
- Community loss
- Platform penalties

## Tax Considerations

### For Producers

**Producer Fees as Income:**
- Likely taxable
- Report as business income
- Track all claims
- Consult tax advisor

**Record Keeping:**
```
Date       | Amount | Transaction Hash
-----------|--------|------------------
2025-02-01 | $50    | 0x123...
2025-03-01 | $75    | 0x456...
2025-04-01 | $100   | 0x789...
```

**Documentation:**
- Claim transactions
- Fee statements
- Annual summaries
- Tax forms (if required)

## Comparison to Traditional Models

### Traditional Crowdfunding

**Kickstarter/Indiegogo:**
- Platform fee: 5-10%
- Payment processing: 3-5%
- Total: 8-15%
- No ongoing income

**RedCarpetHQ:**
- Campaign creation: Gas only
- Trading fee: 2.5% (not paid by producer)
- Producer share: 10% of fees (income!)
- Ongoing passive income

### Traditional Film Financing

**Studio/Investor Model:**
- Producers: 2-5% of profits
- After recoupment
- Complex accounting
- Delayed payments

**RedCarpetHQ:**
- Producers: 10% of trading fees
- Immediate accrual
- Transparent on-chain
- Plus potential dividends

## Future Enhancements

### Potential Changes

**Governance:**
- Community voting on fee splits
- Adjustable parameters
- Transparent proposals

**Additional Revenue:**
- Premium features
- Advanced analytics
- White-label solutions
- Partnership revenue

**Optimization:**
- Gas efficiency improvements
- Batch claiming
- Auto-compounding
- Yield strategies

---

**Next Steps:**
- [Understand DeFi Architecture →](business-logic/defi-architecture.md)
- [Learn About Risk Tiers →](business-logic/risk-tiers.md)
- [Explore Campaign Economics →](business-logic/campaign-economics.md)
