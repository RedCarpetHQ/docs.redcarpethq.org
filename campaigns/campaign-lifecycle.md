# Campaign Lifecycle

Understanding the complete lifecycle of a campaign helps you manage it effectively from creation to completion.

## Campaign Stages

### 1. Pending Stage

**Status**: Campaign created but not yet started

**Characteristics:**
- Start time in the future
- No purchases allowed
- Visible on platform
- Can be updated by creator

**Creator Actions:**
- ✅ Update campaign details
- ✅ Modify start/end times
- ✅ Adjust floor/ceiling
- ✅ Change funds recipient
- ✅ Promote upcoming launch
- ✅ Cancel if needed

**Supporter Actions:**
- View campaign details
- Follow for updates
- Share with others
- Prepare to back

**Duration**: From creation until start time

### 2. Active Stage

**Status**: Campaign accepting funds

**Characteristics:**
- Between start and end time
- Purchases enabled
- Real-time progress tracking
- Token supply growing
- Cannot modify core parameters

**Creator Actions:**
- ✅ Monitor progress
- ✅ Post updates
- ✅ Respond to questions
- ✅ Promote campaign
- ✅ Engage community
- ✅ Add collaborators
- ✅ Extend deadline (once)
- ⚠️ Cancel (with conditions)

**Supporter Actions:**
- Purchase tokens with USDC
- Track progress
- Ask questions
- Share campaign
- Increase backing

**Progress Tracking:**
```
Current Raised: $45,000 USDC
Floor Target: $50,000 USDC
Progress: 90%
Time Remaining: 15 days
```

**Duration**: From start time until end time or ceiling reached

### 3. Grace Period

**Status**: Deadline passed, floor not reached

**Characteristics:**
- 24-hour extension window
- No new purchases
- Can extend or finalize as failed
- Automatic after deadline

**Creator Actions:**
- **Option A**: Extend campaign (if extensions available)
  - Set new end time
  - Continue fundraising
  - Maximum 1 extension (default)
  
- **Option B**: Finalize as failed
  - Accept campaign didn't succeed
  - Trigger refund process
  - Supporters get USDC back

**Supporter Actions:**
- Wait for creator decision
- Prepare for refund if failed
- No new purchases allowed

**Duration**: 24 hours after deadline

**Example:**
```
Campaign ended: Jan 15, 2025 23:59:59 UTC
Raised: $45,000 / $50,000 (90%)
Grace period: Jan 16, 2025 00:00:00 - 23:59:59 UTC
Creator must: Extend or finalize by Jan 16, 2025 23:59:59 UTC
```

### 4. Success Stage

**Status**: Floor reached, awaiting finalization

**Characteristics:**
- Raised ≥ Floor amount
- Deadline passed or ceiling reached
- Funds locked in contract
- Token supply locked
- Awaiting creator to claim funds

**Creator Finalize Grace Period:**
- **Duration**: 2 weeks from deadline
- **Purpose**: Give creator time to decide
- **Options**:
  1. Claim funds and proceed
  2. Cancel and refund supporters

**After Grace Period:**
- Anyone can finalize campaign
- Prevents indefinite limbo
- Protects supporter interests

**Creator Actions:**
- **Claim Funds**:
  1. Click "Finalize Campaign"
  2. Confirm transaction
  3. Funds sent to recipient address
  4. Token graduates to full features
  
- **Or Cancel**:
  1. Click "Cancel Campaign"
  2. Confirm cancellation
  3. Supporters get refunds
  4. Token supply remains locked

**Supporter Actions:**
- Wait for finalization
- Cannot trade yet
- Cannot get refunds (unless cancelled)
- Tokens held in wallet

**Duration**: Up to 2 weeks, then public finalization

### 5. Graduated Stage

**Status**: Campaign finalized successfully

**Characteristics:**
- Funds claimed by creator
- Token supply permanently locked
- Full platform features activated
- Trading enabled
- DeFi features available

