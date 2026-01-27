# Risk Tiers

## Overview

RedCarpetHQ uses a three-tier risk assessment system (GREEN, YELLOW, RED) to evaluate campaign tokens and adjust DeFi parameters accordingly. Understanding risk tiers is crucial for both lenders and borrowers.

## Risk Tier System

### GREEN Tier (Low Risk)

**Characteristics:**
- Recent price updates (< 24 hours)
- Healthy trading volume
- Low vault utilization (< 70%)
- No wash trading detected
- Stable price action

**DeFi Parameters:**
- **Collateral Factor:** 75%
- **Max LTV:** 75%
- **Lender Interest:** 4%
- **Stability Pool:** 6%
- **Safety Reserves:** 90%

**Best for:**
- Conservative borrowers
- Maximum borrowing power
- Lower interest costs
- Stable collateral

### YELLOW Tier (Medium Risk)

**Characteristics:**
- Moderate price staleness (24-72 hours)
- Moderate trading volume
- Medium vault utilization (70-85%)
- Some volatility
- Minor concerns

**DeFi Parameters:**
- **Collateral Factor:** 60%
- **Max LTV:** 60%
- **Lender Interest:** 6%
- **Stability Pool:** 9%
- **Safety Reserves:** 85%

**Best for:**
- Moderate risk tolerance
- Balanced approach
- Active monitoring
- Medium-term positions

### RED Tier (High Risk)

**Characteristics:**
- Stale prices (> 72 hours)
- Low/no trading volume
- High vault utilization (> 85%)
- Wash trading suspected
- High volatility or manipulation

**DeFi Parameters:**
- **Collateral Factor:** 40%
- **Max LTV:** 40%
- **Lender Interest:** 10%
- **Stability Pool:** 15%
- **Safety Reserves:** 75%

**Best for:**
- High risk tolerance
- Short-term positions
- Speculative plays
- Close monitoring required

## Risk Assessment Factors

### 1. Price Staleness

**How it's measured:**
- Time since last trade
- Update frequency
- Market activity level

**Impact:**
- Fresh (< 24h): Positive
- Moderate (24-72h): Neutral
- Stale (> 72h): Negative
- Very stale (> 7d): High risk

### 2. Vault Utilization

**Calculation:**
```
Utilization = Total Borrowed / Total Deposited × 100%
```

**Thresholds:**
- Low (< 70%): GREEN
- Medium (70-85%): YELLOW
- High (> 85%): RED

**Why it matters:**
- High utilization = liquidity risk
- Potential for bank run
- Liquidation cascade risk
- Withdrawal limitations

### 3. Wash Trading Detection

**Monitored patterns:**
- Same-address trading
- Circular transactions
- Suspicious timing
- Volume manipulation
- Coordinated activity

**Consequences:**
- Automatic RED tier assignment
- Reduced collateral factors
- Contest disqualification
- Potential account penalties

### 4. Market Health

**Indicators:**
- Trading volume trends
- Price volatility
- Holder concentration
- Liquidity depth
- Order book balance

**Assessment:**
- Healthy market: GREEN
- Moderate concerns: YELLOW
- Unhealthy market: RED

## Impact on Users

### For Borrowers

**GREEN Tier Benefits:**
- Borrow up to 75% of collateral value
- Lower liquidation risk
- More borrowing headroom
- Better capital efficiency

**RED Tier Challenges:**
- Only 40% LTV available
- Higher liquidation risk
- Less borrowing power
- Requires more collateral

**Example:**
```
Collateral: 1,000 tokens @ $2 = $2,000

GREEN Tier:
- Max borrow: $1,500 (75%)
- Safe borrow: $1,000 (50%)

RED Tier:
- Max borrow: $800 (40%)
- Safe borrow: $400 (20%)
```

### For Lenders

**GREEN Tier:**
- Lower interest (4%)
- Lower risk
- More safety reserves
- Stable returns

**RED Tier:**
- Higher interest (10%)
- Higher risk
- Less safety reserves
- Compensates for risk

**Risk-Reward Tradeoff:**
- Higher returns come with higher risk
- Diversification recommended
- Monitor tier changes
- Adjust exposure accordingly

### For Traders

**Risk tier affects:**
- Token perception
- Trading volume
- Price volatility
- Market liquidity

**Considerations:**
- GREEN tier = more stable
- RED tier = more volatile
- Tier changes impact price
- Monitor for opportunities

