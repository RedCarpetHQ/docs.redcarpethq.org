# Design Rationale

Understanding **why** RedCarpetHQ is designed the way it is helps you make better decisions as a producer. This document explains the business logic and reasoning behind key platform features.

## Core Philosophy

### Decentralization + Quality Control

**The Challenge:**
- Pure decentralization = anyone can create campaigns (spam risk)
- Pure centralization = gatekeeping, censorship, single point of failure

**Our Solution: Hybrid Approach**
- **Screener Whitelist**: Quality control without centralization
- **Multiple Screeners**: Distributed trust, no single gatekeeper
- **Toggle Option**: Can disable screening if community prefers
- **On-Chain Operations**: All funds and logic on blockchain

**Why This Works:**
- Protects supporters from scams
- Maintains platform reputation
- Preserves decentralization benefits
- Flexible for future evolution

### Token-Based Crowdfunding

**Why Tokens Instead of Traditional Rewards?**

Traditional crowdfunding (Kickstarter, Indiegogo):
- ❌ No secondary market
- ❌ Backers locked in
- ❌ No financial upside
- ❌ Reward fulfillment burden

Token-based crowdfunding (RedCarpetHQ):
- ✅ Tradable on marketplace
- ✅ Exit opportunities
- ✅ DeFi utility (lending, borrowing)
- ✅ Dividend participation
- ✅ Liquid market for price discovery

**Benefits for Producers:**
- Attract investment-minded backers
- Token liquidity increases appeal
- DeFi features add value
- Easier than physical reward fulfillment

**Benefits for Supporters:**
- Trade tokens anytime
- Earn yield through lending
- Participate in film success
- Portfolio diversification

## Campaign Mechanics

### Floor & Ceiling Model

**Why Not Fixed Goal?**

**Floor (Minimum):**
- Ensures project viability
- All-or-nothing reduces risk
- Protects both sides
- Clear success criteria

**Ceiling (Maximum):**
- Prevents over-dilution
- Manages token supply
- Sets realistic expectations
- Controls project scope

**Overage Options:**
- **No Overage**: Fixed budget projects
- **Unlimited**: Flexible scope
- **Ceiling**: Budget range

**Real-World Example:**
```
Film Budget: $100k minimum, $300k ideal

Floor: $100k (can make film)
Ceiling: $300k (ideal production value)
Overage: Ceiling type

Result:
- Must reach $100k to proceed
- Can accept up to $300k
- Clear budget boundaries
- Token supply capped
```

### Grace Period (24 Hours)

**Why Not End Immediately?**

**Problems Without Grace Period:**
- Campaign ends at random moment
- Last-minute backers miss deadline
- No time to assess near-misses
- Harsh for 99% funded campaigns

**Grace Period Benefits:**
- Creator can extend if close
- Supporters can push final stretch
- Fair assessment window
- Reduces "just missed it" frustration

**Why 24 Hours?**
- Long enough to decide
- Short enough to maintain urgency
- Prevents indefinite limbo
- Industry standard

### Creator Finalize Grace Period (2 Weeks)

**Why Not Auto-Finalize Success?**

**Creator Needs Time To:**
- Assess if they can deliver
- Review final backer list
- Confirm legal compliance
- Prepare for production
- Decide to proceed or refund

**Why 2 Weeks?**
- Reasonable decision window
- Consult with team/lawyers
- Not too long (supporters waiting)
- After 2 weeks, anyone can finalize

**Protects Everyone:**
- Creators: No forced commitment
- Supporters: Campaign won't stay in limbo
- Platform: Prevents stalled campaigns

### Extension Limits

**Why Only 1 Extension?**

**Without Limits:**
- ❌ Campaigns drag on indefinitely
- ❌ Supporter fatigue
- ❌ Looks desperate
- ❌ Reduces urgency

**With 1 Extension:**
- ✅ Second chance for near-misses
- ✅ Maintains urgency
- ✅ Prevents abuse
- ✅ Clear boundaries

**Maximum Duration (270 Days):**
- 9 months total maximum
- Prevents zombie campaigns
- Keeps platform active
- Forces decision making

## DeFi Architecture

### ERC4626 Vaults (UnifiedVaultV3)

**Why ERC4626 Standard?**

**Benefits:**
- Industry-standard interface
- Compatible with all DeFi tools
- Auto-integrates with aggregators
- Wallets show balances automatically
- Composable with other protocols

**Why One Vault Per Token?**

**Old Approach (5 Contracts):**
- ❌ Complex architecture
- ❌ Gas-intensive
- ❌ Hard to audit
- ❌ Difficult to understand

**New Approach (1 Contract):**
- ✅ Simple architecture
- ✅ Gas-efficient
- ✅ Easy to audit
- ✅ User-friendly

### 80/20 Deposit Split

**Why Not 100% Lending?**

**Problem:**
- Liquidations need USDC immediately
- External liquidators slow/unreliable
- Gas wars during liquidations
- Bad debt risk