**Token Features Activated:**
- ✅ **Trading**: Buy/sell on marketplace
- ✅ **Lending**: Deposit USDC to earn interest
- ✅ **Borrowing**: Use tokens as collateral
- ✅ **Contests**: Participate in trading competitions
- ✅ **Dividends**: Receive revenue distributions
- ✅ **Governance**: Vote in surveys (if enabled)

**Creator Actions:**
- Post production updates
- Distribute dividends
- Create surveys
- Manage token economics
- Engage community
- Schedule redemption events

**Supporter Actions:**
- Trade tokens freely
- Provide liquidity
- Borrow against tokens
- Compete in contests
- Claim dividends
- Participate in governance

**Duration**: Indefinite (permanent)

### 6. Failed Stage

**Status**: Campaign did not reach floor

**Characteristics:**
- Deadline passed
- Raised < Floor amount
- Grace period expired
- Refunds available

**Creator Actions:**
- Learn from experience
- Analyze what went wrong
- Plan next campaign
- Communicate with supporters

**Supporter Actions:**
- Claim refunds
- Receive full USDC back
- No tokens retained
- No fees charged

**Refund Process:**
1. Visit campaign page
2. Click "Claim Refund"
3. Confirm transaction
4. Receive USDC back

**Duration**: Refunds available indefinitely

### 7. Cancelled Stage

**Status**: Campaign manually cancelled

**Characteristics:**
- Cancelled by creator or screener
- Refunds available immediately
- Token supply locked
- No graduation

**Cancellation Reasons:**
- Creator decision
- Project no longer viable
- Screener intervention
- Terms violation
- Fraud prevention

**Creator Actions:**
- Communicate reason
- Apologize to supporters
- Learn from experience

**Supporter Actions:**
- Claim refunds
- Receive full USDC back
- No penalties

**Duration**: Refunds available indefinitely

## State Transitions

### Visual Flow

```
┌─────────────┐
│   PENDING   │ (Before start time)
└──────┬──────┘
       │ Start time reached
       ▼
┌─────────────┐
│   ACTIVE    │ (Accepting funds)
└──────┬──────┘
       │
       ├─────► Ceiling reached ──────┐
       │                              │
       └─────► Deadline passed        │
                      │                │
                      ▼                │
              ┌──────────────┐        │
              │ GRACE PERIOD │        │
              └──────┬───────┘        │
                     │                │
       ┌─────────────┼────────────┐   │
       │             │            │   │
       ▼             ▼            ▼   ▼
  ┌────────┐   ┌─────────┐   ┌──────────┐
  │ FAILED │   │ EXTEND  │   │ SUCCESS  │
  └────────┘   └────┬────┘   └────┬─────┘
                    │              │
                    └──► ACTIVE    │ Finalize
                                   │
                         ┌─────────┼──────────┐
                         │                    │
                         ▼                    ▼
                   ┌──────────┐        ┌───────────┐
                   │ GRADUATED│        │ CANCELLED │
                   └──────────┘        └───────────┘
```

## Timeline Examples

### Example 1: Successful Campaign (No Extension)

```
Day 0: Campaign created (Pending)
Day 1: Campaign starts (Active)
Day 30: Reached floor ($50k)
Day 45: Reached ceiling ($200k) - Auto-conclude
Day 45: Creator finalizes - Graduates
Day 46+: Trading, lending, contests active
```

### Example 2: Successful Campaign (With Extension)

```
Day 0: Campaign created (Pending)
Day 1: Campaign starts (Active)
Day 60: Deadline reached - $45k raised (90%)
Day 60-61: Grace period
Day 61: Creator extends 30 days
Day 61-91: Campaign active again
Day 75: Reached floor ($50k)
Day 91: Deadline - Campaign success
Day 91-105: Creator finalize grace period
Day 100: Creator finalizes - Graduates
```

### Example 3: Failed Campaign

