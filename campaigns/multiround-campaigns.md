# Multi-Round Campaigns

Multi-round campaigns allow producers to raise funds through up to 5 sequential funding rounds for a single project. This innovative approach provides flexibility for staged production while maintaining the all-or-nothing protection that RedCarpetHQ is known for.

## Overview

Unlike standard campaigns that run a single funding round, multi-round campaigns enable you to:

- **Raise funds in stages** aligned with your production timeline
- **Collect funds incrementally** after each successful round
- **Adapt your strategy** based on previous round performance
- **Maintain one campaign story** across all rounds
- **Control market launch timing** after completing your funding journey

## Key Differences from Standard Campaigns

### Standard Campaign
- Single funding round
- All-or-nothing: reach floor or everyone gets refunded
- Funds released after successful completion
- Token launches to market immediately after finalization
- Maximum 270 days duration

### Multi-Round Campaign
- Up to 5 sequential rounds
- Each round is all-or-nothing independently
- Funds released after each successful round
- Creator controls when to launch token to market
- Maximum 548 days (18 months) total duration
- Same campaign story for all rounds

## How Multi-Round Campaigns Work

### Campaign Structure

```
Campaign: "The Last Frontier" (Sci-Fi Feature Film)
├── Round 1: Pre-Production ($50,000)
├── Round 2: Principal Photography ($150,000)
├── Round 3: Post-Production ($75,000)
├── Round 4: VFX & Sound ($100,000)
└── Round 5: Marketing & Distribution ($50,000)

Total Potential: $425,000 across 5 rounds
```

### Round-by-Round Process

**Creating Your Campaign:**
1. Set up campaign details (story, team, visuals) - **used for all rounds**
2. Create Round 1 with its own floor, ceiling, and timeline
3. Deploy campaign to blockchain
4. Campaign launches with Round 1

**After Round 1 Ends:**
- **If Successful**: Collect funds, create Round 2 (or finalize)
- **If Failed**: Users get refunds for Round 1, can create Round 2 after cooldown

**Continuing Rounds:**
- Create rounds 2-5 sequentially after previous round ends
- Each round has independent floor/ceiling/timeline
- Decide after each round: continue or finalize

