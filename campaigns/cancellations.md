# Cancellations & Refunds

## Overview

Understanding the cancellation and refund process is crucial for both producers and supporters on RedCarpetHQ. This guide explains when and how campaigns can be cancelled, and how refunds work.

## Campaign Cancellation

### Who Can Cancel?

**Producers can cancel their campaign if:**
- The campaign is still in the Active state (before deadline)
- They have a valid reason (explained to supporters)

**Screeners can cancel a campaign if:**
- The campaign violates platform rules
- The campaign contains fraudulent or misleading information
- The producer violates Terms of Service

**Platform can cancel if:**
- Legal issues arise (copyright, trademark violations)
- Security concerns are identified
- Smart contract vulnerabilities are detected

### How to Cancel Your Campaign

As a producer, you can cancel your campaign through the campaign management dashboard:

1. Navigate to your campaign page
2. Click "Manage Campaign"
3. Select "Cancel Campaign"
4. Provide a reason for cancellation
5. Confirm the cancellation

**Important:** Cancellation is irreversible. Once cancelled, the campaign cannot be reactivated.

## Refund Process

### Automatic Refunds

When a campaign is cancelled or fails to reach its goal:

**For Active Campaigns:**
- Supporters can burn their tokens to receive their USDC back
- Refunds are processed automatically through smart contracts
- No fees are charged for refunds from cancelled/failed campaigns

**For Failed Campaigns:**
- Campaigns that don't reach their goal by the deadline
- Grace period expires without reaching the goal
- Supporters can claim refunds by burning tokens

### How to Claim a Refund

1. **Visit the campaign page**
2. **Connect your wallet** (the one you used to support the campaign)
3. **Click "Claim Refund"** or "Burn Tokens for Refund"
4. **Confirm the transaction** in your wallet
5. **Receive USDC** back to your wallet

### Refund Timeline

- **Immediate availability:** Refunds are available as soon as a campaign is cancelled or fails
- **No time limit:** You can claim your refund at any time (though we recommend doing so promptly)
- **Gas fees:** You'll need to pay gas fees for the refund transaction

## Partial Refunds

### When Partial Refunds Occur

Partial refunds may occur in specific situations:

**Producer Withdrawal:**
- If a producer has already withdrawn some funds before cancellation
- Remaining funds are distributed proportionally to supporters

**No Fee Deductions:**
- No platform fees are deducted from refunds
- You receive the full proportional amount of your contribution

### Calculating Your Refund

```
Your Refund = (Your Token Balance / Total Token Supply) × Available USDC in Campaign
```

## Special Cases

### Graduated Campaigns

**Important:** Once a campaign graduates (successfully completes), refunds are no longer available:
- Tokens become tradable assets
- Funds are released to the producer
- You can sell tokens on the marketplace instead

### Campaigns with Dividends

If a campaign has distributed dividends before cancellation:
- Dividend payments are not refunded
- You keep any dividends you've already claimed
- Refund is based on your original contribution minus any dividends

### Borrowed Against Tokens

If you've borrowed USDC using your campaign tokens as collateral:
- You must repay your loan before claiming a refund
- The vault will automatically deduct outstanding debt
- Remaining balance is refunded to you

## Fees and Costs

### Platform Fees

**No fees for:**
- Refunds from cancelled campaigns (producer or screener initiated)
- Refunds from failed campaigns
- Refunds from campaigns that violate ToS

**No platform fees apply:**
- Full refunds for supporters
- No deductions from refund amounts (except gas fees)

### Gas Fees

- You always pay gas fees for blockchain transactions
- Refund transactions require gas (typically small amount)
- Consider gas prices when claiming refunds

## Producer Responsibilities

### Before Cancelling

**Communicate with supporters:**
- Explain why you're cancelling
- Post an update on the campaign page
- Respond to supporter questions

**Consider alternatives:**
- Can you adjust your campaign goal?
- Can you extend the timeline?
- Can you modify your project scope?

### After Cancelling

