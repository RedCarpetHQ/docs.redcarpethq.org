# Network Information

## Overview

RedCarpetHQ operates exclusively on the BNB Chain Testnet. This guide covers network details, configuration, and how to interact with the platform.

## Network Details

### BNB Chain Testnet

**Network Information:**
- **Network Name:** BNB Chain Testnet
- **Chain ID:** 97
- **Currency Symbol:** tBNB
- **Block Explorer:** https://testnet.bscscan.io
- **RPC URL:** https://data-seed-prebsc-1-s1.binance.org:8545

**Why BNB Chain Testnet?**
- Stable testnet
- Long-term support
- Active community
- Proof-of-Stake consensus
- Similar to mainnet

## Adding BNB Chain Testnet to MetaMask

### Automatic Addition

**Via Chainlist:**
1. Visit https://chainlist.org
2. Search for "BNB Chain Testnet"
3. Click "Add to MetaMask"
4. Approve in MetaMask

### Manual Addition

**Step-by-Step:**
1. Open MetaMask
2. Click network dropdown
3. Select "Add Network"
4. Click "Add a network manually"
5. Enter details:
   - **Network Name:** BNB Chain Testnet
   - **New RPC URL:** https://data-seed-prebsc-1-s1.binance.org:8545
   - **Chain ID:** 97
   - **Currency Symbol:** tBNB
   - **Block Explorer:** https://testnet.bscscan.io
6. Click "Save"

## Getting Test ETH

### BNB Chain Testnet Faucets

**Recommended Faucets:**

**1. BNB Chain Testnet Faucet**
- URL: https://www.bnbchain.org/en/testnet-faucet
- Requires: BNB Chain account
- Amount: 0.3 tBNB per day

### Using Faucets

**General Process:**
1. Visit faucet website
2. Connect wallet or enter address
3. Complete verification (if required)
4. Request test ETH
5. Wait for transaction (1-2 minutes)
6. Check wallet balance

**Tips:**
- Use multiple faucets if needed
- Wait 24 hours between requests
- Don't abuse faucets
- Share with community if you have extra

## Getting Test USDC

### BNB Chain Testnet USDC Faucet

**Official Faucet:**
- Available on RedCarpetHQ platform
- Navigate to "Get Test USDC"
- Connect wallet
- Request test USDC
- Receive 1,000 USDC per request

**USDC (test) Contract Address:**
- `0xd991bF388cA02e60403896c6D1d81308C13d5459`

**Adding USDC to Wallet:**
1. Open MetaMask
2. Click "Import tokens"
3. Enter USDC contract address
4. Token symbol: USDC
5. Decimals: 6
6. Click "Add Custom Token"

## Contract Addresses

### Global Contracts

**Core Protocol:**
- **FeeDistributor:** `0x[ADDRESS]`
- **RiskOracleV3:** `0x[ADDRESS]`
- **Market:** `0x[ADDRESS]`
- **Contest:** `0x[ADDRESS]`
- **HybridPriceOracle:** `0x[ADDRESS]`

**Tokens:**
- **USDC (testnet):** `0xd991bF388cA02e60403896c6D1d81308C13d5459`

> **Note:** Contract addresses are available on the platform and updated regularly. Check the platform for current addresses.

### Per-Campaign Contracts

**Each campaign deploys:**
- Campaign contract
- CampaignToken (ERC-20)
- UnifiedVaultV3
- DividendDistributor

**Finding Addresses:**
- View on campaign page
- Check BNB Chain Testnet Explorer
- Query via API
- Available in transaction history

## Block Explorer

### BNB Chain Testnet Explorer

**URL:** https://testnet.bscscan.com

**Features:**
- Transaction history
- Contract verification
- Token tracking
- Address analytics
- Gas tracker

**How to Use:**
1. Enter address/transaction hash
2. View details
3. Check contract code
4. Monitor activity
5. Export data

### Verifying Transactions

**Check Your Transactions:**
1. Copy transaction hash from wallet
2. Paste into BNB Chain Testnet Explorer
3. View transaction details
4. Confirm status
5. Check gas used

## RPC Endpoints

### Public RPC Providers

**Infura:**
- URL: https://bsc-testnet.infura.io/v3/YOUR-API-KEY
- Free tier available
- Reliable and fast
- Sign up at infura.io

### Rate Limits

**Free Tier Limits:**
- Infura: 100,000 requests/day
- Alchemy: 300M compute units/month
- QuickNode: Varies by plan
- Public: No guarantees

## Gas and Fees

### Gas Prices

**Typical Gas Prices:**
- Low: 1-2 Gwei
- Average: 2-5 Gwei
- High: 5-10 Gwei

**Gas Costs:**
- Simple transfer: ~21,000 gas
- Token swap: ~50,000-100,000 gas
- Complex DeFi: 100,000-300,000 gas

**Estimating Costs:**
```
Cost (ETH) = Gas Used × Gas Price (Gwei) / 1,000,000,000
```

**Example:**
- Gas used: 100,000
- Gas price: 5 Gwei
- Cost: 0.0005 ETH (~$0.001 at testnet)

### Optimizing Gas

**Save on Gas:**
- Batch transactions when possible
- Use lower gas prices for non-urgent
- Avoid peak times
- Approve tokens once
- Monitor gas tracker

## Network Status

### Monitoring

**Check Network Health:**
- BNB Chain Testnet Explorer status page
- Etherscan gas tracker
- RPC provider status pages
- Community channels

**Common Issues:**
- Network congestion
- RPC downtime
- Faucet unavailability
- Slow block times

### Troubleshooting

**If Transactions Fail:**
1. Check network status
2. Verify gas settings
3. Ensure sufficient ETH
4. Try different RPC
5. Clear pending transactions

## Development Tools

### For Developers

**Useful Tools:**
- Hardhat (development framework)
- Foundry (testing framework)
- Remix (online IDE)
- Tenderly (debugging)
- OpenZeppelin (contracts)

**BNB Chain Testnet Configuration:**
```javascript
// Hardhat config example
bsc-testnet: {
  url: "https://bsc-testnet.infura.io/v3/YOUR-API-KEY",
  chainId: 97,
  accounts: [PRIVATE_KEY]
}
```

## Future Plans

### Mainnet Migration

**When Ready:**
- Thorough testing complete
- Security audits passed
- Community feedback incorporated
- Gradual rollout planned

**Migration Process:**
- Announcement in advance
- User migration guide
- Support during transition
- Testnet remains available

## Frequently Asked Questions

**Q: Why use a testnet?**
A: Testnets allow safe testing without real money at risk. Perfect for development and user testing.

**Q: Can I use real money on BNB Chain Testnet?**
A: No, BNB Chain Testnet uses test ETH and test USDC with no real value.

**Q: How do I get more test ETH?**
A: Use the faucets listed above. Wait 24 hours between requests.

**Q: What if I run out of test ETH?**
A: Request more from faucets or ask in community channels.

**Q: Will my testnet tokens transfer to mainnet?**
A: No, testnet and mainnet are completely separate. Testnet tokens have no value.

**Q: Is BNB Chain Testnet the same as BNB Chain mainnet?**
A: Technically similar but separate network. Same tools and wallets work on both.

**Q: How long will RedCarpetHQ stay on testnet?**
A: Until thoroughly tested and ready for mainnet. Timeline TBA.

## Related Resources

- [Wallet Setup](getting-started/wallet-setup.md)
- [Smart Contracts](technical/contracts.md)
- [Security & Audits](technical/security.md)
- [Troubleshooting](support/troubleshooting.md)

---

**Need Help?**

If you have questions about network configuration, contact our support team at support@redcarpethq.org.