**Finalization:**
- When ready, finalize campaign to launch token to market
- Can finalize after any successful round (don't need all 5)
- Token supply = sum of all successful rounds

## Hard Limits & Constraints

### Maximum Limits

| Constraint | Limit | Reason |
|------------|-------|--------|
| **Total Rounds** | 5 rounds | Prevents indefinite fundraising |
| **Campaign Duration** | 548 days (18 months) | Ensures timely project completion |
| **Round Gap (Min)** | 7 days | Allows planning between rounds |
| **Round Gap (Max)** | 90 days | Maintains momentum |
| **Failed Round Cooldown** | 14 days | Recovery period after failure |

### Floor Requirements

Each new round's floor must be **at least 50%** of the last successful round's floor:

```
Example:
Round 1: Floor $100,000 → Success
Round 2: Floor must be ≥ $50,000 (50% of Round 1)
Round 3: Floor must be ≥ 50% of Round 2's floor
```

**Why this matters:**
- Prevents "pump and dump" with progressively smaller rounds
- Ensures meaningful funding in each round
- Protects early supporters from dilution

## What You CAN Do

### ✅ Campaign Creation

**Initial Setup:**
- Create campaign with Round 1 parameters
- Set Round 1 floor, ceiling, overage type
- Set Round 1 start and end times
- Choose funds recipient address
- Write campaign story (used for all rounds)

**Round Management:**
- Create rounds 2-5 **one at a time** after previous round ends
- Set different floor/ceiling for each round
- Set different timelines for each round
- Use same overage types or different ones per round

### ✅ Fund Collection

**After Each Successful Round:**
- Collect funds immediately via `collectRoundFunds()`
- Or collect all uncollected funds via `collectAllFunds()`
- Funds go directly to your recipient address
- Use funds for production while campaign continues

**Important:** Once you collect funds from a round, those funds are **yours to keep** even if you later cancel the campaign.

### ✅ Cancellation & Refunds

**Cancel Current Round:**
- Cancel the active round if it's not going well
- Users get refunds for that round only
- Previous successful rounds keep their tokens
- Can create next round after cooldown

**Cancel All Rounds:**
- Cancel entire campaign at any time
- All uncollected rounds become refundable
- **Collected rounds are NOT refundable** (funds already released)
- Campaign marked as finalized (cannot continue)

### ✅ Finalization Control

**When to Finalize:**
- After any successful round (don't need all 5)
- When you've raised enough for your project
- When 548 days duration is reached
- When you're ready to launch token to market

**Finalization Options:**
- **Creator Finalize**: Call `creatorFinalizeAllRounds()` after 7 days from last round
- **Public Finalize**: Anyone can finalize after 30-day creator grace period
- **Automatic**: Forced after 548 days or when conditions met

## What You CANNOT Do

### ❌ Pre-Set All Rounds

**You cannot:**
- Create all 5 rounds at campaign start
- Pre-commit to a specific number of rounds
- Set parameters for future rounds in advance

**You must:**
- Create rounds **one at a time**
- Wait for previous round to end
- Create next round only after previous round concludes

### ❌ Modify Round Parameters

**Once a round is created, you CANNOT change:**
- Floor amount
- Ceiling amount
- Overage type
- Start time
- End time
- Any round parameters

**Workaround:**
- Cancel the current round
- Wait for it to end
- Create new round with correct parameters

### ❌ Skip or Reorder Rounds

**You cannot:**
- Skip round numbers (must go 1→2→3→4→5)
- Create Round 3 before Round 2
- Go back to edit previous rounds
- Delete rounds once created

### ❌ Extend Individual Rounds

**Unlike standard campaigns:**
- No extension feature for multi-round campaigns
- Each round has fixed start/end times
- Cannot extend deadline once set
- Plan round duration carefully

### ❌ Pause or Reactivate

**You cannot:**
- Pause an active round
- Reactivate a cancelled round
- Restart a failed round
- Pause the entire campaign

## Timeline & Scheduling

### Campaign Duration Calculation

```
Day 0:   Create Round 1 (campaign start)
Day 1:   Round 1 begins (30 days)
Day 31:  Round 1 ends
Day 38:  Create Round 2 (7-day minimum gap)
Day 39:  Round 2 begins (45 days)
Day 84:  Round 2 ends
...
Day 548: DEADLINE - Must finalize
```

**Total duration** = Time from Round 1 creation to finalization (max 548 days)

### Gap Requirements Between Rounds

**Minimum Gap: 7 Days**
- Allows time for planning next round
- Lets community prepare
- Gives you time to collect funds

**Maximum Gap: 90 Days**
- Prevents indefinite delays
- Maintains campaign momentum
- Keeps community engaged

**After Failed Round: 14 Days**
- Extra cooldown period
- Time to reassess strategy
- Prevents hasty decisions

### Example Timeline

**Successful Multi-Round Campaign:**
```
Jan 1:   Round 1 created - Pre-Production ($50k floor)
Jan 5:   Round 1 starts (30 days)
Feb 4:   Round 1 ends - SUCCESS ($75k raised)
Feb 5:   Collect Round 1 funds
Feb 12:  Create Round 2 - Production ($100k floor)
Feb 13:  Round 2 starts (60 days)
Apr 14:  Round 2 ends - SUCCESS ($150k raised)
Apr 15:  Collect Round 2 funds
Apr 22:  Create Round 3 - Post-Production ($75k floor)
Apr 23:  Round 3 starts (45 days)
Jun 7:   Round 3 ends - SUCCESS ($90k raised)
Jun 8:   Collect Round 3 funds
Jun 15:  Finalize campaign (3 successful rounds)
Jun 15:  Token launches to market
```

**Campaign with Failed Round:**
```
Jan 1:   Round 1 created ($50k floor)
Jan 5:   Round 1 starts (30 days)
Feb 4:   Round 1 ends - SUCCESS ($60k raised)
Feb 12:  Create Round 2 ($75k floor)
Feb 13:  Round 2 starts (60 days)
Apr 14:  Round 2 ends - FAILED ($45k raised, below floor)
Apr 28:  Create Round 3 (after 14-day cooldown)
         Floor must be ≥ $30k (50% of Round 1)
Apr 29:  Round 3 starts (45 days)
Jun 13:  Round 3 ends - SUCCESS ($50k raised)
Jun 20:  Finalize campaign
```

## Financial Management

### Fund Collection Strategy

**Option 1: Collect After Each Round**
```solidity
collectRoundFunds(token, roundId)
```
- Get funds immediately after each success
- Use for production as you go
- More flexible cash flow
- **Risk**: If you cancel later, collected funds are not refundable

**Option 2: Collect All at End**
```solidity
collectAllFunds(token)
```
- Collect all uncollected rounds at once
- Useful if finalizing early
- Simpler accounting
- **Benefit**: Can still refund uncollected rounds if you cancel

### Refund Scenarios

**Scenario 1: No Funds Collected, Then Cancel**
```
Round 1: Success ($50k) - NOT collected
Round 2: Success ($75k) - NOT collected
Cancel All Rounds
→ All supporters get full refunds
```

**Scenario 2: Some Funds Collected, Then Cancel**
```
Round 1: Success ($50k) - COLLECTED ✓
Round 2: Success ($75k) - COLLECTED ✓
Round 3: Success ($40k) - NOT collected
Cancel All Rounds
→ Round 1 & 2: NO REFUNDS (funds already taken)
→ Round 3: Full refunds available
```

**Scenario 3: Mixed Success/Failure**
```
Round 1: Success ($50k) - Collected
Round 2: Failed ($30k) - Refundable
Round 3: Success ($60k) - Collected
Round 4: Cancelled - Refundable
→ Rounds 2 & 4: Users can claim refunds
→ Rounds 1 & 3: No refunds (successful + collected)
```

## Success Criteria & Finalization

### What Counts as "Successful Campaign"?

A multi-round campaign is successful if **at least one round succeeds**:

```
Round 1: Success ✓
Round 2: Failed ✗
Round 3: Failed ✗
Round 4: Success ✓
Round 5: Not created

Result: SUCCESSFUL CAMPAIGN
- Can finalize and launch to market
- Token supply = Round 1 + Round 4 tokens
- Rounds 2 & 3 users get refunds
```

### Finalization Timing

**Creator Can Finalize When:**
- At least 1 successful round exists
- Current round has ended
- One of these conditions is met:
  - 7+ days since last round ended
  - All 5 rounds created (max reached)
  - 548 days since campaign start (duration limit)

**Public Can Finalize When:**
- 30 days after last fund collection (creator grace period)
- OR 90 days after last round ended
- OR 548 days since campaign start
- Public finalizer receives 100 USDC reward

### Market Launch

**When you finalize:**
1. Token supply permanently locked (no more minting)
2. Market trading enabled
3. Lending/borrowing features activated
4. Contest participation available
5. Dividend distribution possible
6. Token ownership renounced (decentralized)

## Best Practices

### Planning Your Rounds

**✅ Do:**
- Align rounds with production phases
- Set realistic floors for each round
- Plan 30-60 day rounds for momentum
- Leave 7-14 day gaps for planning
- Communicate round strategy upfront

**❌ Don't:**
- Create rounds without clear purpose
- Set floors too high for later rounds
- Rush into next round without planning
- Exceed 90-day gaps between rounds
- Collect funds if you might cancel

### Communication Strategy

**Before Each Round:**
- Announce next round 1-2 weeks in advance
- Explain what funds will be used for
- Share production updates from previous round
- Set expectations for timeline

**During Each Round:**
- Post weekly updates
- Share behind-the-scenes content
- Respond to questions daily
- Celebrate milestones

**Between Rounds:**
- Report on fund usage
- Show production progress
- Preview next round plans
- Thank supporters

### Risk Management

**Protect Your Supporters:**
- Only collect funds when you're confident
- Don't collect if project viability uncertain
- Cancel early if project won't succeed
- Communicate challenges honestly

**Protect Yourself:**
- Set conservative floors
- Plan for contingencies
- Don't over-promise
- Keep detailed records

## Common Questions

**Q: Do I have to create all 5 rounds?**  
A: No. You can finalize after any successful round. Many campaigns use 2-3 rounds.

**Q: Can I change my mind about the number of rounds?**  
A: Yes. You decide after each round whether to continue or finalize.

**Q: What if Round 2 fails but Round 1 succeeded?**  
A: You can create Round 3 after a 14-day cooldown. Round 1 supporters keep their tokens, Round 2 supporters get refunds.

**Q: Can I edit a round after creating it?**  
A: No. Round parameters are immutable. You must cancel and recreate with correct parameters.

**Q: What happens if I collect funds then cancel?**  
A: Collected rounds are NOT refundable. Only uncollected rounds can be refunded. This is a critical decision point.

**Q: Can supporters trade tokens before finalization?**  
A: No. Trading only activates after you finalize the campaign.

**Q: How long can I wait between rounds?**  
A: Minimum 7 days, maximum 90 days. After a failed round, minimum 14 days.

**Q: What if I reach 548 days?**  
A: Campaign must finalize. You cannot create more rounds. Public finalization becomes available.

**Q: Can I run multiple multi-round campaigns simultaneously?**  
A: Yes, but each campaign is independent. Manage them separately.

**Q: What's the minimum floor for Round 2 if Round 1 was $100k?**  
A: At least $50,000 (50% of Round 1's floor).

## Technical Details

### Smart Contract Functions

**Creating Rounds:**
```solidity
// First round (campaign creation)
createFirstRound(name, symbol, paymentToken, floor, ceiling, 
                 overageType, fundsRecipient, startTime, endTime, 
                 additionalCreators)

// Subsequent rounds
createNextRound(token, floor, ceiling, overageType, 
                startTime, endTime)
```

**Fund Management:**
```solidity
// Collect single round
collectRoundFunds(token, roundId)

// Collect all uncollected rounds
collectAllFunds(token)
```

**Finalization:**
```solidity
// Creator finalization
creatorFinalizeAllRounds(token)

// Public finalization (after grace period)
publicFinalizeAllRounds(token)
```

**Cancellation:**
```solidity
// Cancel current round only
cancelRound(token)

// Cancel entire campaign
cancelAllRounds(token)
```

### Round Status Values

```
1 = PENDING   (Created but not started)
2 = ACTIVE    (Currently accepting funds)
3 = SUCCESS   (Reached floor, ended successfully)
4 = FAILED    (Did not reach floor)
5 = CANCELLED (Manually cancelled)
```

## Comparison Table

| Feature | Standard Campaign | Multi-Round Campaign |
|---------|------------------|---------------------|
| **Rounds** | 1 | Up to 5 |
| **Duration** | Max 270 days | Max 548 days |
| **Fund Release** | After finalization | After each successful round |
| **Market Launch** | Automatic after success | Creator-controlled timing |
| **Extensions** | 1 extension allowed | No extensions per round |
| **Flexibility** | Fixed parameters | Adapt round-by-round |
| **Complexity** | Simple | More management required |
| **Best For** | Single production phase | Staged production |
| **Story/Content** | One writeup | Same writeup for all rounds |

## When to Choose Multi-Round

**Choose Multi-Round If:**
- ✅ Production has distinct phases (pre/production/post)
- ✅ You want to collect funds incrementally
- ✅ You need flexibility to adapt strategy
- ✅ You want to control market launch timing
- ✅ You're comfortable with more complex management

**Choose Standard If:**
- ✅ Single production phase
- ✅ Want simplicity
- ✅ Ready to launch to market immediately
- ✅ Fixed budget and timeline
- ✅ First-time campaign creator

## Related Resources

- [All-or-Nothing Funding](all-or-nothing.md)
- [Campaign Lifecycle](campaign-lifecycle.md)
- [Creating Campaigns](creating-campaigns.md)
- [Managing Campaigns](managing-campaigns.md)
- [Cancellations & Refunds](cancellations.md)

---

**Need Help?**

Multi-round campaigns offer powerful flexibility but require careful planning. Contact our support team at support@redcarpethq.org for guidance on structuring your multi-round campaign.