**Follow-up:**
- Send a final update to supporters
- Provide information about refund process
- Maintain transparency about next steps

**Future campaigns:**
- Cancelled campaigns may affect your reputation
- Screeners may scrutinize future applications more carefully
- Build trust by handling cancellations professionally

## Supporter Rights

### Your Rights When a Campaign is Cancelled

- **Full refund** of your contribution (minus any dividends received)
- **Transparent communication** about why the campaign was cancelled
- **Timely access** to refund mechanisms
- **Support** from the platform if issues arise

### What to Do If You Can't Claim Your Refund

1. **Check your wallet connection** - Ensure you're using the correct wallet
2. **Verify token balance** - Confirm you hold the campaign tokens
3. **Check for outstanding loans** - Repay any borrowed amounts
4. **Contact support** - Reach out if technical issues persist

## Dispute Resolution

### If You Disagree with a Cancellation

**For supporter-initiated disputes:**
- Contact the producer directly first
- Escalate to platform support if unresolved
- Provide evidence and documentation

**For producer-initiated disputes:**
- If a screener cancelled your campaign unfairly
- Contact support with your case
- Provide evidence of compliance with rules

### Mediation Process

1. Submit a dispute through the support system
2. Provide all relevant information and evidence
3. Platform reviews the case (typically 5-7 business days)
4. Decision is communicated to all parties
5. Appeals may be possible in certain cases

## Best Practices

### For Producers

✅ **Do:**
- Communicate early if you're considering cancellation
- Provide clear, honest reasons for cancellation
- Process refunds promptly
- Learn from the experience for future campaigns

❌ **Don't:**
- Cancel without communicating with supporters
- Cancel repeatedly (damages reputation)
- Withdraw funds then cancel
- Ignore supporter questions

### For Supporters

✅ **Do:**
- Claim refunds promptly when available
- Keep records of your contributions
- Understand the refund process before supporting
- Reach out to support if you need help

❌ **Don't:**
- Wait indefinitely to claim refunds
- Lose access to your wallet
- Panic if a campaign is cancelled
- Harass producers (use proper channels)

## Tax Implications

**Important:** Refunds may have tax implications depending on your jurisdiction:

- Refunds are generally not taxable (you're getting your money back)
- Dividends received before refund may be taxable
- Consult a tax professional for your specific situation
- Keep records of all transactions

## Technical Details

### Smart Contract Refund Mechanism

```solidity
// Simplified refund process
1. User calls burnForRefund(tokenAmount)
2. Contract burns user's tokens
3. Contract calculates refund: (tokenAmount / totalSupply) × availableUSDC
4. Contract transfers USDC to user
5. Event emitted for tracking
```

### Security Considerations

- Refunds are processed through audited smart contracts
- No centralized party can block your refund
- Blockchain ensures transparency and fairness
- All refund transactions are publicly verifiable

## Frequently Asked Questions

**Q: How long does it take to receive my refund?**
A: Refunds are instant once the transaction is confirmed on the blockchain (typically 1-2 minutes).

**Q: Can I get a refund if the campaign succeeded?**
A: No, once a campaign graduates, refunds are no longer available. You can sell your tokens on the marketplace instead.

**Q: What if I lost access to my wallet?**
A: Unfortunately, we cannot help recover lost wallets. Your tokens and refund rights are tied to your wallet's private keys.

**Q: Are there any fees for refunds?**
A: No platform fees for refunds from cancelled/failed campaigns, but you pay gas fees for the blockchain transaction.

**Q: Can I get a partial refund?**
A: You can burn any amount of your tokens for a proportional refund, but this is only available for cancelled/failed campaigns.

## Related Resources

- [Campaign Lifecycle](campaigns/campaign-lifecycle.md)
- [Managing Campaigns](campaigns/managing-campaigns.md)
- [Terms of Service](legal/terms-of-service.md)
- [FAQ](support/faq.md)
- [Contact Support](support/contact.md)

---

**Need Help?**

If you have questions about cancellations or refunds, contact our support team at support@redcarpethq.com.