**Solution: Stability Pool (20%)**
- Instant liquidation USDC available
- No external liquidators needed
- Automatic process
- Protects lenders

**Why 80/20 Ratio?**
- 80% lending = good capital efficiency
- 20% stability = adequate liquidation buffer
- Balanced approach
- Tested in other protocols (Liquity)

**User Experience:**
```
Deposit: 1,000 USDC
Automatically allocated:
- 800 USDC → Lending Pool (earn interest)
- 200 USDC → Stability Pool (liquidation buffer)

User sees: 1,000 vault shares
Complexity hidden, benefits automatic
```

### Risk-Tiered Interest Splits

**Why Not Fixed Interest Split?**

**Problem:**
- Market conditions change
- Some tokens riskier than others
- Fixed split doesn't adapt
- Risk not priced correctly

**Solution: Dynamic Tiers**

| Tier | Protocol | Insurance | Lenders | When |
|------|----------|-----------|---------|------|
| GREEN | 4% | 6% | 90% | Healthy market |
| YELLOW | 6% | 9% | 85% | Moderate risk |
| RED | 10% | 15% | 75% | High risk |

**Why This Works:**
- **Green**: Low risk = lenders get most
- **Yellow**: Medium risk = more to insurance
- **Red**: High risk = much more to insurance + protocol

**Risk Factors Assessed:**
- Price staleness
- Vault utilization
- Wash trading
- Market health
- Dispute activity

**Benefits:**
- Automatic risk adjustment
- Insurance fund grows when needed
- Lenders protected
- Protocol sustainable

### Collateral Factors & Liquidation

**Why 50% Collateral Factor (Green)?**

**Too High (e.g., 90%):**
- ❌ High liquidation risk
- ❌ Small price drops = liquidation
- ❌ Bad debt risk
- ❌ Lender losses

**Too Low (e.g., 20%):**
- ❌ Capital inefficient
- ❌ Low borrowing utility
- ❌ Unattractive to users

**50% Sweet Spot:**
- ✅ Safe buffer
- ✅ Reasonable utility
- ✅ Industry standard
- ✅ Proven in DeFi

**Liquidation Threshold (60%):**
- 10% buffer above collateral factor
- Gives time to add collateral
- Prevents immediate liquidation
- Fair warning system

**Example:**
```
Deposit: 100 tokens @ $10 = $1,000
Borrow: $500 (50% collateral factor)

Price drops to $8.33:
- Collateral value: $833
- Borrowed: $500
- Ratio: 60% (liquidation threshold)
- Position liquidated

Buffer: $1,000 → $833 = 16.7% price drop allowed
```

### Utilization Cap (85%)

**Why Not 100% Utilization?**

**Problem:**
- 100% utilized = no withdrawals possible
- Bank run risk
- Lenders trapped
- System instability

**85% Cap:**
- ✅ Always 15% available for withdrawals
- ✅ Prevents bank runs
- ✅ Maintains liquidity
- ✅ Protects lenders

**Interest Rate Curve:**
```
0-70%: Gradual increase (optimal range)
70-85%: Steep increase (discourage borrowing)
85%+: No borrowing allowed
```

**Why This Works:**
- Low utilization = low rates (encourage borrowing)
- High utilization = high rates (encourage repayment)
- Cap = safety valve
- Self-balancing system

## Trading & Markets

### Escrow-Based Trading

**Why Not Order Book?**

**Order Book Problems:**
- Complex to implement
- Gas-intensive
- Front-running risk
- MEV exploitation

**Escrow Offers:**
- ✅ Simple and secure
- ✅ Gas-efficient
- ✅ No front-running
- ✅ Funds locked safely

**How It Works:**
```
Seller creates offer:
1. Locks tokens in Market contract
2. Sets price
3. Waits for buyer

Buyer fills offer:
1. Sends USDC to Market
2. Market sends tokens to buyer
3. Market sends USDC to seller
4. Atomic swap (all or nothing)
```

### VWAP Price Oracle

**Why VWAP Instead of Last Price?**

**Last Price Problems:**
- ❌ Easy to manipulate
- ❌ Single trade affects price
- ❌ Wash trading exploits
- ❌ Not representative

**VWAP Benefits:**
- ✅ Volume-weighted (manipulation harder)
- ✅ Reflects true market activity
- ✅ Smooths out anomalies
- ✅ Fair liquidation pricing

**Formula:**
```
VWAP = Σ(Price × Volume) / Σ(Volume)
```

**Example:**
```
Trade 1: 100 tokens @ $10 = $1,000
Trade 2: 50 tokens @ $12 = $600
Trade 3: 200 tokens @ $9 = $1,800

VWAP = ($1,000 + $600 + $1,800) / (100 + 50 + 200)
     = $3,400 / 350
     = $9.71

Fair price despite $12 outlier
```

### Trading Contests (6-Hour Epochs)

