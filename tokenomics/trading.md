# Token Trading

## Overview

Once a campaign graduates, its tokens become tradable on the RedCarpetHQ marketplace. This guide covers everything you need to know about trading campaign tokens, from creating offers to executing trades.

## Getting Started with Trading

### Prerequisites

Before you can trade, you need:

✅ **Web3 Wallet** - MetaMask or WalletConnect compatible  
✅ **Campaign Tokens** - From graduated campaigns  
✅ **USDC** - To buy tokens or pay fees  
✅ **ETH** - For gas fees on Sepolia network

### When Can You Trade?

Trading becomes available when:
- Campaign successfully graduates
- Tokens are distributed to supporters
- Marketplace listing is activated
- Typically within minutes of graduation

## How Trading Works

### Escrow-Based System

RedCarpetHQ uses a secure escrow system:

1. **Seller creates offer** → Tokens locked in escrow
2. **Buyer accepts offer** → USDC locked in escrow
3. **Smart contract executes** → Atomic swap
4. **Assets transferred** → Buyer gets tokens, seller gets USDC
5. **Fees distributed** → Platform and ecosystem fees collected

**Benefits:**
- No counterparty risk
- Atomic transactions
- Transparent pricing
- Secure escrow

### Trading Fees

**Standard Fee: 2.5% per trade**

Fee breakdown:
- Charged to the buyer
- Deducted from USDC payment
- Distributed via FeeDistributor:
  - 40% → Platform treasury
  - 40% → Trading contests
  - 10% → UnifiedVault (lenders)
  - 10% → Producer rewards

**Example:**
- Token price: 100 USDC
- Trading fee: 2.5 USDC
- Total cost: 102.5 USDC
- Seller receives: 100 USDC

## Creating Sell Offers

### Step-by-Step Guide

1. **Navigate to marketplace**
2. **Select your token**
3. **Click "Create Offer"**
4. **Enter details:**
   - Amount of tokens to sell
   - Price per token (in USDC)
   - Expiration time (optional)
5. **Review and confirm**
6. **Approve token spending** (first time only)
7. **Confirm transaction**

### Pricing Your Offer

**Consider these factors:**

📊 **Market Data:**
- Current VWAP (Volume-Weighted Average Price)
- Recent trade history
- Active offers
- Market depth

💡 **Strategy:**
- Price above VWAP for premium
- Price at VWAP for quick sale
- Price below VWAP for immediate sale
- Consider market trends

### Offer Types

**1. Standard Offer**
- Fixed price per token
- Partial fills allowed
- Active until cancelled or filled

**2. All-or-Nothing**
- Must sell entire amount
- No partial fills
- Higher risk, potentially better price

**3. Time-Limited**
- Expires after set duration
- Creates urgency
- Auto-cancels if not filled

## Buying Tokens

### Finding Offers

**Browse marketplace:**
- View all active offers
- Filter by token
- Sort by price
- Check offer details

**Key information:**
- Price per token
- Total tokens available
- Seller address
- Time remaining
- Fill percentage

### Accepting Offers

1. **Select an offer**
2. **Choose amount** (full or partial)
3. **Review total cost** (including fees)
4. **Approve USDC spending** (first time only)
5. **Confirm purchase**
6. **Receive tokens** instantly

### Buying Strategy

✅ **Best Practices:**
- Compare multiple offers
- Check VWAP for fair pricing
- Consider market trends
- Start with small amounts
- Verify token contract address

❌ **Avoid:**
- Buying at extreme premiums
- Ignoring market data
- FOMO (Fear of Missing Out)
- Overleveraging

## Managing Your Offers

### Viewing Your Offers

**Active Offers:**
- See all your open sell offers
- Track fill status
- Monitor time remaining
- View total value locked

**Offer History:**
- Past trades
- Cancelled offers
- Expired offers
- Performance metrics

### Cancelling Offers

**When to cancel:**
- Price no longer competitive
- Market conditions changed
- Need tokens back
- Strategic repositioning

**How to cancel:**
1. Go to "My Offers"
2. Select offer to cancel
3. Click "Cancel Offer"
4. Confirm transaction
5. Tokens returned to wallet

**Note:** You pay gas fees for cancellation.

## Advanced Trading

### Partial Fills

**How it works:**
- Buyers can purchase part of an offer
- Remaining tokens stay in escrow
- Offer remains active
- Seller receives USDC for filled portion

