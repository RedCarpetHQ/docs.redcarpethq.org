# Supply & Distribution

## Overview

Understanding token supply and distribution is crucial for evaluating campaign tokens on RedCarpetHQ. This guide explains how token supply is determined, how tokens are distributed, and what factors affect supply dynamics.

## Token Supply Determination

### Initial Supply Calculation

The total token supply is determined at campaign graduation based on the total amount raised:

```
Total Token Supply = Total USDC Raised
```

**Example:**
- Campaign raises $250,000 USDC
- Total token supply: 250,000 tokens
- 1 token = $1 USDC at graduation

### Why 1:1 Ratio?

The 1:1 ratio (1 token per 1 USDC raised) provides:

✅ **Simplicity:** Easy to understand and calculate  
✅ **Fairness:** Proportional to contribution amounts  
✅ **Transparency:** Clear relationship between funding and tokens  
✅ **Standardization:** Consistent across all campaigns

## Distribution Mechanics

### Supporter Distribution

Tokens are distributed proportionally to all supporters:

```
Supporter Tokens = (Supporter Contribution / Total Raised) × Total Supply
```

**Example Distribution:**
- Total raised: $100,000
- Total supply: 100,000 tokens

| Supporter | Contribution | Tokens | % of Supply |
|-----------|-------------|--------|-------------|
| Alice     | $10,000     | 10,000 | 10%         |
| Bob       | $5,000      | 5,000  | 5%          |
| Carol     | $2,500      | 2,500  | 2.5%        |
| Others    | $82,500     | 82,500 | 82.5%       |

### Producer Allocation

**Important:** Producers do NOT receive automatic token allocation.

**Producers can receive tokens by:**
- Contributing to their own campaign (like any supporter)
- Purchasing tokens on the marketplace after graduation
- Receiving tokens as payment or gifts

**Why no automatic allocation?**
- Prevents dilution of supporter ownership
- Maintains fairness and transparency
- Aligns with crowdfunding principles
- Reduces conflicts of interest

### Distribution Timeline

**Automatic Distribution:**
1. Campaign reaches funding goal
2. Grace period completes
3. Campaign graduates
4. Token contract deployed
5. Tokens automatically distributed to supporter wallets
6. No claim process required

**Timing:**
- Distribution happens in the same transaction as graduation
- Tokens appear in wallets immediately
- No waiting period or vesting schedule

## Supply Dynamics

### Fixed Supply

**After graduation, token supply is fixed:**
- No minting of new tokens
- No inflation mechanisms
- Supply can only decrease (through burning)
- Immutable smart contract ensures this

### Deflationary Mechanisms

Token supply can decrease through:

**1. Refund Burns (Pre-Graduation)**
- Failed campaigns: tokens burned for refunds
- Cancelled campaigns: tokens burned for refunds

**2. Future Mechanisms (Planned)**
- Producer buyback programs
- Community governance burns
- Revenue-based buybacks

### Circulating Supply

**All tokens are in circulation:**
- No locked or vested tokens
- No team allocation to unlock
- 100% circulating from day one
- Full transparency

## Distribution Fairness

### Anti-Whale Mechanisms

**No built-in whale protection:**
- Large contributors receive proportionally more tokens
- This reflects their higher financial support
- Market forces provide natural distribution over time

**Natural distribution occurs through:**
- Trading on the marketplace
- Dividend reinvestment
- Community growth
- Price discovery

### Sybil Resistance

**Protection against fake accounts:**
- Wallet-based distribution (not account-based)
- Blockchain transparency
- On-chain verification
- No benefit to splitting contributions

## Token Holder Rights

### Ownership Rights

Token holders receive:

**1. Dividend Rights**
- Proportional to token ownership
- Paid in USDC
- Claimed through DividendDistributor

**2. Trading Rights**
- Buy and sell on marketplace
- Set your own prices
- No lock-up periods

**3. DeFi Rights**
- Use as collateral for loans
- Earn interest on deposits
- Participate in liquidity provision

**4. Governance Rights (Future)**
- Vote on campaign decisions
- Participate in community governance
- Influence project direction

### No Special Classes

**All tokens are equal:**
- No preferred shares
- No voting weight differences
- No special privileges
- One token = one token

## Supply Transparency

### On-Chain Verification

Anyone can verify token distribution:

**Using Etherscan:**
1. Go to token contract address
2. Click "Token Holders" tab
3. View complete holder list
4. See exact distribution percentages

