# Wallet Setup

To use RedCarpetHQ, you need a Web3 wallet configured for Base Sepolia.

## Supported Wallets

- **MetaMask** (Recommended)
- **WalletConnect** (Mobile-friendly)
- **Coinbase Wallet**
- **Rainbow Wallet**

## MetaMask Setup (Recommended)

### 1. Install MetaMask

**Desktop (Chrome/Firefox/Brave)**
1. Visit [metamask.io](https://metamask.io)
2. Click "Download"
3. Install browser extension
4. Create new wallet or import existing

**Mobile (iOS/Android)**
1. Download MetaMask from App Store or Google Play
2. Open app and create/import wallet
3. Secure your seed phrase (write it down!)

### 2. Add Base Sepolia Network

MetaMask may already have Base Sepolia Network. If not, add manually:

**Automatic (Recommended)**
1. Visit RedCarpetHQ platform
2. Click "Connect Wallet"
3. Approve network switch when prompted

**Manual Configuration**
1. Open MetaMask
2. Click network dropdown (top)
3. Click "Add Network" → "Add network manually"
4. Enter details:

```
Network Name: Base Sepolia
RPC URL: https://sepolia.base.org
Chain ID: 84532
Currency Symbol: ETH
Block Explorer: https://sepolia.basescan.org/
```

### 3. Get Base Sepolia ETH (Gas)

You need Base Sepolia to pay for transactions:

**Faucets (Free)**
- [List of Faucets](https://docs.base.org/base-chain/tools/network-faucets#network-faucets)

**Steps:**
1. Copy your wallet address from MetaMask
2. Visit a faucet
3. Paste address and request ETH
4. Wait 1-2 minutes for confirmation

**Amount Needed:** 0.1-0.5 ETH is sufficient for testing

### 4. Get Test USDC

RedCarpetHQ uses USDC for all transactions:

**Option A: Platform Faucet**
1. Connect wallet to RedCarpetHQ
2. Navigate to "Get Test USDC" (if available)
3. Request test tokens

**Option B: Admin Request**
1. Contact support with your wallet address
2. Receive test USDC directly

**Amount Provided:** Typically 10,000 test USDC

## WalletConnect Setup

### Mobile Wallets

1. **Install Supported Wallet**
   - MetaMask Mobile
   - Rainbow Wallet
   - Trust Wallet
   - Coinbase Wallet

2. **Configure Base Sepolia Network**
   - Follow wallet-specific instructions
   - Add Base Sepolia network details (see above)

3. **Connect to RedCarpetHQ**
   - Visit platform on mobile browser
   - Click "Connect Wallet"
   - Select "WalletConnect"
   - Scan QR code or approve connection

### Desktop with Mobile Wallet

1. Open RedCarpetHQ on desktop
2. Click "Connect Wallet" → "WalletConnect"
3. QR code appears
4. Open wallet app on mobile
5. Scan QR code
6. Approve connection

## Security Best Practices

### Seed Phrase Security

⚠️ **CRITICAL**: Your seed phrase is your wallet. Never share it!

**Do:**
- ✅ Write it down on paper
- ✅ Store in secure location (safe, vault)
- ✅ Create multiple backups
- ✅ Keep offline

**Don't:**
- ❌ Store in cloud (Google Drive, Dropbox)
- ❌ Take screenshots
- ❌ Share with anyone (even "support")
- ❌ Store in email or messages

### Transaction Safety

**Before Signing:**
1. ✅ Verify contract address
2. ✅ Check transaction details
3. ✅ Confirm amounts
4. ✅ Review gas fees

**Red Flags:**
- ❌ Unexpected token approvals
- ❌ Requests for seed phrase
- ❌ Suspicious contract addresses
- ❌ Extremely high gas fees

### Phishing Protection

**Verify URLs:**
- ✅ Check domain carefully
- ✅ Look for HTTPS lock icon
- ✅ Bookmark official site

**Common Scams:**
- Fake support messages
- Phishing websites (typosquatting)
- Fake airdrop announcements
- Impersonator accounts

## Wallet Management

### Multiple Accounts

Create separate accounts for different purposes:

1. **Main Account**: Primary operations
2. **Testing Account**: Experimental transactions
3. **Cold Storage**: Long-term holdings

**To Create New Account:**
1. Open MetaMask
2. Click account icon (top right)
3. Select "Create Account"
4. Name your account

### Switching Networks

**MetaMask:**
1. Click network dropdown (top)
2. Select "Base Sepolia" or other network
3. Confirm switch

**Important:** Always verify you're on Base Sepolia before transactions!

### Viewing Tokens

**Add Campaign Tokens:**
1. Open MetaMask
2. Click "Import tokens"
3. Enter token contract address
4. Token symbol and decimals auto-fill
5. Click "Add Custom Token"

**Token Addresses:**
Find on campaign page or in transaction details.

## Troubleshooting

### "Insufficient Funds" Error

**Cause:** Not enough Base Sepolia ETH for gas

**Solution:**
1. Check Base Sepolia ETH balance in MetaMask
2. Get more from faucet (see above)
3. Wait for faucet transaction to confirm

### "Wrong Network" Warning

**Cause:** Connected to wrong network

**Solution:**
1. Click network dropdown
2. Switch to Base Sepolia
3. Refresh page

### Transaction Stuck

**Cause:** Low gas price or network congestion

**Solution:**
1. Open MetaMask
2. Click "Activity" tab
3. Find pending transaction
4. Click "Speed Up" or "Cancel"
5. Approve with higher gas

### Can't Connect Wallet

**Cause:** Browser issues or extension conflicts

**Solution:**
1. Refresh page
2. Disable other wallet extensions
3. Clear browser cache
4. Try incognito/private mode
5. Restart browser

### Token Not Showing

**Cause:** Token not imported to wallet

**Solution:**
1. Import token manually (see above)
2. Or wait - some wallets auto-detect
3. Check on Base Sepolia BaseScan to verify balance

## Testing Your Setup

Before creating a campaign, test your setup:

### 1. Check Balances
- ✅ Sepolia ETH: >0.1 ETH
- ✅ Test USDC: >100 USDC

### 2. Test Transaction
- ✅ Send small USDC amount to yourself
- ✅ Verify transaction on Sepolia Etherscan
- ✅ Confirm gas payment worked

### 3. Connect to Platform
- ✅ Visit RedCarpetHQ
- ✅ Click "Connect Wallet"
- ✅ Approve connection
- ✅ See wallet address displayed

## Advanced: Hardware Wallets

For mainnet deployment, consider hardware wallets:

### Ledger
1. Connect Ledger device
2. Install Ethereum app
3. Connect via MetaMask
4. Enable "Blind signing" for smart contracts

### Trezor
1. Connect Trezor device
2. Connect via MetaMask
3. Approve connection
4. Sign transactions on device

**Benefits:**
- Private keys never leave device
- Physical confirmation required
- Maximum security for large amounts

## Mobile Considerations

### Data Usage
- Blockchain interactions use minimal data
- Most data from loading UI/images
- Safe to use on mobile networks

### Battery Impact
- Minimal battery usage
- Wallet apps run in background
- Close when not needed

### Screen Size
- Platform responsive on mobile
- Some features better on desktop
- Campaign creation recommended on desktop

## Next Steps

Wallet configured? Great! Now:

1. **[Apply for Screening](screening-process.md)** - Get whitelisted
2. **[Create Campaign](../campaigns/creating-campaigns.md)** - Launch your project
3. **[Explore Platform](../campaigns/campaign-lifecycle.md)** - Learn campaign mechanics

---

**Need Help?** Contact support@redcarpethq.org or visit [Troubleshooting](../support/troubleshooting.md)
