# Dividend Distribution

Share your film's revenue with token holders through RedCarpetHQ's dividend system.

## Overview

The DividendDistributor contract allows producers to distribute USDC to token holders based on blockchain snapshots.

### Key Features

- **Snapshot-Based**: Fair distribution using ERC20 snapshots
- **Multi-Round**: Create multiple dividend rounds over time
- **Pro-Rata**: Each holder receives proportional to their balance
- **Claim-Based**: Holders claim their dividends (gas-efficient)
- **Transparent**: All distributions on-chain and verifiable

## How Dividends Work

### Distribution Flow

```
┌─────────────────────────────────────────┐
│  Step 1: Producer Creates Round         │
│  - Deposits USDC to contract            │
│  - Specifies total amount               │
│  - Round created (inactive)             │
└─────────────┬───────────────────────────┘
              │
              ▼
┌─────────────────────────────────────────┐
│  Step 2: Take Snapshot                  │
│  - Captures all token holders           │
│  - Records balances at block            │
│  - Includes vault depositors            │
└─────────────┬───────────────────────────┘
              │
              ▼
┌─────────────────────────────────────────┐
│  Step 3: Activate Round                 │
│  - Snapshot ID recorded                 │
│  - Claims enabled                       │
│  - Holders notified                     │
└─────────────┬───────────────────────────┘
              │
              ▼
┌─────────────────────────────────────────┐
│  Step 4: Holders Claim                  │
│  - Calculate share                      │
│  - Claim USDC                           │
│  - Receive payment                      │
└─────────────────────────────────────────┘
```

### Calculation Formula

```
Holder Dividend = (Holder Balance / Total Supply) × Total Dividend

Example:
Total Supply: 1,000,000 tokens
Holder Balance: 50,000 tokens (5%)
Total Dividend: $10,000

Holder Dividend = (50,000 / 1,000,000) × $10,000
                = 0.05 × $10,000
                = $500
```

## Creating Dividend Rounds

### Prerequisites

**Authorization:**
- Must be campaign creator
- Or whitelisted distributor
- Graduated token only

**Funds:**
- USDC for distribution
- USDC for gas fees
- Approve DividendDistributor contract

### Step-by-Step Process

#### 1. Prepare USDC

```
Amount to distribute: $10,000 USDC
Gas buffer: ~$10 USDC
Total needed: $10,010 USDC

Approve DividendDistributor:
- Contract address: [from platform]
- Amount: $10,000 USDC
```

#### 2. Create Round

**Via Platform:**
1. Navigate to campaign management
2. Click "Dividend" tab
3. Click "Create New Round"
4. Enter amount: 10,000 USDC
5. Review details
6. Confirm transaction
7. Wait for confirmation

**Transaction:**
```
Function: createDividendRound(tokenAddress, amount)
Gas: ~150,000 gas
Result: Round ID assigned
Status: Inactive (awaiting snapshot)
```

#### 3. Take Snapshot

**Timing Considerations:**
- Announce snapshot in advance
- Give holders time to prepare
- Consider market conditions
- Avoid surprise snapshots

**Execute Snapshot:**
1. Campaign management dashboard
2. Select dividend round
3. Click "Take Snapshot"
4. Confirm transaction
5. Snapshot ID recorded

**What's Captured:**
- All token holder addresses
- Balance of each holder
- Total supply at that block
- Timestamp
- Block number

**Includes:**
- Direct token holders
- Vault depositors (via snapshot)
- All addresses with balance > 0

#### 4. Activate Round

**After Snapshot:**
1. Review snapshot data
2. Verify total supply
3. Click "Activate Round"
4. Confirm transaction
5. Claims enabled

**Activation Effects:**
- Holders can claim
- Snapshot locked
- Distribution begins
- Notifications sent

### Round Information

**Stored Data:**
```
Round ID: 1
Token: 0x123...
Total Amount: 10,000 USDC
Snapshot ID: 42
Snapshot Time: 2025-02-15 12:00:00 UTC
Total Supply: 1,000,000 tokens
Status: Active
Total Claimed: 2,500 USDC (25%)
Remaining: 7,500 USDC (75%)
```

## Claiming Dividends

### For Token Holders

#### Check Eligibility

**Requirements:**
- Held tokens at snapshot time
- Balance > 0
- Round is active
- Haven't claimed yet

**Check Your Share:**
```
Your Balance: 50,000 tokens
Total Supply: 1,000,000 tokens
Your Share: 5%

Total Dividend: $10,000
Your Dividend: $500
```

#### Claim Process

**Via Platform:**
1. Visit campaign page
2. Navigate to "Dividends" section
3. See available rounds
4. Click "Claim" on eligible round
5. Review amount
6. Confirm transaction
7. Receive USDC

**Transaction:**
```
Function: claimDividend(tokenAddress, roundId)
Gas: ~80,000 gas
Result: USDC transferred to wallet
Status: Claimed (cannot claim again)
```

#### Claim Timing

**No Deadline:**
- Claim anytime after activation
- No expiration
- Funds held indefinitely
- Your USDC is safe

**Best Practices:**
- Claim when gas is low
- Batch with other transactions
- No rush if gas is high

### Claim Status

**Check If Claimed:**
```
Round ID: 1
Your Address: 0x456...
Status: Claimed ✅
Amount Received: $500
Claim Time: 2025-02-16 08:30:00 UTC
Transaction: 0x789...
```

**If Not Claimed:**
```
Round ID: 1
Your Address: 0x456...
Status: Unclaimed ⏳
Amount Available: $500
Action: Click "Claim" button
```

## Multiple Rounds

### Creating Multiple Distributions