**Information available:**
- Total supply
- Holder addresses
- Token balances
- Transfer history
- Distribution percentages

### Real-Time Tracking

**Monitor supply changes:**
- Block explorers show live data
- Token tracking tools available
- Distribution charts and analytics
- Historical supply data

## Distribution Scenarios

### Scenario 1: Small Campaign

**Campaign Details:**
- Goal: $10,000
- Total raised: $12,500
- Supporters: 25
- Average contribution: $500

**Token Distribution:**
- Total supply: 12,500 tokens
- Average holding: 500 tokens
- Distribution: Relatively even
- Concentration: Low

### Scenario 2: Large Campaign

**Campaign Details:**
- Goal: $500,000
- Total raised: $750,000
- Supporters: 500
- Average contribution: $1,500

**Token Distribution:**
- Total supply: 750,000 tokens
- Average holding: 1,500 tokens
- Distribution: More varied
- Concentration: Moderate

### Scenario 3: Whale-Heavy Campaign

**Campaign Details:**
- Goal: $100,000
- Total raised: $150,000
- Top 10 supporters: $100,000 (67%)
- Other 90 supporters: $50,000 (33%)

**Token Distribution:**
- Total supply: 150,000 tokens
- Top 10 hold: 100,000 tokens (67%)
- Others hold: 50,000 tokens (33%)
- Concentration: High

## Impact on Token Value

### Supply-Demand Dynamics

**Fixed supply means:**
- Scarcity increases with demand
- No dilution from new issuance
- Price reflects true market value
- Deflationary potential

**Demand drivers:**
- Campaign success
- Revenue generation
- Dividend distributions
- Community growth
- Market sentiment

### Distribution Effects

**Concentrated ownership:**
- Higher volatility potential
- Lower liquidity
- Whale influence on price
- Risk of manipulation

**Distributed ownership:**
- Lower volatility
- Higher liquidity
- More stable pricing
- Healthier market

## Best Practices

### For Supporters

✅ **Before Contributing:**
- Understand token distribution
- Check campaign funding progress
- Assess potential concentration
- Consider your ownership percentage

✅ **After Receiving Tokens:**
- Verify your token balance
- Understand your ownership percentage
- Monitor distribution changes
- Track holder concentration

### For Producers

✅ **Campaign Planning:**
- Set realistic funding goals
- Encourage broad participation
- Communicate token distribution clearly
- Plan for post-graduation token economics

✅ **Post-Graduation:**
- Monitor token distribution
- Engage with token holders
- Consider buyback programs
- Build long-term value

## Advanced Topics

### Token Splits (Future Feature)

Potential future feature to adjust token supply:

**Why token splits?**
- Make tokens more affordable
- Improve psychological pricing
- Increase trading activity
- Maintain proportional ownership

**Example:**
- 10:1 split
- 1,000 tokens → 10,000 tokens
- Ownership % unchanged
- Price adjusts proportionally

### Buyback Programs

Producers may implement buybacks:

**Mechanism:**
1. Producer uses revenue to buy tokens
2. Tokens purchased from marketplace
3. Tokens can be burned or held
4. Reduces circulating supply
5. Potentially increases token value

**Benefits:**
- Returns value to token holders
- Demonstrates confidence
- Reduces supply
- Supports token price

## Frequently Asked Questions

**Q: Can the producer mint more tokens later?**
A: No, the total supply is fixed at graduation and cannot be increased.

**Q: What happens to tokens from failed campaigns?**
A: No tokens are created for failed campaigns. Supporters claim USDC refunds instead.

**Q: Can I see who holds the most tokens?**
A: Yes, all token holdings are public on the blockchain via Etherscan.

**Q: Do producers get free tokens?**
A: No, producers only receive tokens if they contribute to their own campaign.

**Q: What if someone holds 51% of tokens?**
A: Large holders have more dividend rights but cannot control the campaign or token contract.

**Q: Can supply increase through staking rewards?**
A: No, there are no staking rewards or supply inflation mechanisms.

## Related Resources

- [Token Basics](tokenomics/token-basics.md)
- [Token Trading](tokenomics/trading.md)
- [Price Discovery](tokenomics/price-oracle.md)
- [Dividend Distribution](finance/dividends.md)
- [Smart Contracts](technical/contracts.md)

---

**Need Help?**

If you have questions about token supply and distribution, contact our support team at support@redcarpethq.com.