**Example:**
- Offer: 1,000 tokens @ 1.5 USDC each
- Buyer 1 purchases: 300 tokens
- Remaining offer: 700 tokens @ 1.5 USDC each
- Seller receives: 450 USDC (minus fees)

### Price Discovery

**Market mechanisms:**
- Supply and demand
- VWAP oracle tracking
- Historical trade data
- Order book depth

**Factors affecting price:**
- Campaign performance
- Dividend announcements
- Market sentiment
- Overall crypto market
- Token holder concentration

### Arbitrage Opportunities

**Potential strategies:**
- Buy low, sell high
- Cross-market arbitrage (future)
- Dividend arbitrage
- Risk tier changes

**Risks:**
- Gas fees eat profits
- Market moves against you
- Liquidity constraints
- Smart contract risks

## Trading Safety

### Security Best Practices

🔒 **Protect Yourself:**
- Verify contract addresses
- Use hardware wallets for large amounts
- Double-check transaction details
- Start with small test trades
- Never share private keys

⚠️ **Red Flags:**
- Offers far above/below market
- Suspicious token contracts
- Unverified sellers
- Too-good-to-be-true prices

### Common Scams

**1. Fake Tokens**
- Scammers create tokens with similar names
- Always verify contract address
- Check token on campaign page

**2. Phishing**
- Fake marketplace websites
- Malicious wallet connection requests
- Always use official RedCarpetHQ domain

**3. Wash Trading**
- Artificial volume creation
- Manipulated prices
- Platform monitors and penalizes

## Market Analysis

### Reading the Order Book

**Bid-Ask Spread:**
- Bid: Highest buy offer
- Ask: Lowest sell offer
- Spread: Difference between bid and ask
- Tight spread = liquid market

**Market Depth:**
- Total tokens available at each price
- Indicates liquidity
- Shows support/resistance levels

### Technical Indicators

**VWAP (Volume-Weighted Average Price):**
- Fair market price indicator
- Weighted by trading volume
- Updated with each trade
- Used by risk oracle

**Trading Volume:**
- Total tokens traded
- Indicates market activity
- Higher volume = more liquid
- Tracked per epoch for contests

### Market Sentiment

**Bullish Indicators:**
- Increasing buy volume
- Rising VWAP
- Dividend announcements
- Positive campaign updates

**Bearish Indicators:**
- Increasing sell pressure
- Declining VWAP
- Negative news
- Producer inactivity

## Trading Contests

### Overview

Compete for rewards by trading:
- Epoch-based contests (typically 7 days)
- Rewards based on buy volume
- Minimum threshold to qualify
- Pro-rata reward distribution

### How to Participate

1. **Trade during contest epoch**
2. **Buy tokens** (only buy volume counts)
3. **Meet minimum threshold**
4. **Claim rewards** after epoch ends

**Rewards:**
- 40% of trading fees go to contests
- Distributed proportionally to buy volume
- Claimed through Contest contract

### Strategy Tips

✅ **Maximize rewards:**
- Focus on buy volume
- Time trades strategically
- Consider fee costs
- Track epoch timing

❌ **Avoid:**
- Wash trading (prohibited and monitored)
- Trading just for contests
- Ignoring actual token value

## Tax Implications

**Important:** Trading has tax consequences:

**Taxable Events:**
- Selling tokens (capital gains/losses)
- Buying tokens (cost basis established)
- Receiving dividends (income)
- Using tokens as collateral (possibly)

**Record Keeping:**
- Track all trades
- Note purchase prices
- Record sale prices
- Calculate gains/losses
- Consult tax professional

## Frequently Asked Questions

**Q: When can I start trading my tokens?**
A: Immediately after the campaign graduates and tokens are distributed.

**Q: Is there a minimum trade size?**
A: No platform minimum, but consider gas fees for small trades.

**Q: Can I cancel a trade after accepting an offer?**
A: No, trades are atomic and irreversible once confirmed.

**Q: What if no one buys my tokens?**
A: You can lower your price, wait for market conditions to improve, or cancel your offer.

**Q: Are there trading hours?**
A: No, the marketplace operates 24/7 on the blockchain.

**Q: Can I trade tokens from multiple campaigns?**
A: Yes, each graduated campaign has its own tradable token.

## Related Resources

- [Marketplace Overview](trading/marketplace.md)
- [Creating Offers](trading/creating-offers.md)
- [Trading Contests](trading/contests.md)
- [Risk Management](trading/risk-management.md)
- [Price Discovery](tokenomics/price-oracle.md)

---

**Need Help?**

If you have questions about trading, contact our support team at support@redcarpethq.org.
