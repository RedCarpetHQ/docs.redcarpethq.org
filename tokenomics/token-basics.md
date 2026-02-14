# Token Basics

## Overview

Every successful campaign on RedCarpetHQ creates its own unique ERC-20 token. These tokens represent ownership stakes in the campaign and provide various benefits to holders. This guide covers the fundamentals of campaign tokens.

## What Are Campaign Tokens?

Campaign tokens are blockchain-based digital assets that:

- **Represent your support** for a film project
- **Provide ownership rights** in the campaign's success
- **Enable trading** on the RedCarpetHQ marketplace
- **Grant dividend rights** from campaign revenues
- **Can be used as collateral** for DeFi borrowing

## Token Creation

### When Are Tokens Created?

Tokens are created when a campaign **graduates** (successfully reaches its funding goal):

1. Campaign reaches funding goal before deadline
2. Grace period completes successfully
3. Smart contract deploys the ERC-20 token
4. Tokens are distributed to supporters proportionally

### Token Properties

Each campaign token has:

**Name:** The campaign's full name (e.g., "Awesome Film Project")  
**Symbol:** A unique 3-5 character ticker (e.g., "AFP")  
**Decimals:** 18 (standard ERC-20)  
**Total Supply:** Fixed based on total funding raised  
**Contract Address:** Unique Ethereum address

## Token Distribution

### Initial Distribution

Tokens are distributed based on contribution amounts:

```
Your Tokens = (Your Contribution / Total Raised) × Total Token Supply
```

**Example:**
- Total raised: $100,000 USDC
- Your contribution: $1,000 USDC
- Total token supply: 100,000 tokens
- Your tokens: 1,000 tokens (1% of supply)

### Who Gets Tokens?

- **Supporters:** Receive tokens proportional to their contributions
- **Producer:** May receive tokens if they contributed to their own campaign
- **No pre-mine:** Producers don't automatically get tokens unless they contribute

## Token Utility

### 1. Trading

**Marketplace Trading:**
- Buy and sell tokens on RedCarpetHQ marketplace
- Create offers at your desired price
- Accept offers from other traders
- 2.5% trading fee applies

**Price Discovery:**
- Market determines token value
- VWAP oracle tracks fair market price
- No artificial price controls

### 2. Dividends

**Revenue Sharing:**
- Producers can distribute profits to token holders
- Dividends paid in USDC
- Proportional to token ownership
- Claimed by token holders

**Example:**
- Campaign earns $50,000 in revenue
- Producer distributes $10,000 as dividends
- You hold 1% of tokens
- You receive $100 in dividends

### 3. DeFi Collateral

**Borrowing Against Tokens:**
- Deposit tokens in UnifiedVault
- Borrow USDC against your tokens
- Interest rates vary by risk tier
- Risk of liquidation if token price drops

**Collateral Factors:**
- GREEN tier: Up to 75% LTV
- YELLOW tier: Up to 60% LTV
- RED tier: Up to 40% LTV

### 4. Governance (Future)

Planned features include:
- Voting on campaign decisions
- Community governance proposals
- Producer accountability mechanisms

## Token Standards

### ERC-20 Compliance

All campaign tokens follow the ERC-20 standard:

✅ **Compatible with:**
- MetaMask and other Web3 wallets
- Ethereum blockchain explorers
- DeFi protocols and aggregators
- Token tracking tools

✅ **Standard functions:**
- `transfer()` - Send tokens
- `approve()` - Allow spending
- `balanceOf()` - Check balance
- `totalSupply()` - View total supply

### Security Features

**Built-in protections:**
- Battle-tested smart contract code
- No mint/burn functions (except for refunds)
- Transparent on-chain transactions
- Immutable token supply

## Viewing Your Tokens

### In Your Wallet

**MetaMask:**
1. Open MetaMask
2. Click "Assets" tab
3. Click "Import tokens"
4. Enter token contract address
5. Token appears in your wallet

**Token Information:**
- Contract address shown on campaign page
- Add to wallet with one click
- View balance and transaction history

### On Block Explorers

**BNB Chain Testnet Explorer:**
- View all token holders
- See transaction history
- Check total supply
- Verify contract code

## Token Economics

