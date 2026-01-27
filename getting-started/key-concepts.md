# Key Concepts

Understanding these core concepts will help you navigate RedCarpetHQ effectively.

## Campaign Concepts

### Campaign Token
Each campaign issues its own ERC20 token. When supporters back your project, they receive tokens representing their stake. These tokens can be:
- Traded on the marketplace
- Used as collateral for borrowing
- Held to receive dividends
- Burned for special redemption events

### Floor & Ceiling
- **Floor**: Minimum funding target. Campaign must reach this to succeed.
- **Ceiling**: Maximum funding target (optional). Campaign stops accepting funds at this level.

### Overage Types
How your campaign handles funds above the floor:

1. **No Overage**: Campaign ends exactly at floor
2. **Unlimited Overage**: Accept funds indefinitely until deadline
3. **Ceiling Overage**: Accept funds up to ceiling amount

### Campaign Status
- **Pending**: Created but not yet started
- **Active**: Currently accepting funds
- **Success**: Reached floor target, funds claimable
- **Failed**: Deadline passed without reaching floor
- **Cancelled**: Manually cancelled by creator or screener

### Grace Period
After a campaign deadline passes without reaching the floor, there's a **24-hour grace period** where the campaign can be extended or finalized as failed.

### Creator Finalize Grace Period
After a successful campaign, creators have **2 weeks** to decide whether to claim funds or cancel. After this period, anyone can finalize the campaign.

## Token Concepts

### Token Supply
- **Initial Supply**: Determined by total funds raised and price per token
- **Supply Lock**: After campaign succeeds, supply is locked (no new minting)
- **Burn Mechanism**: Tokens can be burned for redemption events

### Price Per Token
Set during campaign creation. Example:
- Price: 1 USDC per token
- Backer invests: 100 USDC
- Tokens received: 100 tokens

### Token Graduation
When a campaign succeeds and is finalized, the token "graduates" to full platform features:
- Trading enabled on marketplace
- Lending/borrowing activated
- Trading contests begin
- Dividend distribution available

## DeFi Concepts

### UnifiedVaultV3 (ERC4626)
Each graduated token has its own lending vault where users can:
- **Deposit USDC**: Earn interest from borrowers
- **Withdraw USDC**: Redeem shares for underlying assets
- **Borrow USDC**: Use campaign tokens as collateral
- **Repay Loans**: Pay back borrowed amounts plus interest

### Deposit Allocation (80/20 Split)
When you deposit USDC into a vault:
- **80% → Lending Pool**: Available for borrowing
- **20% → Stability Pool**: Used for auto-liquidations

### Risk Tiers
The platform assesses each token's risk level:

| Tier | Description | Collateral Factor | Liquidation Threshold |
|------|-------------|-------------------|----------------------|
| **GREEN** | Healthy market | 50% | 60% |
| **YELLOW** | Moderate risk | 40% | 50% |
| **RED** | High risk | 30% | 40% |

Risk tier affects:
- Interest rate splits
- Borrowing limits
- Supply caps

### Collateral Factor
Maximum you can borrow against collateral. Example:
- Collateral Factor: 50%
- Deposit: 100 tokens worth $1,000
- Max Borrow: $500 USDC

### Liquidation Threshold
When your collateral value drops below this threshold, your position can be liquidated. Example:
- Liquidation Threshold: 60%
- Borrowed: $500 USDC
- Liquidation occurs when collateral value < $833

### Utilization Rate
Percentage of lending pool currently borrowed:
```
Utilization = Total Borrows / Lending Pool
```
Higher utilization = higher interest rates

### Interest Rate Model
Dynamic interest rates based on utilization:
- **Low Utilization (0-70%)**: Gradual rate increase
- **Optimal Utilization (70%)**: Target rate
- **High Utilization (70-85%)**: Steep rate increase
- **Max Utilization (85%)**: Hard cap, no more borrowing

## Trading Concepts

