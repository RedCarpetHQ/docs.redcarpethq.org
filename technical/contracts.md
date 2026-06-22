# Smart Contracts Reference

RedCarpetHQ is powered by battle-tested smart contracts. This reference provides technical details for developers and advanced users.

## Contract Architecture

### Global Contracts (Single Instance)

#### Registry
**Purpose**: Central registry for all campaigns and system configuration

**Address**: `[Deployed Address]`

**Key Functions:**
- `campaigns(address token)`: Get campaign details
- `graduatedTime(address token)`: When token graduated
- `isGraduated(address token)`: Check graduation status
- `FEE_SAFE_ADDRESS()`: Protocol treasury address
- `PROTOCOL_SAFE()`: Protocol vault allocation address

**Stores:**
- Campaign metadata
- Token status
- Global configuration
- Contract addresses

#### Campaign
**Purpose**: Manages fundraising campaigns and token sales

**Address**: `[Deployed Address]`

**Key Functions:**
- `createCampaign()`: Deploy new campaign
- `purchaseTokens()`: Buy campaign tokens
- `finalizeCampaign()`: Conclude successful campaign
- `cancelCampaign()`: Cancel and enable refunds
- `extendCampaign()`: Extend deadline
- `claimRefund()`: Get refund for failed/cancelled campaign

**Events:**
- `CampaignCreated`: New campaign deployed
- `TokensPurchased`: Tokens bought
- `CampaignEnded`: Campaign concluded
- `Refunded`: Refund claimed

#### Market
**Purpose**: Peer-to-peer token trading marketplace

**Address**: `[Deployed Address]`

**Key Functions:**
- `createOffer()`: Create buy/sell offer
- `fillOffer()`: Fill existing offer
- `cancelOffer()`: Cancel your offer
- `offers(uint256 offerId)`: Get offer details

**Offer Types:**
- `OFFER_BUY = 1`: Buy tokens with USDC
- `OFFER_SELL = 2`: Sell tokens for USDC

**Events:**
- `OfferCreated`: New offer posted
- `OfferFilled`: Offer executed
- `OfferCancelled`: Offer removed
- `TradeExecuted`: Trade completed

#### FeeDistributor
**Purpose**: Central fee distribution (40/40/10/10 split)

**Address**: `[Deployed Address]`

**Distribution:**
- 40% → Protocol Treasury (FEE_SAFE_ADDRESS)
- 40% → Trading Contest
- 10% → UnifiedVault (protocol allocation)
- 10% → Producer (token creator)

**Key Functions:**
- `distributeFees()`: Process fee distribution
- `depositContestFees()`: Send fees to Contest
- `claimProducerReward()`: Producer claims 10%

**Events:**
- `FeesReceived`: Fees collected
- `FeesDistributed`: Fees split
- `ProducerRewardClaimed`: Producer claimed

#### Contest
**Purpose**: 6-hour trading competition with volume tracking

**Address**: `[Deployed Address]`

**Constants:**
- `EPOCH_LENGTH = 6 hours`
- `THRESHOLD = 15,000 USDC`: Minimum to qualify
- `FIRST_CLAIMER_BOUNTY_BPS = 100`: 1% bounty

**Key Functions:**
- `recordVolume()`: Track trader volume (called by Market)
- `depositFees()`: Add prize pool
- `finalizeEpoch()`: End epoch and calculate rewards
- `claimReward()`: Claim trading rewards

**Events:**
- `Volume`: Trade volume recorded
- `Qualified`: Trader qualified
- `EpochFinalized`: Epoch ended
- `RewardClaimed`: Reward paid

#### RiskOracle
**Purpose**: Real-time risk assessment for all tokens

**Address**: `[Deployed Address]`

**Risk Tiers:**
- `TIER_GREEN = 0`: Healthy (50% CF, 60% LT)
- `TIER_YELLOW = 1`: Moderate (40% CF, 50% LT)
- `TIER_RED = 2`: High risk (30% CF, 40% LT)

**Key Functions:**
- `assessRiskTier()`: Calculate current tier
- `getRiskParameters()`: Get tier parameters
- `recordTrade()`: Track wash trading
- `triggerCircuitBreaker()`: Emergency pause

**Assessment Factors:**
- Price staleness
- Vault utilization
- Wash trading detection
- Market health

#### HybridPriceOracle
**Purpose**: VWAP-based price feeds for all tokens

