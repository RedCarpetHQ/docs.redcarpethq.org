# Price Discovery & Oracle

## Overview

RedCarpetHQ uses a sophisticated price oracle system to track fair market prices for campaign tokens. Understanding how price discovery works is essential for trading, lending, and risk management.

## VWAP Oracle System

### What is VWAP?

**Volume-Weighted Average Price (VWAP)** is a trading benchmark that gives the average price a token has traded at throughout the day, based on both volume and price.

```
VWAP = Σ(Price × Volume) / Σ(Volume)
```

**Why VWAP over TWAP?**
- More resistant to manipulation
- Reflects actual market activity
- Volume-driven protocol alignment
- Better represents true market sentiment

### How It Works

**Update Mechanism:**
1. Trade occurs on marketplace
2. Price and volume recorded
3. VWAP calculation updated
4. Oracle price refreshed
5. Risk tier assessment triggered

**Lazy Update:**
- Updates triggered by trades
- No continuous polling
- Gas-efficient design
- Real-time when market active

## Price Tracking

### Current Price

**Displayed on:**
- Campaign token pages
- Trading interface
- Portfolio views
- Market analytics

**Components:**
- Last trade price
- Current VWAP
- 24h high/low
- Trading volume
- Price change %

### Historical Data

**Available metrics:**
- Price charts (1h, 24h, 7d, 30d, all time)
- Volume charts
- VWAP trends
- Trade history
- Holder distribution changes

### Price Staleness

**Staleness Detection:**
- Tracks time since last trade
- Flags stale prices
- Affects risk tier
- Impacts collateral factors

**Staleness Thresholds:**
- Fresh: < 15 minutes
- Moderate: 1 - 3 days
- Stale: > 3 days
- Very stale: > 7 days

**Impact:**
- Stale prices increase risk tier
- Lower collateral factors
- Higher interest rates
- Potential liquidation risk

## Risk Tier System

### Tier Determination

The RiskOracle assesses tokens into risk tiers:

**GREEN (Low Risk):**
- Recent price updates (< 24h)
- Healthy trading volume
- Low vault utilization
- No wash trading detected
- Stable price action

**YELLOW (Medium Risk):**
- Moderate price staleness (1-3 days)
- Moderate trading volume
- Medium vault utilization
- Some volatility
- Minor concerns

**RED (High Risk):**
- Stale prices (> 3 days)
- Low/no trading volume
- High vault utilization
- Wash trading suspected
- High volatility or manipulation

### Risk Factors Assessed

**1. Price Staleness**
- Time since last trade
- Update frequency
- Market activity level

**2. Vault Utilization**
- Total borrowed vs. deposited
- Utilization percentage
- Liquidation risk

**3. Wash Trading Detection**
- Suspicious trading patterns
- Same-address trading
- Circular transactions
- Volume manipulation

**4. Market Health**
- Trading volume trends
- Price volatility
- Holder concentration
- Liquidity depth

## Impact on DeFi

### Collateral Factors

Risk tier determines borrowing power:

| Risk Tier | Collateral Factor | Max LTV |
|-----------|------------------|---------|
| GREEN     | 75%              | 75%     |
| YELLOW    | 60%              | 60%     |
| RED       | 40%              | 40%     |

**Example:**
- You deposit 1,000 tokens worth $1,500
- GREEN tier: Borrow up to $1,125 (75%)
- YELLOW tier: Borrow up to $900 (60%)
- RED tier: Borrow up to $600 (40%)

### Interest Rates

Risk tier affects interest distribution:

**Lender Interest (from 12% base):**
- GREEN: 4% to lenders
- YELLOW: 6% to lenders
- RED: 10% to lenders

**Stability Pool:**
- GREEN: 6% to stability pool
- YELLOW: 9% to stability pool
- RED: 15% to stability pool

**Safety Reserves:**
- GREEN: 90% to reserves
- YELLOW: 85% to reserves
- RED: 75% to reserves

### Liquidation Risk

**Price drops trigger liquidations:**

1. Token price decreases
2. Collateral value drops
3. LTV exceeds maximum
4. Position becomes underwater
5. Liquidation triggered
6. Collateral sold to repay debt

**Protection:**
- Monitor your LTV ratio
- Maintain buffer below max LTV
- Add collateral if price drops
- Repay debt to reduce risk

