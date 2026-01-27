# Marketplace Overview

RedCarpetHQ's marketplace enables peer-to-peer trading of campaign tokens through an escrow-based system.

## How the Marketplace Works

### Escrow-Based Trading

Unlike traditional order books, RedCarpetHQ uses an escrow system:

**Sellers:**
1. Create sell offer
2. Tokens locked in Market contract
3. Set price per token
4. Wait for buyer

**Buyers:**
1. Browse available offers
2. Choose offer to fill
3. Send USDC to Market contract
4. Receive tokens instantly

**Atomic Swaps:**
- All-or-nothing execution
- No partial fills (by default)
- Instant settlement
- No counterparty risk

### Why Escrow?

**Benefits:**
- ✅ Funds always safe
- ✅ No front-running
- ✅ Simple to understand
- ✅ Gas-efficient
- ✅ No MEV exploitation

**vs. Order Book:**
- ❌ Order books complex
- ❌ Front-running risk
- ❌ High gas costs
- ❌ Requires matching engine

## Offer Types

### Sell Offers

**Creating a Sell Offer:**

1. **Approve Tokens**
   ```
   Token: FRONTIER
   Amount: 1,000 tokens
   Approve: Market contract
   ```

2. **Create Offer**
   ```
   Type: SELL
   Token Amount: 1,000 tokens
   Price Per Token: $1.05
   Total Value: $1,050
   ```

3. **Tokens Escrowed**
   ```
   From: Your wallet
   To: Market contract
   Status: Locked until filled or cancelled
   ```

**Offer Details:**
```
Offer ID: #12345
Type: SELL
Token: FRONTIER (0x123...)
Amount: 1,000 tokens
Price: $1.05 per token
Total: $1,050 USDC
Creator: 0x456...
Created: 2025-02-15 10:30:00 UTC
Status: OPEN
```

### Buy Offers

**Creating a Buy Offer:**

1. **Approve USDC**
   ```
   Amount: $1,050 USDC
   Approve: Market contract
   ```

2. **Create Offer**
   ```
   Type: BUY
   Token Amount: 1,000 tokens
   Price Per Token: $1.00
   Total Cost: $1,000 USDC
   ```

3. **USDC Escrowed**
   ```
   From: Your wallet
   To: Market contract
   Status: Locked until filled or cancelled
   ```

**Offer Details:**
```
Offer ID: #12346
Type: BUY
Token: FRONTIER (0x123...)
Amount: 1,000 tokens
Price: $1.00 per token
Total: $1,000 USDC
Creator: 0x789...
Created: 2025-02-15 11:00:00 UTC
Status: OPEN
```

## Trading Process

### Selling Tokens

**Step-by-Step:**

1. **Check Current Market**
   - View existing buy offers
   - Check price levels
   - Assess demand

2. **Choose Strategy**
   - **Option A**: Fill existing buy offer (instant)
   - **Option B**: Create sell offer (wait for buyer)

3. **Create Sell Offer**
   ```
   Navigate: Marketplace → Create Offer
   Select: SELL
   Token: [Select your token]
   Amount: 1,000 tokens
   Price: $1.05 per token
   Review: Total = $1,050
   Approve: Token spending
   Confirm: Create offer transaction
   ```

4. **Wait for Buyer**
   - Offer appears in marketplace
   - Tokens locked in escrow
   - Receive notification when filled

5. **Receive Payment**
   ```
   Offer filled by: 0xABC...
   Tokens sent: 1,000 FRONTIER
   USDC received: $1,023.75 (after 2.5% fee)
   Fee paid: $26.25
   Transaction: 0xDEF...
   ```

### Buying Tokens

**Step-by-Step:**

1. **Browse Marketplace**
   - View available sell offers
   - Compare prices
   - Check offer sizes

2. **Choose Strategy**
   - **Option A**: Fill existing sell offer (instant)
   - **Option B**: Create buy offer (wait for seller)

3. **Fill Sell Offer**
   ```
   Navigate: Marketplace → Browse Offers
   Filter: SELL offers
   Select: Offer #12345
   Amount: 1,000 tokens @ $1.05
   Total Cost: $1,050 USDC
   Approve: USDC spending
   Confirm: Fill offer transaction
   ```

4. **Receive Tokens**
   ```
   Offer filled: #12345
   USDC sent: $1,050
   Tokens received: 1,000 FRONTIER
   Fee paid: $26.25 (included in price)
   Transaction: 0xGHI...
   ```

## Fees & Costs

### Trading Fee Structure

**Fee Rate: 2.5%**

**Example Trade:**
```
Trade Value: $1,000
Fee: $25 (2.5%)

Seller receives: $975
Buyer pays: $1,000
Fee collected: $25
```

**Fee Distribution:**
```
$25 total fee:
├─ $10 → Protocol Treasury (40%)
├─ $10 → Trading Contest (40%)
├─ $2.50 → UnifiedVault (10%)
└─ $2.50 → Producer (10%)
```

### Gas Costs

**Estimated Gas:**
```
Create Offer: ~200,000 gas
Fill Offer: ~200,000 gas
Cancel Offer: ~50,000 gas

At 50 gwei:
Create: ~$10
Fill: ~$10
Cancel: ~$2.50
```

### Fee Whitelist

Some addresses may be fee-exempt:
- Protocol operations
- Liquidity providers
- Special partnerships

**Check Status:**
```
Your address: 0x123...
Fee exempt: No
Fee rate: 2.5%
```

## Offer Management

### Viewing Your Offers

**Active Offers:**
```
Offer #12345 - SELL
Token: FRONTIER
Amount: 1,000 tokens
Price: $1.05
Status: OPEN
Created: 2 hours ago
Actions: [Cancel] [View Details]
```

