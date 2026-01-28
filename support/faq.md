# Frequently Asked Questions

## General Questions

### What is RedCarpetHQ?

RedCarpetHQ is a decentralized platform for movie producers to raise funds through tokenized campaigns. Supporters receive tradable ERC20 tokens that can be used for trading, DeFi activities, and dividend distributions.

### Is RedCarpetHQ live?

Yes, on Ethereum Sepolia testnet. Mainnet launch coming after thorough testing and audits.

### What blockchain does it use?

Currently Ethereum Sepolia testnet. Mainnet deployment planned on Ethereum.

### What tokens are supported?

USDC for payments. Each campaign creates its own ERC20 token.

### Is it safe?

Smart contracts are battle-tested and follow security best practices. However, DeFi always carries risks. Never invest more than you can afford to lose.

## For Producers

### How do I create a campaign?

1. Get whitelisted by screeners (if screening enabled)
2. Connect wallet with Sepolia ETH
3. Click "Create Campaign"
4. Fill in all details
5. Deploy to blockchain

See [Creating Campaigns](../campaigns/creating-campaigns.md) for detailed guide.

### Do I need approval to create campaigns?

If screening is enabled, yes. Apply through screening@redcarpethq.org. If disabled, anyone can create campaigns.

### What are the fees?

**Campaign Creation:** Only gas fees (~$25 on mainnet)  
**Trading Fees:** 2.5% of trade value  
**Producer Share:** 10% of trading fees returned to you  
**Dividend Fees:** None (only gas)  
**Vault Fees:** None (only gas)

### Can I cancel my campaign?

Yes, but supporters get full refunds. Only cancel if absolutely necessary.

### How long can campaigns run?

Maximum 270 days (9 months) from initial start, including extensions.

### Can I extend my campaign?

Yes, once by default. Must be within grace period after deadline.

### What happens if I don't reach my floor?

Campaign fails. All supporters get full refunds. No fees charged.

### When do I get the funds?

After campaign succeeds and you finalize it. Funds sent to your specified recipient address.

### Can I change campaign details after launch?

Limited changes:
- ✅ End time (before deadline)
- ✅ Funds recipient
- ❌ Token name/symbol
- ❌ Token price
- ❌ Floor/ceiling (after start)

### How do I distribute dividends?

1. Navigate to campaign management
2. Go to "Dividend" tab
3. Create new round with USDC amount
4. Take snapshot
5. Activate round
6. Holders claim their share

See [Dividend Distribution](../finance/dividends.md) for details.

## For Supporters

### How do I back a campaign?

1. Connect wallet to platform
2. Browse campaigns
3. Click "Back This Project"
4. Enter USDC amount
5. Approve and confirm transaction
6. Receive tokens instantly

### What do I get for backing?

- ERC20 tokens representing your stake
- Ability to trade tokens on marketplace
- Use tokens as collateral for borrowing
- Receive dividends if film generates revenue
- Participate in trading contests

### Can I get a refund?

