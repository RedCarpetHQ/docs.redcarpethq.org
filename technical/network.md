# Network Information

## Overview

RedCarpetHQ operates on an EVM-compatible Layer 2 network optimized for low-cost, high-speed transactions. This guide covers general network concepts and how to interact with the platform.

## Supported Networks

The platform runs on an EVM-compatible Layer 2. When you connect your wallet, the platform will automatically prompt you to switch to the correct network.

### Network Properties

- **Type**: EVM-compatible Layer 2
- **Consensus**: Proof-of-Stake
- **Currency Symbol**: ETH (for gas)
- **Payment Token**: USDC (6 decimals)

## Wallet Configuration

### Automatic Network Switch

The simplest way to configure your wallet:

1. Visit the RedCarpetHQ platform
2. Click "Connect Wallet"
3. Approve the network switch when prompted
4. Your wallet will automatically add the correct network parameters

### Manual Configuration

If automatic switching fails, you can add the network manually:

1. Open your wallet (MetaMask, etc.)
2. Click the network dropdown
3. Select "Add Network" → "Add network manually"
4. Enter the network details provided on the platform
5. Click "Save"

> **Note:** Exact RPC URLs, chain IDs, and explorer links are available on the platform dashboard and may be updated from time to time. Always refer to the platform for the current network configuration.

## Gas and Fees

### Transaction Costs

All blockchain transactions require gas, paid in the network's native token:

**Typical Operations:**
- Simple transfer: ~21,000 gas
- Token purchase: ~150,000 gas
- Create offer: ~200,000 gas
- Fill offer: ~200,000 gas
- Vault deposit: ~180,000 gas
- Borrow: ~250,000 gas

**Estimating Costs:**
```
Cost (ETH) = Gas Used × Gas Price (Gwei) / 1,000,000,000
```

### Optimizing Gas

**Best Practices:**
- Batch multiple operations when possible
- Claim multiple dividends in a single transaction
- Approve token spending limits once for repeated use
- Avoid peak congestion periods for non-urgent transactions

## Contract Addresses

### Global Protocol Contracts

**Core Protocol:**
- **Registry**
- **Campaign**
- **Market**
- **FeeDistributor**
- **Contest**
- **RiskOracle**
- **HybridPriceOracle**
- **DividendDistributor**

> **Note:** Contract addresses are available on the platform and updated regularly. Check the platform for current addresses.

### Per-Campaign Contracts

**Each campaign deploys:**
- Campaign contract
- CampaignToken (ERC-20)
- UnifiedVault
- DividendDistributor

**Finding Addresses:**
- View on campaign page
- Query via platform API
- Available in transaction history

## Block Explorers

You can verify transactions using any compatible block explorer:

1. Copy your transaction hash from your wallet
2. Paste it into the block explorer
3. View confirmation status, gas used, and token transfers

> **Note:** Block explorer URLs are provided on the platform dashboard.

## Network Status

### Monitoring

**Check Network Health:**
- Block explorer status pages
- RPC provider status pages
- Platform status page
- Community channels

**Common Issues:**
- Network congestion (rare on L2s)
- RPC provider downtime
- Slow block times

### Troubleshooting

**If Transactions Fail:**
1. Check network status on the platform
2. Verify gas settings in your wallet
3. Ensure sufficient ETH for gas
4. Try refreshing the page and reconnecting
5. Clear pending transactions in your wallet

## Security

### Verifying Transactions

Always verify transaction details before signing:
- ✅ Check the recipient address
- ✅ Confirm token amounts
- ✅ Review gas fees
- ✅ Verify contract interactions

### Wallet Safety

- Never share your seed phrase
- Use hardware wallets for large amounts
- Verify URLs before connecting
- Be cautious of phishing attempts

## Related Resources

- [Wallet Setup](../getting-started/wallet-setup.md)
- [Smart Contracts](contracts.md)
- [Security & Audits](security.md)
- [Troubleshooting](../support/troubleshooting.md)

---

**Need Help?**

Contact our support team at support@redcarpethq.org.