### Offer Types
- **Buy Offer**: Offer to buy tokens with USDC
- **Sell Offer**: Offer to sell tokens for USDC

### Escrow System
All offers lock funds in the Market contract:
- **Buy Offers**: USDC escrowed
- **Sell Offers**: Tokens escrowed

### Trade Fee
Platform charges a fee on trades (default 2.5%):
- Deducted from the trade amount
- Distributed via FeeDistributor

### VWAP Oracle
Volume-Weighted Average Price oracle provides fair market prices:
- Updates on every trade
- Resistant to manipulation
- Used for liquidation pricing

### Trading Contest
6-hour competition epochs:
- Track buy-side USDC volume
- Minimum 15,000 USDC to qualify
- Pro-rata rewards from trading fees
- First claimer gets 1% bounty

## Fee Distribution

All platform fees are distributed via the FeeDistributor:

| Recipient | Share | Purpose |
|-----------|-------|---------|
| **Protocol Treasury** | 40% | Platform development |
| **Trading Contest** | 40% | Trader rewards |
| **UnifiedVault** | 10% | Protocol's vault allocation |
| **Producer** | 10% | Token creator rewards |

## Dividend Concepts

### Dividend Round
A distribution event where producers share revenue:
1. Create round with USDC amount
2. Take snapshot of token holders
3. Activate round for claims
4. Token holders claim proportionally

### Snapshot
Blockchain snapshot capturing:
- All token holder addresses
- Token balances at specific block
- Total supply at that moment

### Pro-Rata Distribution
Each holder receives dividends proportional to their holdings:
```
User Dividend = (User Balance / Total Supply) × Total Dividend Amount
```

## Security Concepts

### Screening
Quality control mechanism:
- **Screeners**: Authorized addresses that approve producers
- **Whitelist**: Only approved producers can create campaigns
- **Toggle**: Can be disabled for open access

### Circuit Breaker
Emergency pause mechanism triggered by:
- Excessive bad debt (>10,000 USDC)
- Extreme utilization (>99%)
- Severe price staleness (>12 hours)

### Reentrancy Protection
All state-changing functions protected against reentrancy attacks.

### Pausable Contracts
Critical contracts can be paused in emergencies by authorized addresses.

## Time Concepts

### Campaign Duration
- **Maximum**: 270 days (9 months) from initial start
- **Extensions**: Can extend once (default)
- **Grace Period**: 24 hours after deadline

### Contest Epochs
- **Duration**: 6 hours
- **Start**: When token graduates
- **Continuous**: Runs indefinitely

### Activation Delay
Some features have delays before activation:
- Vault activation: Can be scheduled for future time
- Prevents immediate exploitation after campaign

## Network Concepts

### Ethereum Sepolia
Testnet blockchain where RedCarpetHQ operates:
- **Block Time**: ~12 seconds
- **Gas Token**: Sepolia ETH (free from faucets)
- **Explorer**: sepolia.etherscan.io

### USDC (6 Decimals)
Payment token for all transactions:
- 1 USDC = 1,000,000 (6 decimals)
- Testnet USDC available from platform
- Real USDC on mainnet deployment

### Gas Fees
Transaction costs paid in Sepolia ETH:
- Campaign creation: ~500k gas
- Token purchase: ~150k gas
- Trading: ~200k gas
- Vault operations: ~150-300k gas

## Glossary

- **APY**: Annual Percentage Yield - yearly return rate
- **Borrow Index**: Accumulator tracking interest accrual
- **ERC20**: Standard token interface
- **ERC4626**: Standard vault interface
- **Liquidity**: Available funds for trading/borrowing
- **Slippage**: Price difference between expected and executed
- **TVL**: Total Value Locked - total funds in protocol
- **Utilization**: Percentage of funds currently borrowed
- **VWAP**: Volume-Weighted Average Price

---

**Next Steps**: [Set Up Your Wallet →](wallet-setup.md)
