# Platform Overview

## What is RedCarpetHQ?

RedCarpetHQ is the **first AI-powered exchange for tokenized entertainment profits**. We transform film, television, and entertainment IP into tradeable, yield-bearing digital assets — complete with native secondary markets, automated DeFi lending, algorithmic risk pricing, and on-chain profit distribution.

We are not a crowdfunding platform. We are financial infrastructure for an entirely new asset class.

---

## The Core Idea

Traditional entertainment financing is:
- **Opaque** — Revenue waterfalls are hidden inside studio accounting
- **Illiquid** — Investors wait years with no exit
- **Gatekept** — Only studios and accredited investors can participate

RedCarpetHQ replaces this with:
- **Transparent** — Every transaction, dividend, and risk score is on-chain
- **Liquid** — Trade positions minutes after a campaign graduates
- **Permissionless** — Anyone with USDC can invest, lend, or trade

## How It Works

### For IP Producers

1. **Apply for Screening** — Get whitelisted as a verified producer
2. **Launch Your IP Token** — Set Floor/Ceiling targets, token price, and timeline
3. **Raise Capital** — Global investors back your project with USDC
4. **Graduate to Market** — Successful campaigns unlock trading, lending, and contests
5. **Distribute Profits** — Revenue flows directly to token holders via smart contracts

**Why it works for producers**: Zero platform fees, passive income from trading fees (10%), and a community of financially invested stakeholders.

### For Entertainment IP Investors

1. **Discover Projects** — Browse active campaigns with due diligence data
2. **Purchase Tokens** — Invest in projects with USDC; receive ERC-20 tokens
3. **Trade or Hold** — Sell on the marketplace anytime, or hold for dividends
4. **Earn Yield** — Lend USDC in token-specific vaults for APY
5. **Claim Profits** — When films generate revenue, claim your pro-rata share

**Why it works for investors**: Multiple yield paths (trading, lending, dividends, contests), instant liquidity, and full transparency.

---

## Core Features

### 🎬 Tokenized IP Launchpad
Each successful campaign mints a unique ERC-20 token representing economic participation in the project. No pre-mine. No team allocation. Fair distribution.

### 💰 Embedded DeFi (UnifiedVault V3)
Every token ships with an ERC-4626 compliant vault:
- **Deposit USDC** → Auto-allocated 80% Lending Pool / 20% Stability Pool
- **Earn APY** → Interest from borrowers, auto-compounding
- **Borrow** → Use tokens as collateral for USDC loans
- **Single-click UX** — Complexity hidden; wallets display balances automatically

### 📈 VWAP Marketplace
- **Escrow-Based Trading** — Atomic swaps, no front-running, no MEV
- **Volume-Weighted Average Price** — Manipulation-resistant price discovery
- **2.5% Fee** — Distributed 40/40/10/10 (Treasury / Contests / Vault / Producer)

### 🤖 AI Risk Oracle (RiskOracleV3)
Continuously monitors every token and assigns a dynamic tier:
- **GREEN** — Healthy: 50% collateral factor, 90% lender share
- **YELLOW** — Caution: 40% collateral factor, 85% lender share
- **RED** — Risk: 30% collateral factor, 75% lender share

Parameters update automatically based on price integrity, wash trading, and vault utilization.

### 💸 Automated Profit Distribution
Producers deposit revenue (streaming, box office, licensing) into the DividendDistributor. Smart contracts snapshot all holders and enable pro-rata claims — with no expiration.

---

## Platform Architecture

### Smart Contract Layer

| Contract | Purpose |
|---|---|
| **Campaign** | All-or-nothing fundraising with Floor/Ceiling |
| **Market** | Escrow-based P2P trading + Flash Liquidation |
| **UnifiedVault** | ERC-4626 lending/stability per token |
| **FeeDistributor** | Ecosystem revenue sharing |
| **Contest** | Trading volume tracking + rewards |
| **RiskOracle** | Real-time risk tier assessment |
| **HybridPriceOracle** | VWAP price feeds + staleness tracking |
| **DividendDistributor** | Revenue distribution to holders |

### Frontend Application

- **Next.js 14** with React + TypeScript
- **Wallet Integration**: MetaMask, WalletConnect, Coinbase Wallet
- **Real-time**: Price charts, vault APY, risk tiers, contest leaderboards
- **Multi-role UX**: Separate dashboards for producers, traders, and lenders

---

## Key Benefits

### For Producers

- **Global Capital Pool** — Reach DeFi-native investors worldwide, not just your network
- **Zero Platform Fees** — Keep 100% of funds raised
- **Passive Income** — Earn 10% of all secondary trading fees forever
- **Creative Control** — Token holders participate economically, not creatively
- **Transparent Distribution** — Revenue sharing via immutable smart contracts

### For Investors

- **Multiple Yield Paths** — Trading, lending APY, dividends, and contest rewards
- **Immediate Liquidity** — Trade positions on the marketplace from day one
- **Non-Correlated Asset** — Entertainment revenue ≠ crypto market cycles
- **Low Minimums** — No accredited investor requirement; invest any amount
- **Full Transparency** — On-chain budgets, revenue, and risk scores

### For the Ecosystem

- **Algorithmic Trust** — AI risk oracle replaces manual compliance
- **Self-Sustaining Fees** — Trading fees fund contests, which drive volume, which generates fees
- **Composable by Design** — ERC-4626 vaults integrate with any DeFi aggregator
- **4-Layer Protection** — Collateral → Stability Pool → Insurance Fund → Treasury

---

## Platform Principles

### Transparency
All campaign data, transactions, token movements, and revenue distributions are recorded on-chain and publicly verifiable.

### Security
- Battle-tested smart contracts with ReentrancyGuard
- Circuit breakers for extreme market conditions
- Multi-layer liquidation protection
- Screener-based quality control without centralization

### Fairness
- Equal access to trading and yield opportunities
- Anti-manipulation via VWAP pricing and wash-trade detection
- Pro-rata reward distribution across all mechanisms
- No pre-mine, no insider allocations

### Sustainability
- Fee structure supports long-term protocol development
- Risk-tiered interest rates adapt to market health
- Producer incentives align with token holder success
- Insurance fund grows automatically during volatile periods

---

## Getting Started

Choose your path:

**🎬 [I am a producer →](producers/why-list-here.md)**

**💰 [I am an investor →](investors/why-tokenized-ip.md)**

**🏢 [I am evaluating the platform →](platform-investors/executive-summary.md)**

Or dive into the fundamentals:

1. **[Key Concepts](key-concepts.md)** — Learn the terminology
2. **[Wallet Setup](wallet-setup.md)** — Configure your Web3 wallet
3. **[Screening Process](screening-process.md)** — Get whitelisted as a producer

---

## Platform Status

- **Network**: EVM-compatible Layer 2
- **Status**: Live — All core features operational
- **Payment Token**: USDC (6 decimals)
- **Supported Wallets**: MetaMask, WalletConnect, Coinbase Wallet

## Need Help?

- **Email**: support@redcarpethq.org
- **Screening**: screening@redcarpethq.org
- **Twitter**: [@RedCarpetHQ](https://twitter.com/redcarpethq)

---

*Last Updated: June 2026 | Testnet Live | Mainnet Planned Q3 2026*