**Address**: `[Deployed Address]`

**Key Functions:**
- `updatePrice()`: Record new trade (called by Market)
- `getPrice()`: Get current VWAP
- `getPriceAge()`: Check staleness
- `isStale()`: Check if price outdated

**Update Mechanism:**
- Lazy updates on trades
- VWAP calculation
- Volume-weighted
- Manipulation resistant

#### DividendDistributor
**Purpose**: Revenue distribution to token holders

**Address**: `[Deployed Address]`

**Key Functions:**
- `createDividendRound()`: Start new distribution
- `activateRound()`: Enable claims after snapshot
- `claimDividend()`: Holder claims share
- `whitelistDistributor()`: Authorize distributor

**Events:**
- `DividendRoundCreated`: New round
- `DividendRoundActivated`: Claims enabled
- `DividendClaimed`: Holder claimed

### Per-Token Contracts

#### UnifiedVault (ERC4626)
**Purpose**: Single vault per token - lending, stability, insurance

**Deployment**: One per graduated token

**ERC4626 Functions:**
- `deposit(uint256 assets, address receiver)`: Deposit USDC
- `withdraw(uint256 assets, address receiver, address owner)`: Withdraw USDC
- `redeem(uint256 shares, address receiver, address owner)`: Redeem shares
- `totalAssets()`: Total USDC in vault
- `convertToShares(uint256 assets)`: Calculate shares
- `convertToAssets(uint256 shares)`: Calculate assets

**Lending Functions:**
- `depositCollateral(uint256 amount)`: Deposit campaign tokens
- `withdrawCollateral(uint256 amount)`: Withdraw tokens
- `borrow(uint256 amount)`: Borrow USDC
- `repay(uint256 amount)`: Repay loan
- `liquidate(address borrower)`: Liquidate underwater position

**State Variables:**
- `lendingPool`: 80% of deposits
- `stabilityPool`: 20% of deposits
- `insuranceFund`: Funded by interest
- `totalBorrows`: Total borrowed USDC
- `borrowIndex`: Interest accumulator
- `collateralBalances`: User collateral
- `accountBorrows`: User debt

**Events:**
- `Deposit`: USDC deposited (ERC4626)
- `Withdraw`: USDC withdrawn (ERC4626)
- `CollateralDeposited`: Tokens deposited
- `Borrowed`: USDC borrowed
- `Repaid`: Loan repaid
- `Liquidated`: Position liquidated

#### MinimumERC20 (Campaign Token)
**Purpose**: ERC20 token for each campaign

**Deployment**: One per campaign

**Standard ERC20:**
- `transfer()`: Send tokens
- `approve()`: Approve spender
- `transferFrom()`: Transfer on behalf
- `balanceOf()`: Check balance
- `totalSupply()`: Total token supply

**Additional Features:**
- `snapshot()`: Create balance snapshot
- `mint()`: Create tokens (campaign only)
- `lockSupply()`: Prevent further minting

**Events:**
- `Transfer`: Tokens moved
- `Approval`: Spending approved
- `Snapshot`: Snapshot created
- `SupplyLocked`: Minting disabled

## Contract Interactions

### Campaign Creation Flow

```
User → Campaign.createCampaign()
  ↓
Campaign → Clones.clone(tokenImplementation)
  ↓
Campaign → MinimumERC20.initialize()
  ↓
Campaign → Registry.registerCampaign()
  ↓
Event: CampaignCreated
```

### Token Purchase Flow

```
User → USDC.approve(Campaign, amount)
  ↓
User → Campaign.purchaseTokens(token, amount)
  ↓
Campaign → USDC.transferFrom(user, Campaign, amount)
  ↓
Campaign → MinimumERC20.mint(user, tokens)
  ↓
Event: TokensPurchased
```

### Campaign Finalization Flow

```
Creator → Campaign.finalizeCampaign(token)
  ↓
Campaign → Check: raised >= floor
  ↓
Campaign → USDC.transfer(fundsRecipient, raised)
  ↓
Campaign → MinimumERC20.lockSupply()
  ↓
Campaign → Registry.setGraduated(token)
  ↓
Campaign → LendingManager.deployVault(token)
  ↓
Event: CampaignEnded, SupplyLocked
```

### Trading Flow