**Why Trading Contests?**

**Goals:**
- Incentivize trading activity
- Reward active traders
- Create engagement
- Distribute fees fairly

**Why 6 Hours?**
- ❌ Too short (1 hour): Not enough activity
- ❌ Too long (24 hours): Reduces urgency
- ✅ 6 hours: Perfect balance

**4 epochs per day:**
- Multiple chances to win
- Global time zone coverage
- Maintains excitement
- Sustainable participation

**15,000 USDC Threshold:**
- Prevents sybil attacks
- Ensures serious traders
- Meaningful qualification
- Protects prize pool

**Pro-Rata Distribution:**
```
Trader A: 50,000 USDC volume
Trader B: 30,000 USDC volume
Trader C: 20,000 USDC volume
Total: 100,000 USDC volume

Prize Pool: 1,000 USDC

Trader A: 500 USDC (50%)
Trader B: 300 USDC (30%)
Trader C: 200 USDC (20%)

Fair distribution by contribution
```

### 2.5% Trade Fee

**Why Charge Fees?**

**Platform Sustainability:**
- Development costs
- Infrastructure
- Security audits
- Support team
- Marketing

**Why 2.5%?**
- ❌ Too low (<1%): Unsustainable
- ❌ Too high (>5%): Discourages trading
- ✅ 2.5%: Industry standard, fair

**Fee Distribution (40/40/10/10):**
- **40% Protocol**: Platform development
- **40% Contest**: Trader rewards
- **10% Vault**: Protocol's allocation
- **10% Producer**: Creator rewards

**Why This Split?**
- Traders get most back (40% + vault returns)
- Producers incentivized (10%)
- Platform sustainable (40%)
- Balanced ecosystem

## Revenue Distribution

### Dividend System

**Why Dividends?**

**Traditional Film Financing:**
- Complex waterfall structures
- Opaque accounting
- Delayed payments
- High overhead

**Blockchain Dividends:**
- ✅ Transparent on-chain
- ✅ Instant distribution
- ✅ Pro-rata fairness
- ✅ Low overhead

**Snapshot-Based:**
- Captures holders at specific time
- Prevents gaming system
- Fair to all holders
- Includes vault depositors

**Multi-Round Support:**
- Film revenues over time
- Multiple distributions
- Flexible timing
- Ongoing engagement

### Producer Exit Strategy

**Why Allow Producer Exit?**

**Problem:**
- Producers want to cash out
- Selling tokens dumps price
- Hurts other holders
- Creates conflict

**Solution: Burn for Vault Shares**
- Producer burns tokens
- Receives protocol's vault allocation
- No market impact
- Fair value exchange

**Requirements:**
- Minimum 10 USDC threshold
- 25% exit fee
- Only protocol's allocation
- Doesn't affect other holders

**Why This Works:**
- Producer gets liquidity
- No price dump
- Fee protects ecosystem
- Sustainable exit path

## Security & Risk Management

### Circuit Breakers

**Why Automatic Pauses?**

**Triggers:**
- Bad debt > $10,000
- Utilization > 99%
- Price stale > 12 hours

**Purpose:**
- Prevent cascading failures
- Protect user funds
- Allow admin intervention
- Emergency stop

**Why These Thresholds?**
- Tested in production
- Balance safety vs. false alarms
- Industry best practices
- Adjustable if needed

### Wash Trading Detection

**Why Monitor Wash Trading?**

**Problem:**
- Fake volume manipulation
- Contest exploitation
- False price signals
- Unfair rewards

**Detection:**
- Same-pair trade tracking
- Unique participant counting
- Epoch-based analysis
- Risk tier adjustment

**Consequences:**
- Elevated to YELLOW/RED tier
- Higher insurance allocation
- Lower collateral factors
- Contest disqualification

### Reentrancy Protection

**Why Needed?**

**Famous Attacks:**
- The DAO hack (2016)
- $60M stolen
- Ethereum hard fork

**Our Protection:**
- ReentrancyGuard on all functions
- Checks-Effects-Interactions pattern
- State updates before external calls

## Platform Evolution

### Why V3 Architecture?

**V1/V2 Problems:**
- Too many contracts (5 per token)
- Complex fee routing
- Gas inefficient
- Hard to maintain

**V3 Improvements:**
- 1 contract per token (UnifiedVaultV3)
- Central FeeDistributor
- Native ERC4626
- Simplified logic

**Benefits:**
- 60% gas savings
- Easier audits
- Better UX
- Future-proof

### Testnet First

**Why Base Sepolia?**

**Before Mainnet:**
- ✅ Test all features
- ✅ Find bugs safely
- ✅ Gather feedback
- ✅ Iterate quickly
- ✅ No real money risk

**Mainnet Launch:**
- After thorough testing
- Security audits complete
- Community feedback incorporated
- Proven stability

---

**Next Steps:** [Understand Campaign Economics →](business-logic/campaign-economics.md)
