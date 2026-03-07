# Platform Overview

## What is RedCarpetHQ?

RedCarpetHQ is a decentralized film financing platform that combines traditional crowdfunding with Web3 technology. We enable movie producers to raise capital through tokenized campaigns while providing supporters with tradable tokens, DeFi opportunities, and potential revenue sharing.

## Core Features

### 🎬 Tokenized Fundraising
Launch campaigns that issue ERC20 tokens to backers. Each token represents a stake in your project and can be traded, used as collateral, or held for dividends.

### 💰 DeFi Integration
- **Lending Pools**: Token holders can deposit USDC to earn interest
- **Borrowing**: Use campaign tokens as collateral to borrow USDC
- **ERC4626 Vaults**: Industry-standard vault architecture for each token

### 📈 Trading Marketplace
- **Peer-to-Peer Trading**: Buy and sell campaign tokens
- **Escrow Protection**: All trades secured by smart contracts
- **Trading Contests**: Compete for rewards every 6 hours

### 💸 Revenue Distribution
- **Dividend System**: Share film revenues with token holders
- **Snapshot-Based**: Fair distribution using blockchain technology
- **Multi-Round Support**: Distribute profits multiple times

## How It Works

### For Producers

1. **Get Whitelisted**: Apply for screening approval
2. **Create Campaign**: Set funding goals, token details, and timeline
3. **Launch & Promote**: Share your campaign with the community
4. **Reach Goals**: Collect funds when campaign succeeds
5. **Manage Post-Launch**: Update supporters, distribute dividends, manage tokens

### For Supporters

1. **Discover Projects**: Browse active campaigns
2. **Purchase Tokens**: Back projects with USDC
3. **Trade & Earn**: Trade tokens or provide liquidity
4. **Receive Dividends**: Get paid when films generate revenue

## Platform Architecture

### Smart Contract Layer
All operations are governed by battle-tested smart contracts on Base Sepolia:

- **Campaign Contract**: Manages fundraising campaigns
- **Market Contract**: Handles token trading
- **UnifiedVaultV3**: ERC4626 lending pools per token
- **FeeDistributor**: Distributes protocol fees
- **Contest Contract**: Trading competition rewards
- **DividendDistributor**: Revenue sharing system

### Frontend Application
Modern Next.js application with:
- Wallet integration (MetaMask, WalletConnect)
- Real-time price charts
- Campaign management dashboard
- Trading interface
- Finance tools

## Key Benefits

### For Producers

✅ **Global Reach**: Access worldwide supporters  
✅ **Flexible Funding**: Choose floor/ceiling targets and overage handling  
✅ **Token Liquidity**: Supporters can trade tokens on the marketplace  
✅ **DeFi Tools**: Leverage lending/borrowing for project needs  
✅ **Revenue Sharing**: Easy dividend distribution to token holders  
✅ **Community Building**: Engage supporters through updates and surveys  

### For Supporters

✅ **Tradable Tokens**: Exit positions or increase holdings  
✅ **Earning Opportunities**: Lend USDC, trade tokens, win contests  
✅ **Revenue Participation**: Receive dividends from successful films  
✅ **Transparent Operations**: All transactions on-chain  
✅ **Risk Management**: Multiple safety mechanisms protect investments  

## Platform Principles

### Transparency
All campaign data, transactions, and token movements are recorded on-chain and publicly verifiable.

### Security
- Battle-tested smart contracts
- Multi-layer risk management
- Circuit breakers for extreme conditions
- Screener-based quality control

### Fairness
- Equal access to trading opportunities
- Anti-manipulation mechanisms
- Fair price discovery through VWAP oracle
- Pro-rata reward distribution

### Sustainability
- Fee structure supports long-term platform development
- Risk-tiered interest rates protect lenders
- Producer incentives align with token holder success

## Getting Started

Ready to launch your film project on RedCarpetHQ?

1. **[Understand Key Concepts](key-concepts.md)** - Learn platform terminology
2. **[Set Up Your Wallet](wallet-setup.md)** - Configure MetaMask for Base Sepolia
3. **[Apply for Screening](screening-process.md)** - Get whitelisted as a producer
4. **[Create Your Campaign](../campaigns/creating-campaigns.md)** - Launch your first campaign

## Platform Status

- **Network**: Base Sepolia
- **Status**: Live (Testnet)
- **Payment Token**: USDC (6 decimals)
- **Supported Wallets**: MetaMask, WalletConnect

## Need Help?

- **Documentation**: You're reading it!
- **FAQ**: [Common questions answered](../support/faq.md)
- **Support**: support@redcarpethq.org

---

**Next Steps**: [Learn Key Concepts →](key-concepts.md)
