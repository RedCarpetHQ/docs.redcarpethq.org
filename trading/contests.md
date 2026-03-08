# Trading Contests

## Overview

RedCarpetHQ runs epoch-based trading contests that reward active traders with a share of trading fees. Contests incentivize market activity and liquidity while distributing value back to the community.

## How Contests Work

### Epoch System

**Contest Periods:**
- Typically 7-day epochs (currently set to 5 minutes on Base Sepolia testnet)
- Start/end times announced
- Automatic rollover to next epoch
- Continuous participation

**Tracking:**
- Buy volume tracked per user
- Only buy-side volume counts
- Cumulative across all tokens
- Real-time leaderboard

### Reward Pool

**40% of trading fees go to contests:**

**Example:**
- Total trading fees in epoch: $10,000
- Contest pool: $4,000 (40%)
- Distributed to qualifying traders

**Distribution:**
- Pro-rata based on buy volume
- Minimum threshold required
- Claimed after epoch ends

## Participation

### How to Participate

1. **Trade during contest epoch**
2. **Buy campaign tokens** (only buys count)
3. **Accumulate volume**
4. **Meet minimum threshold**
5. **Claim rewards** after epoch

**No registration required** - automatic participation

### Minimum Threshold

**Qualification Requirements:**
- Minimum buy volume per epoch
- Prevents spam and dust trades
- Threshold announced per epoch
- Typically $100-$500 in volume

**Example:**
- Minimum threshold: $500
- Your buy volume: $1,000
- Status: ✅ Qualified

### Volume Calculation

**What Counts:**
- Buy transactions on marketplace
- USDC spent (excluding fees)
- All campaign tokens combined
- Verified trades only

**What Doesn't Count:**
- Sell transactions
- Cancelled offers
- Wash trades
- Suspicious activity

## Rewards Distribution

### Pro-Rata Calculation

```
Your Reward = (Your Buy Volume / Total Qualified Volume) × Contest Pool
```

**Example:**
- Contest pool: $4,000
- Total qualified volume: $100,000
- Your buy volume: $5,000
- Your reward: $200 (5% of pool)

### Claiming Rewards

**After Epoch Ends:**
1. Navigate to Contests page
2. View your rewards
3. Click "Claim Rewards"
4. Confirm transaction
5. Receive USDC

**Timing:**
- Claim anytime after epoch ends
- No expiration on claims
- Gas fees apply
- Instant payout

### Multiple Epochs

**Participate in multiple contests:**
- Each epoch independent
- Rewards accumulate
- Claim individually or batch
- Historical tracking available

## Contest Strategy

### Maximizing Rewards

✅ **Effective Strategies:**
- Focus on buy volume
- Time trades strategically
- Spread across epoch
- Monitor leaderboard
- Calculate ROI vs. fees

**ROI Consideration:**
```
Net Profit = Contest Reward - Trading Fees Paid
Trading Fees = Buy Volume × 2.5%
```

**Example:**
- Buy volume: $10,000
- Trading fees paid: $250
- Contest reward: $400
- Net profit: $150

### Common Mistakes

❌ **Avoid:**
- Trading just for contests (ignore value)
- Wash trading (prohibited)
- Last-minute volume dumps
- Ignoring fee costs
- Chasing losses

## Anti-Manipulation

### Wash Trading Detection

**Monitored Patterns:**
- Same-address trading
- Circular transactions
- Suspicious timing
- Volume manipulation
- Coordinated activity

**Consequences:**
- Disqualification from contest
- Rewards forfeited
- Risk tier downgrade
- Potential account suspension

### Fair Play Rules

**Prohibited Activities:**
- Wash trading
- Sybil attacks
- Market manipulation
- Collusion
- Bot abuse

**Enforcement:**
- Automated detection
- Manual review
- Community reporting
- Transparent penalties

## Leaderboard

### Real-Time Tracking

**View Current Standings:**
- Your rank
- Your buy volume
- Top traders (anonymized)
- Total contest pool
- Time remaining

**Information Displayed:**
- Wallet address (truncated)
- Buy volume
- Estimated reward
- Qualification status

### Privacy

**Anonymization:**
- Addresses truncated
- No personal information
- Opt-out available
- Blockchain transparency maintained

## Contest Types

### Standard Contests

**Regular epochs:**
- Regular 7-day periods (currently 5 minutes on testnet)
- Consistent rules
- Predictable timing
- Standard reward pool
- All tokens eligible

### Special Events

**Occasional special contests:**
- Higher reward pools
- Specific tokens featured
- Bonus multipliers
- Limited time events

**Announcements:**
- Twitter notifications
- Website banners
- Email updates (if subscribed)

## Tax Implications

**Contest rewards are taxable:**

**Considerations:**
- Rewards = income
- Report on tax returns
- Track all claims
- Consult tax professional

**Record Keeping:**
- Claim amounts
- Claim dates
- Transaction hashes
- USD values

## Technical Details

### Contest Contract

**Key Functions:**
```solidity
// Track buy volume
function addBuyVolume(
    address token,
    address trader,
    uint128 volume
) external;

// Claim rewards
function claim(
    address token,
    uint32 epoch
) external;

// View rewards
function getClaimableAmount(
    address token,
    address trader,
    uint32 epoch
) external view returns (uint256);
```

### Integration

**Connected Systems:**
- Market contract (volume tracking)
- FeeDistributor (reward funding)
- RiskOracle (wash trade detection)

## Best Practices

### For Traders

✅ **Do:**
- Calculate fee costs vs. rewards
- Trade tokens you believe in
- Spread volume across epoch
- Monitor qualification status
- Claim rewards promptly

❌ **Don't:**
- Trade solely for contests
- Engage in wash trading
- Ignore market fundamentals
- Overlook fee costs
- Wait too long to claim

### Risk Management

**Protect Yourself:**
- Don't overextend for contests
- Maintain trading discipline
- Consider market conditions
- Track your P&L
- Set volume limits

## Frequently Asked Questions

**Q: Do sell transactions count for contests?**
A: No, only buy volume counts toward contest rewards.

**Q: Can I participate in multiple epochs?**
A: Yes, each epoch is independent and you can participate in all of them.

**Q: What if I don't meet the minimum threshold?**
A: You won't qualify for rewards that epoch, but you can try again next epoch.

**Q: When can I claim my rewards?**
A: Anytime after the epoch ends. Rewards don't expire.

**Q: Are contest rewards taxable?**
A: Yes, contest rewards are typically taxable income. Consult a tax professional.

**Q: Can I see other traders' volumes?**
A: Yes, the leaderboard shows anonymized wallet addresses and their volumes.

**Q: What happens if wash trading is detected?**
A: Disqualification from contest, reward forfeiture, and potential account penalties.

## Related Resources

- [Marketplace Overview](trading/marketplace.md)
- [Token Trading](tokenomics/trading.md)
- [Fee Distribution](business-logic/fee-distribution.md)
- [Risk Management](trading/risk-management.md)

---

**Need Help?**

If you have questions about trading contests, contact our support team at support@redcarpethq.org.