## Tier Transitions

### Upgrading (RED → YELLOW → GREEN)

**Requirements:**
- Increase trading activity
- Reduce vault utilization
- Maintain stable prices
- Eliminate suspicious activity

**Timeline:**
- Continuous monitoring
- Automatic upgrades
- No manual intervention needed
- Gradual improvement

### Downgrading (GREEN → YELLOW → RED)

**Triggers:**
- Price becomes stale
- Vault utilization spikes
- Wash trading detected
- Market health deteriorates

**Timeline:**
- Immediate for wash trading
- Gradual for other factors
- Automatic downgrades
- Notification to users

## Monitoring Risk Tiers

### Check Current Tier

**On Platform:**
- Token page shows current tier
- Color-coded indicators
- Risk badge display
- Historical tier data

**On-Chain:**
- Query RiskOracleV3 contract
- View tier history
- Check assessment factors
- Verify calculations

### Tier Change Notifications

**Alert Systems:**
- Email notifications (if enabled)
- Discord announcements
- Platform notifications
- On-chain events

**What to do:**
- Review your positions
- Adjust LTV if borrowing
- Consider rebalancing
- Monitor closely

## Risk Tier Strategy

### For Conservative Users

**Preferences:**
- Stick to GREEN tier tokens
- Avoid RED tier entirely
- Monitor tier changes
- Exit positions on downgrade

**Portfolio:**
- 80%+ GREEN tier
- 20% YELLOW tier
- 0% RED tier
- Regular rebalancing

### For Aggressive Users

**Preferences:**
- Seek RED tier opportunities
- Higher risk/reward
- Active management
- Quick position changes

**Portfolio:**
- 40% GREEN tier
- 30% YELLOW tier
- 30% RED tier
- Frequent trading

### For Balanced Users

**Preferences:**
- Mix of all tiers
- Risk-adjusted returns
- Moderate monitoring
- Diversified approach

**Portfolio:**
- 50% GREEN tier
- 30% YELLOW tier
- 20% RED tier
- Monthly rebalancing

## Technical Implementation

### RiskOracleV3 Contract

```solidity
// Simplified risk assessment
contract RiskOracleV3 {
    enum RiskTier { GREEN, YELLOW, RED }
    
    function assessRisk(address token) 
        external view returns (RiskTier) {
        // Check price staleness
        // Check vault utilization
        // Check wash trading
        // Check market health
        // Return tier
    }
    
    function getCollateralFactor(address token)
        external view returns (uint256) {
        RiskTier tier = assessRisk(token);
        if (tier == RiskTier.GREEN) return 75;
        if (tier == RiskTier.YELLOW) return 60;
        return 40; // RED
    }
}
```

### Integration Points

**Connected contracts:**
- UnifiedVaultV3 (collateral factors)
- HybridPriceOracle (price staleness)
- Market (wash trading detection)
- Contest (volume validation)

## Best Practices

### For All Users

✅ **Do:**
- Check risk tier before trading/lending/borrowing
- Understand tier implications
- Monitor tier changes
- Adjust positions accordingly
- Diversify across tiers

❌ **Don't:**
- Ignore risk tier warnings
- Max out LTV on RED tier
- Assume tiers are permanent
- Panic on tier changes
- Concentrate in single tier

## Frequently Asked Questions

**Q: How often are risk tiers updated?**
A: Continuously. Tiers are reassessed with each relevant on-chain event.

**Q: Can a token jump from GREEN to RED instantly?**
A: Yes, if wash trading is detected or severe issues arise.

**Q: What happens to my loan if tier changes?**
A: Your existing loan terms don't change, but your max LTV adjusts. You may need to add collateral.

**Q: Can I see tier history?**
A: Yes, historical tier data is available on token pages and on-chain.

**Q: Who decides the risk tier?**
A: The RiskOracleV3 smart contract automatically assesses tiers based on objective criteria.

**Q: Can producers manipulate their token's tier?**
A: They can try to improve it through legitimate trading activity, but manipulation is detected and penalized.

## Related Resources

- [Price Discovery & Oracle](tokenomics/price-oracle.md)
- [Risk Management](trading/risk-management.md)
- [Finance Overview](finance/overview.md)
- [DeFi Architecture](business-logic/defi-architecture.md)
- [Smart Contracts](technical/contracts.md)

---

**Need Help?**

If you have questions about risk tiers, contact our support team at support@redcarpethq.com.