### Supply Mechanics

**Fixed Supply:**
- Total supply set at campaign graduation
- No inflation or additional minting
- Supply only decreases if tokens are burned

**Burn Mechanisms:**
- Refunds from failed/cancelled campaigns
- Potential future buyback programs
- Deflationary pressure

### Price Factors

Token prices are influenced by:

📈 **Positive factors:**
- Campaign success and revenue
- Dividend distributions
- Strong community support
- Positive project updates
- Market demand

📉 **Negative factors:**
- Project delays or failures
- Lack of revenue
- Market sell pressure
- Negative news
- Overall market conditions

## Token Lifecycle

### 1. Pre-Graduation

**Before campaign succeeds:**
- No tokens exist yet
- Contributions tracked in campaign contract
- Can claim refund if campaign fails

### 2. Graduation

**When campaign succeeds:**
- Token contract deployed
- Tokens distributed to supporters
- Trading becomes available
- DeFi features unlock

### 3. Active Trading

**Post-graduation:**
- Tokens trade on marketplace
- Holders can lend/borrow
- Dividends may be distributed
- Price discovery occurs

### 4. Long-term

**Ongoing:**
- Continued trading activity
- Potential revenue sharing
- Community engagement
- Project development

## Best Practices

### For Token Holders

✅ **Do:**
- Store tokens in a secure wallet
- Keep track of your private keys
- Monitor campaign updates
- Understand dividend schedules
- Research before trading

❌ **Don't:**
- Share your private keys
- Send tokens to unknown addresses
- Panic sell during volatility
- Ignore project updates
- Invest more than you can afford to lose

### For Producers

✅ **Do:**
- Choose a memorable token symbol
- Communicate token utility clearly
- Distribute dividends when profitable
- Keep token holders informed
- Build long-term value

❌ **Don't:**
- Make unrealistic promises about token value
- Manipulate token prices
- Ignore token holder concerns
- Fail to deliver on project milestones

## Tax Considerations

**Important:** Token transactions may have tax implications:

- **Receiving tokens:** May be taxable as income
- **Trading tokens:** Capital gains/losses apply
- **Receiving dividends:** Typically taxable as income
- **Using as collateral:** May trigger tax events

**Recommendation:** Consult a tax professional familiar with cryptocurrency taxation in your jurisdiction.

## Technical Details

### Token Contract

```solidity
// Simplified ERC-20 token structure
contract CampaignToken is ERC20 {
    string public name;
    string public symbol;
    uint8 public decimals = 18;
    uint256 public totalSupply;
    
    // Standard ERC-20 functions
    function transfer(address to, uint256 amount) public returns (bool);
    function approve(address spender, uint256 amount) public returns (bool);
    function transferFrom(address from, address to, uint256 amount) public returns (bool);
}
```

### Integration with Platform

Tokens integrate with:
- **Campaign contract:** Tracks ownership
- **Market contract:** Enables trading
- **UnifiedVault:** Provides DeFi features
- **DividendDistributor:** Manages payouts
- **RiskOracle:** Assesses token health

## Frequently Asked Questions

**Q: When do I receive my tokens?**
A: Tokens are distributed automatically when the campaign graduates (successfully completes funding).

**Q: Can I sell my tokens immediately?**
A: Yes, once the campaign graduates, you can trade tokens on the marketplace.

**Q: What if the campaign fails?**
A: If a campaign fails, no tokens are created. You can claim a refund of your contribution.

**Q: Are tokens refundable after graduation?**
A: No, once a campaign graduates, tokens are not refundable. You can sell them on the marketplace instead.

**Q: Can the producer create more tokens later?**
A: No, the total supply is fixed at graduation and cannot be increased.

**Q: What determines token value?**
A: Market supply and demand, campaign success, revenue generation, and overall market conditions.

## Related Resources

- [Supply & Distribution](tokenomics/supply-distribution.md)
- [Token Trading](tokenomics/trading.md)
- [Price Discovery](tokenomics/price-oracle.md)
- [Dividend Distribution](finance/dividends.md)
- [Smart Contracts](technical/contracts.md)

---

**Need Help?**

If you have questions about campaign tokens, contact our support team at support@redcarpethq.org.
