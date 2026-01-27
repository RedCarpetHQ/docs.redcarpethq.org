# Burn & Redemption

## Overview

The burn and redemption mechanism allows supporters to exchange their campaign tokens for USDC under specific circumstances. This feature is primarily used for refunds from failed or cancelled campaigns.

## When Burn & Redemption is Available

### Failed Campaigns

**Campaign doesn't reach goal:**
- Deadline passes without reaching funding goal
- Grace period expires
- Campaign officially fails
- Supporters can burn tokens for full refund

### Cancelled Campaigns

**Producer or screener cancels:**
- Producer cancels before graduation
- Screener cancels for violations
- Platform cancels for legal/security reasons
- Supporters receive proportional refunds

### Not Available

**Graduated campaigns:**
- Once campaign succeeds and graduates
- Tokens become tradable assets
- No refund mechanism
- Sell on marketplace instead

## How It Works

### Refund Calculation

```
Your Refund = (Your Tokens / Total Supply) × Available USDC
```

**Example:**
- Total raised: $100,000
- Total tokens: 100,000
- Your tokens: 1,000
- Available USDC: $100,000
- Your refund: $1,000

### Burning Process

**Step-by-step:**
1. Navigate to failed/cancelled campaign page
2. Click "Claim Refund" or "Burn for Refund"
3. Enter amount of tokens to burn (or select "All")
4. Review refund amount
5. Confirm transaction
6. Tokens burned, USDC sent to wallet

**Technical process:**
1. User calls `burnForRefund(amount)`
2. Contract burns user's tokens
3. Contract calculates proportional USDC
4. Contract transfers USDC to user
5. Event emitted for tracking

## Partial Burns

### Burn Some, Keep Some

**Flexibility:**
- Burn any amount of tokens
- Keep remaining tokens
- Multiple burn transactions allowed
- No minimum or maximum

**Why keep tokens?**
- Collectible/memorabilia value
- Future potential (if campaign revives)
- Sentimental reasons
- Speculative hold

**Example:**
- You hold: 1,000 tokens
- Burn: 500 tokens
- Keep: 500 tokens
- Refund: $500 (if 1:1 ratio)

## Fees and Costs

### No Platform Fees

**Free refunds:**
- No platform fee for refunds
- No trading fee
- No cancellation fee
- Only gas fees apply

### Gas Fees

**Blockchain costs:**
- Pay gas for burn transaction
- Typically small amount
- Varies with network congestion
- Consider when claiming small amounts

**Optimization:**
- Burn all tokens at once to save gas
- Wait for low gas prices if not urgent
- Batch with other transactions if possible

## Special Scenarios

### Dividends Already Received

**If campaign distributed dividends before cancellation:**
- Dividends are not refunded
- You keep dividends already claimed
- Refund based on original contribution minus dividends
- Fair to all supporters

**Example:**
- Original contribution: $1,000
- Dividends received: $100
- Campaign cancelled
- Refund: $900

### Borrowed Against Tokens

**If you used tokens as collateral:**
- Must repay loan first
- Vault automatically deducts debt
- Remaining balance refunded
- Cannot burn collateralized tokens

**Process:**
1. Repay outstanding loan
2. Withdraw tokens from vault
3. Burn tokens for refund
4. Receive USDC

### Tokens in Active Offers

**If tokens are in marketplace offers:**
- Cancel offers first
- Tokens returned to wallet
- Then burn for refund
- Cannot burn escrowed tokens

## Time Limits

### No Expiration

**Refunds available indefinitely:**
- No deadline to claim
- USDC held in contract
- Claim whenever convenient
- But don't wait too long

**Recommendations:**
- Claim within 30 days
- Don't lose access to wallet
- Keep track of failed campaigns
- Set reminders if needed

## Tax Implications

### Refunds Generally Not Taxable

**Tax treatment:**
- Refunds = return of capital
- Not income
- No capital gains/losses
- Original contribution returned

**Exceptions:**
- Dividends received before refund (taxable)
- Interest earned (if any)
- Consult tax professional

**Record keeping:**
- Track original contribution
- Note refund amount
- Document any dividends
- Save transaction receipts

## Smart Contract Security

### Audited Mechanism

**Security features:**
- Audited smart contract code
- No centralized control
- Transparent calculations
- Immutable logic

### Verification

**Anyone can verify:**
- Refund calculations on-chain
- Total USDC available
- Token supply
- Burn events

## Troubleshooting

### Can't Burn Tokens

**Common issues:**

**1. Tokens in vault:**
- Withdraw from vault first
- Repay any loans
- Then burn

**2. Tokens in offers:**
- Cancel marketplace offers
- Tokens return to wallet
- Then burn

**3. Wrong wallet:**
- Use wallet that holds tokens
- Check token balance
- Verify campaign address

**4. Campaign not failed/cancelled:**
- Check campaign status
- Wait for official failure/cancellation
- Cannot burn from active campaigns

### Refund Amount Seems Wrong

**Check these factors:**
- Total USDC in campaign contract
- Total token supply
- Your token balance
- Any dividends already distributed
- Producer withdrawals (if any)

**Formula verification:**
```
Expected Refund = (Your Tokens ÷ Total Supply) × Available USDC
```

### Transaction Failed

**Possible reasons:**
- Insufficient gas
- Network congestion
- Contract error
- Already burned

**Solutions:**
- Increase gas limit
- Try again later
- Check transaction on Etherscan
- Contact support if persists

## Best Practices

### For Supporters

✅ **Do:**
- Claim refunds promptly
- Verify refund amount before confirming
- Keep wallet access secure
- Save transaction records
- Understand tax implications

❌ **Don't:**
- Wait indefinitely to claim
- Lose access to your wallet
- Burn tokens from successful campaigns
- Ignore gas fees for small amounts
- Forget about failed campaigns

## Alternative Options

### Instead of Burning

**Consider these alternatives:**

**1. Keep as Collectible:**
- Tokens have no monetary value
- But may have sentimental value
- Proof of early support
- Historical record

**2. Wait for Revival:**
- Producer might relaunch
- Tokens could gain value
- Speculative hold
- Low probability

**3. Gift to Others:**
- Transfer to friends/family
- They can burn for refund
- Or keep as gift
- No value transfer

## Future Enhancements

### Planned Features

**Potential improvements:**
- Batch burn for multiple campaigns
- Automatic refund claims
- Refund notifications
- Enhanced analytics

**Community feedback:**
- Suggest improvements
- Report issues
- Share experiences
- Help others

## Frequently Asked Questions

**Q: Can I burn tokens from a successful campaign?**
A: No, burn for refund is only available for failed or cancelled campaigns.

**Q: Is there a deadline to claim my refund?**
A: No, refunds are available indefinitely, but claim promptly to avoid losing wallet access.

**Q: Do I pay fees for refunds?**
A: No platform fees, only blockchain gas fees.

**Q: What if I already received dividends?**
A: You keep the dividends, and your refund is adjusted accordingly.

**Q: Can I burn tokens that are being used as collateral?**
A: No, you must repay your loan and withdraw tokens from the vault first.

**Q: What happens to burned tokens?**
A: They are permanently destroyed (sent to zero address), reducing total supply.

## Related Resources

- [Campaign Lifecycle](campaigns/campaign-lifecycle.md)
- [Cancellations & Refunds](campaigns/cancellations.md)
- [Smart Contracts](technical/contracts.md)
- [Troubleshooting](support/troubleshooting.md)

---

**Need Help?**

If you have questions about burn and redemption, contact our support team at support@redcarpethq.com.