**Filled Offers:**
```
Offer #12340 - SELL
Token: FRONTIER
Amount: 500 tokens
Price: $1.00
Status: FILLED
Filled: 1 day ago
Filled by: 0xABC...
```

**Cancelled Offers:**
```
Offer #12335 - BUY
Token: FRONTIER
Amount: 2,000 tokens
Price: $0.95
Status: CANCELLED
Cancelled: 3 days ago
```

### Cancelling Offers

**When to Cancel:**
- Price changed
- Don't want to trade anymore
- Created wrong amount
- Need funds back

**Process:**
1. Navigate to "My Offers"
2. Find offer to cancel
3. Click "Cancel"
4. Confirm transaction
5. Funds returned immediately

**Effect:**
```
Offer #12345 cancelled
Status: CANCELLED
Tokens returned: 1,000 FRONTIER
To: Your wallet
Transaction: 0xJKL...
```

### Modifying Offers

**Cannot Modify:**
- ❌ Price
- ❌ Amount
- ❌ Token

**Must:**
1. Cancel existing offer
2. Create new offer
3. Pay gas twice

**Tip:** Double-check before creating!

## Market Information

### Price Discovery

**VWAP Oracle:**
```
Current VWAP: $1.02
Last Update: 5 minutes ago
24h High: $1.12
24h Low: $0.95
24h Volume: $15,000
```

**Recent Trades:**
```
Trade #1: 500 tokens @ $1.05 (2 min ago)
Trade #2: 1,000 tokens @ $1.00 (15 min ago)
Trade #3: 250 tokens @ $1.08 (1 hour ago)
```

### Order Book View

**Sell Offers (Ask):**
```
Price    | Amount      | Total
---------|-------------|--------
$1.10    | 500 tokens  | $550
$1.08    | 1,000 tokens| $1,080
$1.05    | 2,000 tokens| $2,100
```

**Buy Offers (Bid):**
```
Price    | Amount      | Total
---------|-------------|--------
$1.00    | 1,500 tokens| $1,500
$0.98    | 1,000 tokens| $980
$0.95    | 3,000 tokens| $2,850
```

**Spread:**
```
Best Ask: $1.05
Best Bid: $1.00
Spread: $0.05 (5%)
```

### Market Depth

**Liquidity Analysis:**
```
Total Sell Offers: 15 offers, 10,000 tokens
Total Buy Offers: 12 offers, $8,500 USDC
Market Depth: Moderate
Slippage Risk: Low for <500 tokens
```

## Trading Strategies

### For Sellers

**Market Order (Instant):**
- Fill existing buy offer
- Immediate execution
- Accept current price
- Best for: Quick exit

**Limit Order (Wait):**
- Create sell offer above market
- Wait for buyer
- Get desired price
- Best for: Patient sellers

**Example:**
```
Current best bid: $1.00
Your strategy: Create sell offer @ $1.05
Reasoning: Willing to wait for 5% premium
Risk: May not fill if price drops
```

### For Buyers

**Market Order (Instant):**
- Fill existing sell offer
- Immediate execution
- Pay current price
- Best for: Quick entry

**Limit Order (Wait):**
- Create buy offer below market
- Wait for seller
- Get desired price
- Best for: Patient buyers

**Example:**
```
Current best ask: $1.05
Your strategy: Create buy offer @ $1.00
Reasoning: Willing to wait for 5% discount
Risk: May not fill if price rises
```

### Advanced Strategies

**Arbitrage:**
```
If: Price on RedCarpet < Price elsewhere
Then: Buy on RedCarpet, sell elsewhere
Profit: Price difference - fees - gas

Note: Requires external liquidity
```

**Market Making:**
```
Create buy offer: $1.00
Create sell offer: $1.05
Profit: $0.05 spread (if both fill)
Risk: Price moves against you
```

**Dollar Cost Averaging:**
```
Buy $100 every week
Regardless of price
Average out volatility
Long-term strategy
```

## Safety & Best Practices

### Before Trading

**Verify:**
- ✅ Correct token address
- ✅ Reasonable price
- ✅ Sufficient liquidity
- ✅ Gas fees acceptable

**Check:**
- ✅ Your wallet balance
- ✅ Approval amounts
- ✅ Offer details
- ✅ Transaction preview

### During Trading

**Be Careful:**
- ⚠️ Double-check amounts
- ⚠️ Verify prices
- ⚠️ Confirm token address
- ⚠️ Review transaction

**Avoid:**
- ❌ Trading while distracted
- ❌ Panic selling
- ❌ FOMO buying
- ❌ Ignoring fees

### After Trading

**Confirm:**
- ✅ Transaction succeeded
- ✅ Tokens/USDC received
- ✅ Correct amounts
- ✅ Update records

**Record:**
- Transaction hash
- Trade price
- Amounts
- Fees paid
- Date/time

## Troubleshooting

### Common Issues

**"Insufficient Balance"**
- Check token/USDC balance
- Account for fees
- Verify approval amount

**"Offer Not Found"**
- Offer may be filled
- Offer may be cancelled
- Refresh page

**"Price Changed"**
- Offer filled by someone else
- Create new offer
- Try different offer

**Transaction Failed**
- Insufficient gas
- Approval expired
- Offer already filled
- Network congestion

### Getting Help

**Support Channels:**
- Discord: Real-time help
- Email: support@redcarpethq.com
- Docs: [Troubleshooting](../support/troubleshooting.md)

---

**Next Steps:**
- [Learn About Creating Offers →](creating-offers.md)
- [Participate in Trading Contests →](contests.md)
- [Understand Risk Management →](risk-management.md)
