# Liquidity Provision

## Overview

Liquidity provision on RedCarpetHQ is handled through the UnifiedVaultV3 system, which automatically allocates deposits across multiple pools to optimize returns and security.

## How It Works

When you deposit USDC into the UnifiedVault:

**Automatic Allocation (80/20 split):**
- **80% → Lending Pool** - Earns 12% APY from borrowers
- **20% → Stability Pool** - Earns 20% APY from liquidations

**Additional Safety:**
- **Insurance Fund** - Funded by 5% of lending interest (capped at $100k)
- **Safety Reserves** - Risk-tiered allocation for protocol security

## Providing Liquidity

### Step-by-Step Guide

1. **Connect your wallet**
2. **Navigate to Finance section**
3. **Select "Deposit USDC"**
4. **Enter amount to deposit**
5. **Approve USDC spending** (first time only)
6. **Confirm deposit transaction**
7. **Receive vault shares** (ERC-4626 tokens)

### Benefits

✅ **Simplified UX** - One deposit, multiple destinations  
✅ **Optimized Returns** - Blended APY ~13%  
✅ **Auto-Rebalancing** - Maintains optimal allocation  
✅ **ERC-4626 Standard** - Compatible with DeFi tools  
✅ **Safety Layers** - Multiple protection mechanisms

## Earning Interest

### Interest Sources

**1. Lending Interest (12% APY)**
- Borrowers pay interest on loans
- 80% of your deposit earns this rate
- Distributed continuously

**2. Stability Pool Returns (20% APY)**
- Liquidation penalties
- 20% of your deposit earns this rate
- Higher risk, higher reward

**3. Blended APY**
- Combined rate: ~13% APY
- (80% × 12%) + (20% × 20%) = 13.6%
- Actual rate varies with utilization

### Interest Distribution

**Risk-Tiered Split:**

| Risk Tier | Lenders | Stability | Reserves |
|-----------|---------|-----------|----------|
| GREEN     | 4%      | 6%        | 90%      |
| YELLOW    | 6%      | 9%        | 85%      |
| RED       | 10%     | 15%       | 75%      |

Higher risk = higher returns to compensate

## Withdrawing Liquidity

### How to Withdraw

1. **Navigate to Finance section**
2. **Select "Withdraw USDC"**
3. **Enter amount or vault shares**
4. **Confirm withdrawal**
5. **Receive USDC** back to wallet

### Withdrawal Limits

**Subject to utilization:**
- Can withdraw unused liquidity anytime
- If 100% utilized, must wait for repayments
- Partial withdrawals always possible
- No lock-up periods

**Example:**
- Total deposits: $100,000
- Total borrowed: $60,000
- Available to withdraw: $40,000

## Risks and Considerations

### Liquidity Risk

**Utilization Impact:**
- High utilization = less available to withdraw
- May need to wait for loan repayments
- Interest rates adjust to incentivize deposits

### Smart Contract Risk

**Mitigation:**
- Audited contracts
- Time-tested code
- Insurance fund protection
- Community monitoring

### Market Risk

**Token Price Volatility:**
- Collateral values fluctuate
- Liquidations may not cover debt
- Stability pool absorbs losses
- Insurance fund as backstop

## Advanced Features

### Vault Shares (ERC-4626)

**What are vault shares?**
- Represent your deposit + accrued interest
- Tradable ERC-20 tokens
- Automatically increase in value
- Redeemable for USDC

**Benefits:**
- Standard DeFi interface
- Compatible with aggregators
- Composable with other protocols
- Transparent accounting

### Capital Efficiency

**Optimized Allocation:**
- 80% actively earning from lending
- 20% earning from liquidations
- No idle capital
- Maximum returns

**Dynamic Rebalancing:**
- Maintains target ratios
- Adjusts to market conditions
- Automated by smart contracts

## Liquidity Mining (Future)

Planned incentives for liquidity providers:

**Potential Rewards:**
- Platform tokens
- Bonus APY
- Governance rights
- Fee discounts

**Stay Updated:**
- Follow announcements
- Join community channels
- Check roadmap updates

## Best Practices

### For Liquidity Providers

✅ **Do:**
- Understand the risks
- Diversify across protocols
- Monitor utilization rates
- Track your returns
- Keep some liquidity elsewhere

❌ **Don't:**
- Deposit more than you can afford to lose
- Ignore utilization warnings
- Expect instant withdrawals during high utilization
- Panic during market volatility

## Frequently Asked Questions

**Q: Is my deposit safe?**
A: Deposits are protected by audited smart contracts, insurance fund, and stability pool, but DeFi always carries risk.

**Q: Can I withdraw anytime?**
A: Yes, subject to available liquidity. If fully utilized, you may need to wait for loan repayments.

**Q: How is interest calculated?**
A: Interest accrues continuously based on utilization rate and risk tier of borrowed tokens.

**Q: What are vault shares?**
A: ERC-4626 tokens representing your deposit + interest, redeemable for USDC.

**Q: What happens if borrowers default?**
A: Liquidations repay debt. If insufficient, stability pool covers losses. Insurance fund is final backstop.

## Related Resources

- [Finance Overview](finance/overview.md)
- [Dividend Distribution](finance/dividends.md)
- [Risk Tiers](business-logic/risk-tiers.md)
- [DeFi Architecture](business-logic/defi-architecture.md)
- [Smart Contracts](technical/contracts.md)

---

**Need Help?**

If you have questions about liquidity provision, contact our support team at support@redcarpethq.com.