```
Day 0: Campaign created (Pending)
Day 1: Campaign starts (Active)
Day 60: Deadline reached - $30k raised (60%)
Day 60-61: Grace period
Day 61: Creator finalizes as failed
Day 62+: Supporters claim refunds
```

### Example 4: Cancelled Campaign

```
Day 0: Campaign created (Pending)
Day 1: Campaign starts (Active)
Day 15: $20k raised (40%)
Day 15: Creator cancels (project issues)
Day 16+: Supporters claim refunds
```

## Key Milestones

### Campaign Progress

**25% Funded**
- Early momentum indicator
- Share milestone with community
- Increase marketing efforts

**50% Funded**
- Halfway point
- Reassess strategy
- Celebrate with supporters

**75% Funded**
- Success likely
- Plan for graduation
- Prepare post-campaign activities

**100% Funded (Floor)**
- Campaign guaranteed success
- Can still accept more (if overage allowed)
- Begin production planning

**Ceiling Reached**
- Maximum funding achieved
- Campaign auto-concludes
- Finalize immediately

## Time Limits

### Maximum Campaign Duration
- **270 days** (9 months) from initial start
- Includes all extensions
- Hard limit enforced by contract

### Extension Limits
- **Default**: 1 extension allowed
- **Configurable**: Platform can adjust
- **Tracking**: `extensionCount` per campaign

### Grace Periods
- **Post-Deadline**: 24 hours
- **Creator Finalize**: 2 weeks
- **Refund Claims**: No time limit

## Status Checks

### On-Chain Status

Query campaign status:
```solidity
// Status values
1 = PENDING
2 = ACTIVE
3 = SUCCESS
4 = FAILED
5 = CANCELLED
```

### Frontend Display

Campaign page shows:
- Current status badge
- Progress bar
- Time remaining
- Amount raised
- Supporter count
- Recent purchases

### Notifications

Supporters receive notifications for:
- Campaign starts
- Milestones reached
- Deadline approaching
- Campaign succeeds
- Campaign fails
- Refunds available
- Token graduates

## Managing Transitions

### As Creator

**Before Start:**
- Finalize all details
- Prepare marketing materials
- Build anticipation
- Test everything

**During Active:**
- Monitor daily
- Post updates weekly
- Respond quickly
- Maintain momentum

**At Deadline:**
- Assess results
- Decide on extension
- Communicate plans
- Act within grace period

**After Success:**
- Finalize promptly
- Thank supporters
- Begin production
- Plan dividend strategy

**If Failed:**
- Analyze reasons
- Communicate honestly
- Learn lessons
- Consider relaunch

### As Supporter

**During Active:**
- Back early for momentum
- Share with network
- Ask questions
- Track progress

**At Deadline:**
- Wait for creator decision
- Check for extensions
- Prepare for outcome

**After Success:**
- Hold or trade tokens
- Explore DeFi features
- Participate in contests
- Await dividends

**If Failed:**
- Claim refund promptly
- Provide feedback
- Support future attempts

## Common Questions

**Q: Can I cancel an active campaign?**  
A: Yes, but supporters get full refunds. Only cancel if absolutely necessary.

**Q: What happens if I don't finalize a successful campaign?**  
A: After 2 weeks, anyone can finalize it for you.

**Q: Can I extend multiple times?**  
A: Default is 1 extension. Platform may adjust this limit.

**Q: How long do refunds take?**  
A: Instant - supporters claim directly from contract.

**Q: Can I change the floor during active campaign?**  
A: No, floor is locked once campaign starts.

**Q: What if ceiling is reached before deadline?**  
A: Campaign auto-concludes at ceiling. Finalize to graduate.

**Q: Can supporters trade tokens before graduation?**  
A: No, trading activates only after successful finalization.

**Q: Is there a fee to finalize?**  
A: Only gas fees (transaction cost).

---

**Next Steps:** [Learn Campaign Management →](managing-campaigns.md)