```
Seller → Token.approve(Market, amount)
  ↓
Seller → Market.createOffer(SELL, token, amount, price)
  ↓
Market → Token.transferFrom(seller, Market, amount)
  ↓
Event: OfferCreated
  ↓
Buyer → USDC.approve(Market, cost)
  ↓
Buyer → Market.fillOffer(offerId, amount)
  ↓
Market → USDC.transferFrom(buyer, Market, cost)
  ↓
Market → Calculate fee (2.5%)
  ↓
Market → FeeDistributor.distributeFees(token, fee)
  ↓
Market → Token.transfer(buyer, amount)
  ↓
Market → USDC.transfer(seller, cost - fee)
  ↓
Market → HybridPriceOracle.updatePrice(token, price, volume)
  ↓
Market → Contest.recordVolume(token, buyer, volume)
  ↓
Events: OfferFilled, TradeExecuted
```

### Lending Flow

```
Lender → USDC.approve(Vault, amount)
  ↓
Lender → Vault.deposit(amount, lender)
  ↓
Vault → USDC.transferFrom(lender, Vault, amount)
  ↓
Vault → Split: 80% lending, 20% stability
  ↓
Vault → Mint shares to lender
  ↓
Event: Deposit
  ↓
Borrower → Token.approve(Vault, collateral)
  ↓
Borrower → Vault.depositCollateral(collateral)
  ↓
Vault → Token.transferFrom(borrower, Vault, collateral)
  ↓
Event: CollateralDeposited
  ↓
Borrower → Vault.borrow(amount)
  ↓
Vault → Check: collateral sufficient
  ↓
Vault → Accrue interest
  ↓
Vault → USDC.transfer(borrower, amount)
  ↓
Vault → Update totalBorrows
  ↓
Event: Borrowed
```

### Liquidation Flow

```
Liquidator → Vault.liquidate(borrower)
  ↓
Vault → Check: collateral ratio < threshold
  ↓
Vault → Calculate debt + bonus
  ↓
Vault → Stability pool repays debt
  ↓
Vault → Seize collateral
  ↓
Vault → Distribute collateral to stability depositors
  ↓
Vault → Create sell offer on Market (auto-sell)
  ↓
Event: Liquidated
```

### Dividend Flow

```
Producer → USDC.approve(DividendDistributor, amount)
  ↓
Producer → DividendDistributor.createDividendRound(token, amount)
  ↓
DividendDistributor → USDC.transferFrom(producer, contract, amount)
  ↓
Event: DividendRoundCreated
  ↓
Producer → Token.snapshot()
  ↓
Event: Snapshot
  ↓
Producer → DividendDistributor.activateRound(token, roundId)
  ↓
Event: DividendRoundActivated
  ↓
Holder → DividendDistributor.claimDividend(token, roundId)
  ↓
DividendDistributor → Calculate share
  ↓
DividendDistributor → USDC.transfer(holder, share)
  ↓
Event: DividendClaimed
```

## Security Features

### Access Control

**Ownable Contracts:**
- Campaign: Platform owner
- Market: Platform owner
- FeeDistributor: Platform owner
- RiskOracle: Platform owner

**Role-Based:**
- Screeners: Can whitelist creators
- Collectors: Can deposit contest fees
- Sources: Can record volume

### Reentrancy Protection

All state-changing functions use `ReentrancyGuard`:
```solidity
modifier nonReentrant() {
    require(_status != _ENTERED, "ReentrancyGuard: reentrant call");
    _status = _ENTERED;
    _;
    _status = _NOT_ENTERED;
}
```

### Pausable Contracts

Critical contracts can be paused:
```solidity
function pause() external onlyOwner {
    _pause();
}

function unpause() external onlyOwner {
    _unpause();
}
```

### SafeERC20

All token transfers use OpenZeppelin's SafeERC20:
```solidity
using SafeERC20 for IERC20;

IERC20(token).safeTransfer(recipient, amount);
IERC20(token).safeTransferFrom(sender, recipient, amount);
```

### Integer Overflow Protection

Solidity 0.8.20 has built-in overflow checks:
```solidity
pragma solidity 0.8.20;
// Automatic overflow/underflow protection
```

## Agentic Trading & Integrator Commission

For developers building trading interfaces, bots, or agentic trading agents, the platform exposes fee-aware functions that allow integrators to earn a commission on every trade they facilitate.

### Integrator Commission (`uiFeeFactor`)

Integrators can earn a share of trading fees by routing orders through fee-aware functions. The commission is configurable per integrator address.