**Use Cases:**
- Quarterly revenue sharing
- Milestone payments
- Box office distributions
- Streaming revenue
- Merchandise sales

**Example Timeline:**
```
Round 1: Initial Box Office (Month 1)
- $10,000 distributed

Round 2: Streaming Rights (Month 6)
- $25,000 distributed

Round 3: International Sales (Month 12)
- $15,000 distributed

Round 4: Merchandise (Month 18)
- $5,000 distributed

Total: $55,000 distributed over 18 months
```

### Round Management

**Tracking:**
- Round IDs sequential (1, 2, 3...)
- Each round independent
- Separate snapshots
- Individual claim status

**Historical Data:**
```
Token: FRONTIER
Total Rounds: 4
Total Distributed: $55,000
Total Claimed: $52,000 (94.5%)
Unclaimed: $3,000 (5.5%)
Unique Claimers: 847 addresses
```

## Advanced Features

### Whitelisted Distributors

**Purpose:**
- Delegate distribution rights
- Production company
- Financial manager
- Trusted partner

**Setup:**
1. Creator calls `whitelistDistributor()`
2. Specifies address
3. Confirms transaction
4. Address can create rounds

**Use Case:**
```
Producer: 0x111...
Production Company: 0x222...
Financial Manager: 0x333...

Whitelist both:
- Production company handles distributions
- Financial manager creates rounds
- Producer maintains oversight
```

### Emergency Withdrawal

**When Needed:**
- Round created by mistake
- Wrong amount deposited
- Need to cancel distribution
- Emergency situations

**Requirements:**
- Must be creator
- Round not yet activated
- No claims processed

**Process:**
1. Contact support
2. Verify ownership
3. Emergency withdrawal function
4. USDC returned to creator

### Snapshot Strategies

**Announced Snapshots:**
```
Announcement: "Snapshot in 7 days"
Benefits:
- Holders can prepare
- Buy tokens before snapshot
- Fair warning
- Transparent process

Risks:
- Price manipulation
- Temporary buying pressure
- Snapshot gaming
```

**Surprise Snapshots:**
```
Announcement: "Snapshot taken yesterday"
Benefits:
- No manipulation
- True holder distribution
- Fair to long-term holders

Risks:
- Some holders miss out
- Less transparent
- Potential complaints
```

**Best Practice: Hybrid**
```
Announcement: "Snapshot within next 30 days"
- Gives general timeframe
- Reduces manipulation
- Fair warning
- Maintains flexibility
```

## Tax Considerations

### For Producers

**Distributions as Expenses:**
- May be deductible
- Consult tax advisor
- Keep records
- Document purpose

**Reporting:**
- Track all distributions
- Recipient addresses
- Amounts and dates
- Tax forms (if required)

### For Token Holders

**Dividend Income:**
- May be taxable
- Depends on jurisdiction
- Consult tax advisor
- Keep claim records

**Record Keeping:**
- Claim transactions
- Amounts received
- Dates and times
- Tax documentation

## Best Practices

### For Producers

**Planning:**
- ✅ Announce distributions in advance
- ✅ Set clear expectations
- ✅ Communicate revenue sources
- ✅ Be transparent about amounts

**Timing:**
- ✅ Regular schedule (if possible)
- ✅ After revenue received
- ✅ Consider market conditions
- ✅ Coordinate with updates

**Communication:**
- ✅ Explain distribution source
- ✅ Share financial updates
- ✅ Thank supporters
- ✅ Build community trust

**Legal:**
- ✅ Consult legal advisor
- ✅ Comply with regulations
- ✅ Avoid securities issues
- ✅ Document everything

### For Token Holders

**Preparation:**
- ✅ Hold tokens in wallet (not exchange)
- ✅ Monitor announcements
- ✅ Understand snapshot timing
- ✅ Keep gas funds ready

**Claiming:**
- ✅ Claim when gas is low
- ✅ Verify amounts
- ✅ Keep records
- ✅ Report for taxes

**Security:**
- ✅ Verify contract addresses
- ✅ Use official platform
- ✅ Beware of scams
- ✅ Never share private keys

## Common Questions

**Q: Do I need to claim immediately?**  
A: No, claims never expire. Claim when convenient.

**Q: What if I sell tokens after snapshot?**  
A: You still receive dividends. Snapshot is permanent.

**Q: Can I claim for someone else?**  
A: No, only the holder at snapshot can claim.

**Q: What if I held tokens in vault?**  
A: Vault depositors are included in snapshots.

**Q: How often are dividends distributed?**  
A: Depends on producer. No fixed schedule.

**Q: Are dividends guaranteed?**  
A: No, depends on film revenue. Not guaranteed.

**Q: What if round is never activated?**  
A: Creator can withdraw funds via emergency function.

**Q: Can I see who claimed?**  
A: Yes, all claims are on-chain and public.

**Q: What if I lose access to wallet?**  
A: Funds lost. Always secure your wallet.

**Q: Are there fees to claim?**  
A: Only gas fees. No platform fees.

## Troubleshooting

**"Not Eligible" Error:**
- Check if you held tokens at snapshot
- Verify snapshot time
- Confirm token address
- Check if already claimed

**"Round Not Active" Error:**
- Round not yet activated
- Wait for producer to activate
- Check round status

**Transaction Failed:**
- Insufficient gas
- Already claimed
- Round ended
- Contract paused

**Wrong Amount Displayed:**
- Verify snapshot balance
- Check total supply
- Recalculate manually
- Contact support if error

---

**Next Steps:**
- [Understand Fee Structure →](fees.md)
- [Learn About Lending →](lending-borrowing.md)
- [Explore Trading →](../trading/marketplace.md)