**Yes, if:**
- Campaign fails (doesn't reach floor)
- Campaign cancelled by creator/screener

**No, if:**
- Campaign succeeds and is finalized
- You already traded your tokens

### When can I trade my tokens?

After campaign successfully concludes and token graduates. Not during active campaign.

### How do I trade tokens?

1. Visit marketplace
2. Create buy/sell offer
3. Or fill existing offers
4. Tokens/USDC escrowed safely
5. Atomic swap on execution

See [Marketplace Overview](../trading/marketplace.md).

### What are trading contests?

6-hour competitions where traders compete for fee rewards. Must trade at least 15,000 USDC to qualify. Rewards distributed pro-rata by volume.

### How do I earn interest?

1. Wait for token to graduate
2. Visit finance section
3. Deposit USDC to token's vault
4. Receive vault shares
5. Earn interest from borrowers
6. Withdraw anytime (if liquidity available)

### Can I borrow against my tokens?

Yes, after graduation:
1. Deposit tokens as collateral
2. Borrow up to collateral factor (50% for GREEN tier)
3. Pay interest on borrowed amount
4. Repay anytime to unlock collateral

### What if I get liquidated?

If your collateral value drops below liquidation threshold:
- Stability pool repays your debt
- Your collateral is seized
- You lose collateral but debt is cleared
- Maintain safe collateral ratio to avoid this

### How do I claim dividends?

1. Visit campaign page
2. Go to "Dividends" section
3. See available rounds
4. Click "Claim" on eligible rounds
5. Confirm transaction
6. Receive USDC

## Technical Questions

### What wallet do I need?

MetaMask (recommended), WalletConnect, Coinbase Wallet, or Rainbow Wallet.

### How do I get Sepolia ETH?

Use faucets:
- sepoliafaucet.com
- Alchemy Sepolia Faucet
- Infura Sepolia Faucet

See [Wallet Setup](../getting-started/wallet-setup.md).

### How do I get test USDC?

Contact support or use platform faucet (if available).

### What are gas fees?

Transaction costs paid in ETH. Varies by network congestion. On Sepolia testnet, ETH is free from faucets.

### Why is my transaction pending?

- Network congestion
- Gas price too low
- Nonce issues

Try speeding up or cancelling in MetaMask.

### Can I use mobile?

Yes, platform is mobile-responsive. Use MetaMask Mobile or WalletConnect-compatible wallets.

## Financial Questions

### Are tokens securities?

Consult your legal advisor. Regulations vary by jurisdiction. Platform does not provide legal advice.

### Are dividends guaranteed?

No. Dividends depend on film revenue. Not all films generate profit.

### What are the risks?

- **Smart contract risk**: Bugs or exploits
- **Market risk**: Token price volatility
- **Liquidation risk**: If borrowing
- **Project risk**: Film may not succeed
- **Regulatory risk**: Laws may change

### Can I lose money?

Yes. All investments carry risk. Never invest more than you can afford to lose.

### Are there taxes?

Likely yes, depending on jurisdiction. Consult tax advisor. Keep records of all transactions.

### What's the expected return?

No guaranteed returns. Depends on:
- Film success and revenue
- Token price appreciation
- Trading profits
- Lending interest (if providing liquidity)

## Platform Questions

### Who runs RedCarpetHQ?

Decentralized platform with smart contracts on Ethereum. Core team handles development and operations.

### Is it open source?

Smart contracts are verified and public on Etherscan. Frontend code availability TBD.

### How is the platform funded?

- 40% of trading fees to protocol treasury
- Used for development, security, operations

### Can the platform be shut down?

Smart contracts are immutable and on blockchain. Frontend can be accessed via IPFS if needed. Truly decentralized.

### What if there's a bug?

- Report immediately to security@redcarpethq.org
- Emergency pause mechanisms in place
- Insurance fund for bad debt

### How do I report issues?

- **Security**: security@redcarpethq.org
- **Support**: support@redcarpethq.org
- **General**: hello@redcarpethq.org

## Campaign-Specific Questions

### What's a floor and ceiling?

**Floor**: Minimum funding to succeed  
**Ceiling**: Maximum funding accepted

Campaign must reach floor to proceed. Ceiling is optional cap.

### What's overage?

How campaign handles funds above floor:
- **No Overage**: Stops at floor
- **Unlimited**: Accepts until deadline
- **Ceiling**: Accepts up to ceiling

### What's a grace period?

24-hour window after deadline if floor not reached. Creator can extend or finalize as failed.

### What's graduation?

When successful campaign is finalized:
- Token supply locked
- Trading enabled
- DeFi features activated
- Full platform access

### Can campaigns be cancelled?

Yes, by:
- Creator (anytime, but supporters get refunds)
- Screener (if terms violated)

### What happens to failed campaigns?

All supporters get full refunds. No fees charged. Token supply remains locked.

## DeFi Questions

### What's ERC4626?

Industry-standard vault interface. Makes vaults compatible with all DeFi tools and aggregators.

### What's a collateral factor?

Maximum you can borrow against collateral. Example: 50% means you can borrow $500 against $1,000 collateral.

### What's a liquidation threshold?

When your position can be liquidated. Example: 60% means liquidation occurs if debt reaches 60% of collateral value.

### What are risk tiers?

GREEN (healthy), YELLOW (moderate), RED (high risk). Affects collateral factors, interest splits, and supply caps.

### What's utilization?

Percentage of lending pool currently borrowed. Higher utilization = higher interest rates.

### What's VWAP?

Volume-Weighted Average Price. Fair price calculation resistant to manipulation.

### What's a stability pool?

20% of vault deposits used for automatic liquidations. Protects lenders from bad debt.

### What's an insurance fund?

Safety buffer funded by interest. Covers bad debt if stability pool insufficient.

## Trading Questions

### How does the marketplace work?

Escrow-based. Sellers lock tokens, buyers lock USDC. Atomic swaps on execution. No order book.

### What's the trade fee?

2.5% of trade value, distributed:
- 40% Protocol
- 40% Contest
- 10% Vault
- 10% Producer

### Can I cancel my offer?

Yes, anytime before it's filled. Funds returned immediately.

### What's slippage?

Difference between expected and executed price. Not applicable to escrow offers (price is fixed).

### Can I trade during campaign?

No. Trading activates only after successful graduation.

### Are there trading limits?

Minimum trade size: 1 USDC worth of tokens. No maximum.

## Contest Questions

### How do contests work?

6-hour epochs. Track buy-side USDC volume. Qualify with 15,000 USDC minimum. Win pro-rata share of fee pool.

### How do I qualify?

Trade at least 15,000 USDC (buy-side) in a single 6-hour epoch.

### When are contests?

Continuous 6-hour epochs starting when token graduates. 4 epochs per day.

### How are rewards calculated?

Pro-rata by volume:
```
Your Reward = (Your Volume / Total Volume) × Prize Pool
```

### When can I claim?

After epoch is finalized. Claim anytime after (no expiration).

### What's the first claimer bounty?

First person to claim in an epoch gets 1% bonus from prize pool.

## Security Questions

### What if there's a hack?

- Emergency pause mechanisms
- Insurance fund for bad debt
- Incident response plan

### How do I stay safe?

- ✅ Verify URLs
- ✅ Use hardware wallets for large amounts
- ✅ Never share private keys
- ✅ Beware of phishing
- ✅ Start small to test

### What's a circuit breaker?

Automatic pause triggered by:
- Excessive bad debt
- Extreme utilization
- Severe price staleness

Protects user funds in emergencies.

## Support

### How do I get help?

- **Documentation**: You're reading it!
- **Email**: support@redcarpethq.org
- **Twitter**: [@RedCarpetHQ](https://twitter.com/redcarpethq)

### Where can I learn more?

- [Platform Overview](../getting-started/overview.md)
- [Key Concepts](../getting-started/key-concepts.md)
- [Creating Campaigns](../campaigns/creating-campaigns.md)
- [Design Rationale](../business-logic/design-rationale.md)

---

**Still have questions?** Contact support@redcarpethq.org