**Commission Structure:**
- **Maximum Commission:** Up to 0.5% of the trade value (50 basis points)
- **Source:** Deducted from the total 2.5% trading fee
- **Payment:** Sent directly to the integrator's specified address at transaction time

**How It Works:**
1. An integrator registers their commission rate (in basis points)
2. When a trader executes through the integrator's interface, the commission is calculated automatically
3. The integrator receives their share directly in USDC
4. The remaining fee follows the standard 40/40/10/10 distribution

**Use Cases:**
- Trading frontends earning revenue on user volume
- Arbitrage bots capturing spreads
- Agentic trading agents operating on behalf of users
- Mobile apps integrating the marketplace

### Batch Operations (MarketMulticall)

For high-frequency traders and bots, batch operations reduce gas costs and improve throughput:

**Query Functions:**
- `getOpenOffers(token, startIndex, limit)`: Paginated list of open offers
- `getOffersInPriceRange(token, minPrice, maxPrice)`: Filtered offers by price
- `getBuyOffers(token)`: All buy offers for a token
- `getSellOffers(token)`: All sell offers for a token

**Batch Execution:**
- `batchFillBuyOffers(offerIds[], amounts[])`: Fill multiple buy offers in one transaction
- `batchFillSellOffers(offerIds[], amounts[])`: Fill multiple sell offers in one transaction
- `batchCancelOffers(offerIds[])`: Cancel multiple of your own offers

**Benefits:**
- Up to 80% gas savings vs individual transactions
- Atomic execution (all succeed or all fail)
- Reduced transaction count for high-frequency strategies

## Gas Optimization

### Efficient Storage

**Packed Structs:**
```solidity
struct Offer {
    uint256 offerId;
    address token;
    address paymentToken;
    uint8 offerType;        // Packed with status
    uint8 status;           // Same slot
    // ... more fields
}
```

**Immutable Variables:**
```solidity
IERC20 public immutable collateralToken;
Registry public immutable registry;
```

### Batch Operations

**Multiple Claims:**
```solidity
function claimMultipleDividends(
    address[] calldata tokens,
    uint256[] calldata roundIds
) external;
```

### Gas Estimates

| Operation | Gas Cost | USD (50 gwei) |
|-----------|----------|---------------|
| Create Campaign | ~500,000 | $25 |
| Purchase Tokens | ~150,000 | $7.50 |
| Create Offer | ~200,000 | $10 |
| Fill Offer | ~200,000 | $10 |
| Deposit to Vault | ~180,000 | $9 |
| Borrow | ~250,000 | $12.50 |
| Repay | ~150,000 | $7.50 |
| Liquidate | ~300,000 | $15 |
| Claim Dividend | ~80,000 | $4 |

*Estimates for Layer 2 networks. Actual costs may vary based on network conditions.*

## Contract Addresses

Current contract addresses are available on the platform dashboard and updated with each deployment.

> **Note:** For security, addresses are not hard-coded in public documentation. Always verify the current deployment addresses on the official platform before interacting with contracts.

## ABIs

Contract ABIs are available through the platform API or by querying verified contracts directly on a block explorer.

## Integration

### Web3.js

```javascript
const Web3 = require('web3');
const web3 = new Web3(RPC_URL); // Use platform-provided RPC

const campaignABI = [ /* ABI from platform API */ ];
const campaign = new web3.eth.Contract(campaignABI, CAMPAIGN_ADDRESS);
```

### Ethers.js

```javascript
const { ethers } = require('ethers');
const provider = new ethers.JsonRpcProvider(RPC_URL); // Use platform-provided RPC

const campaignABI = [ /* ABI from platform API */ ];
const campaign = new ethers.Contract(CAMPAIGN_ADDRESS, campaignABI, provider);
```

## Upgradability

### Non-Upgradable Contracts

All core contracts are **immutable** (not upgradable):
- Campaign
- Market
- UnifiedVault
- MinimumERC20

**Why?**
- Maximum security
- No admin backdoors
- Trustless operation
- Predictable behavior

### Registry Updates

Registry can update:
- Contract addresses (for new deployments)
- Configuration parameters
- Feature flags

**Does NOT affect:**
- Existing campaigns
- User funds
- Token contracts
- Vault contracts

---

**Next Steps:**
- [Security & Audits →](security.md)
- [Network Information →](network.md)
- [API Reference →](api.md)