## Price Manipulation Prevention

### Anti-Manipulation Measures

**1. VWAP Weighting**
- Volume-weighted calculations
- Harder to manipulate than simple averages
- Requires significant capital to move

**2. Wash Trading Detection**
- Pattern recognition
- Same-address monitoring
- Circular transaction detection
- Automatic risk tier increase

**3. Minimum Volume Thresholds**
- Contest participation requires real volume
- Low-volume trades flagged
- Suspicious patterns investigated

**4. Time-Weighted Factors**
- Recent trades weighted more
- Historical data considered
- Prevents single-trade manipulation

### Penalties for Manipulation

**Consequences:**
- Risk tier downgrade to RED
- Reduced collateral factors
- Contest disqualification
- Potential account suspension
- Legal action if warranted

## Using Price Data

### For Traders

**Make informed decisions:**
- Check VWAP before trading
- Compare offer prices to VWAP
- Identify overpriced/underpriced offers
- Track price trends
- Monitor volume patterns

**Trading strategies:**
- Buy below VWAP, sell above
- Wait for volume confirmation
- Avoid stale-price tokens
- Consider risk tier changes

### For Lenders

**Assess lending risk:**
- Check token risk tier
- Review price stability
- Evaluate trading volume
- Monitor staleness
- Consider collateral factors

**Risk management:**
- Prefer GREEN tier tokens
- Diversify across tokens
- Monitor utilization rates
- Track price trends

### For Borrowers

**Optimize borrowing:**
- Use GREEN tier tokens for max LTV
- Monitor price for liquidation risk
- Maintain healthy LTV buffer
- Track risk tier changes
- Plan for price volatility

## Technical Implementation

### HybridPriceOracle Contract

```solidity
// Simplified oracle structure
contract HybridPriceOracle {
    struct PriceData {
        uint256 vwap;
        uint256 lastUpdate;
        uint256 volume24h;
        bool isStale;
    }
    
    // Update VWAP externally triggered via trade
    function updatePrice(
        address asset,
        uint256 priceWad,
        uint256 volumeWad
    ) external;
    
    // Get current price
    function getPrice(address token) 
        external view returns (uint256);
    
    // Check staleness
    function isPriceStale(address token) 
        external view returns (bool);
}
```

### Integration Points

**Connected contracts:**
- Market: Triggers price updates
- UnifiedVault: Uses prices for collateral
- RiskOracle: Assesses risk tiers
- Contest: Validates trading volume
- DividendDistributor: May use for valuations

## Best Practices

### For All Users

✅ **Do:**
- Check VWAP before trading
- Monitor risk tier changes
- Understand price staleness
- Use price data for decisions
- Track historical trends

❌ **Don't:**
- Ignore stale price warnings
- Rely solely on last trade price
- Attempt price manipulation
- Overlook risk tier impacts
- Trade without checking VWAP

### For Developers

**Integrating price data:**
- Use oracle for fair prices
- Handle stale prices gracefully
- Implement fallback mechanisms
- Monitor oracle health
- Respect update patterns

## Frequently Asked Questions

**Q: How often is VWAP updated?**
A: VWAP updates with each trade. No trades = no updates.

**Q: What happens if there's no trading volume?**
A: Price becomes stale, risk tier increases, collateral factors decrease.

**Q: Can I see historical VWAP data?**
A: Yes, historical data is available on token pages and via blockchain explorers.

**Q: How is wash trading detected?**
A: Through pattern analysis, same-address detection, and circular transaction monitoring.

**Q: What if the oracle price seems wrong?**
A: The oracle reflects actual market trades. If price seems wrong, it may indicate market conditions or manipulation.

**Q: Can producers manipulate their token price?**
A: They can try, but VWAP weighting and wash trading detection make it difficult and risky.

## Related Resources

- [Token Trading](tokenomics/trading.md)
- [Risk Management](trading/risk-management.md)
- [Lending & Borrowing](finance/lending-borrowing.md)
- [Smart Contracts](technical/contracts.md)
- [Risk Tiers](business-logic/risk-tiers.md)

---

**Need Help?**

If you have questions about price discovery or the oracle system, contact our support team at support@redcarpethq.org.
