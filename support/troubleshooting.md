# Troubleshooting

Common issues and solutions for RedCarpetHQ users.

## Wallet Issues

### Cannot Connect Wallet

**Symptoms:**
- "Connect Wallet" button not working
- Wallet popup doesn't appear
- Connection fails immediately

**Solutions:**

1. **Check Browser Extension**
   ```
   ✓ MetaMask installed
   ✓ Extension enabled
   ✓ Not in private/incognito mode
   ✓ No conflicting extensions
   ```

2. **Refresh and Retry**
   - Refresh page (Cmd/Ctrl + R)
   - Clear cache (Cmd/Ctrl + Shift + R)
   - Try different browser
   - Restart browser

3. **Check Network**
   - Switch to Sepolia in MetaMask
   - Verify RPC connection
   - Try different RPC endpoint

4. **Disable Other Wallets**
   - Only one wallet extension active
   - Disable Coinbase Wallet, etc.
   - Restart browser after disabling

### Wrong Network

**Symptoms:**
- "Wrong network" warning
- Transactions fail
- Cannot see campaigns

**Solutions:**

1. **Switch to Sepolia**
   ```
   MetaMask → Network dropdown → Sepolia
   ```

2. **Add Sepolia Manually**
   ```
   Network Name: Sepolia
   RPC URL: https://sepolia.infura.io/v3/YOUR_KEY
   Chain ID: 11155111
   Currency: ETH
   Explorer: https://sepolia.etherscan.io
   ```

3. **Auto-Switch**
   - Platform will prompt network switch
   - Approve in MetaMask
   - Refresh page

### Insufficient Funds

**Symptoms:**
- "Insufficient funds" error
- Transaction fails
- Cannot complete action

**Solutions:**

1. **Check Balances**
   ```
   Sepolia ETH: For gas fees
   USDC: For purchases/trades
   Tokens: For selling/collateral
   ```

2. **Get Sepolia ETH**
   - Use faucets (see [Wallet Setup](../getting-started/wallet-setup.md))
   - Request from support
   - Ask in Discord

3. **Get Test USDC**
   - Platform faucet (if available)
   - Contact support
   - Community requests

## Transaction Issues

### Transaction Pending Forever

**Symptoms:**
- Transaction stuck in "Pending"
- Hours without confirmation
- Cannot make new transactions

**Solutions:**

1. **Check Network Status**
   - Visit sepolia.etherscan.io
   - Check for network issues
   - Verify block production

2. **Speed Up Transaction**
   ```
   MetaMask → Activity → Pending Transaction
   → Click "Speed Up"
   → Increase gas price
   → Confirm
   ```

3. **Cancel Transaction**
   ```
   MetaMask → Activity → Pending Transaction
   → Click "Cancel"
   → Confirm with higher gas
   ```

4. **Reset Account (Last Resort)**
   ```
   MetaMask → Settings → Advanced
   → Reset Account
   ⚠️ Only if nothing else works
   ```

### Transaction Failed

**Symptoms:**
- Red "Failed" status
- Error message
- Funds not moved

**Common Errors:**

**1. "Out of Gas"**
```
Cause: Gas limit too low
Solution: Increase gas limit
Try: 1.5x the estimated amount
```

**2. "Insufficient Allowance"**
```
Cause: Token not approved
Solution: Approve token first
Then: Retry transaction
```

**3. "Execution Reverted"**
```
Cause: Smart contract rejection
Reasons:
- Campaign not active
- Offer already filled
- Insufficient balance
- Invalid parameters

Solution: Check conditions and retry
```

**4. "Nonce Too Low"**
```
Cause: Transaction ordering issue
Solution: Reset account in MetaMask
Or: Wait for pending tx to clear
```

### High Gas Fees

**Symptoms:**
- Gas cost seems excessive
- Transaction too expensive

**Solutions:**

1. **Wait for Lower Gas**
   - Check gas prices: etherscan.io/gastracker
   - Wait for off-peak hours
   - Not urgent? Wait.

2. **Adjust Gas Settings**
   ```
   MetaMask → Edit Gas
   → Set to "Low" priority
   → Accept slower confirmation
   ```

3. **Batch Transactions**
   - Combine multiple actions
   - Claim multiple dividends at once
   - Reduce transaction count

## Campaign Issues

### Cannot Create Campaign

**Symptoms:**
- Create button disabled
- Transaction fails
- Error message

**Solutions:**

1. **Check Whitelist Status**
   ```
   If screening enabled:
   - Must be whitelisted
   - Apply at screening@redcarpethq.com
   - Wait for approval
   ```

2. **Verify Requirements**
   ```
   ✓ Sufficient Sepolia ETH (~0.1)
   ✓ Connected to Sepolia network
   ✓ All fields filled correctly
   ✓ Token symbol unique
   ✓ Dates valid (future times)
   ```

3. **Check Form Validation**
   - Floor > 0
   - Ceiling > Floor (if set)
   - Start time < End time
   - End time < 270 days from start
   - Valid wallet addresses

### Cannot Purchase Tokens

**Symptoms:**
- Purchase button disabled
- Transaction fails
- Tokens not received

**Solutions:**

1. **Check Campaign Status**
   ```
   ✓ Campaign is ACTIVE
   ✓ Between start and end time
   ✓ Not reached ceiling
   ✓ Not cancelled
   ```

2. **Verify USDC**
   ```
   ✓ Have enough USDC
   ✓ Approved Campaign contract
   ✓ Correct USDC token address
   ```

3. **Check Amount**
   ```
   ✓ Amount > 0
   ✓ Amount doesn't exceed ceiling
   ✓ Valid number format
   ```

### Cannot Claim Refund

**Symptoms:**
- Refund button disabled
- Transaction fails
- USDC not received

**Solutions:**

1. **Verify Eligibility**
   ```
   ✓ Campaign FAILED or CANCELLED
   ✓ You purchased tokens
   ✓ Haven't claimed yet
   ✓ Have purchase record
   ```

2. **Check Contract**
   ```
   ✓ Campaign contract has USDC
   ✓ Refunds enabled
   ✓ Your address correct
   ```

3. **Retry Transaction**
   - Increase gas limit
   - Try again later
   - Contact support if persists

## Trading Issues

### Cannot Create Offer

**Symptoms:**
- Create offer fails
- Funds not escrowed
- Error message

**Solutions:**

1. **Check Token Status**
   ```
   ✓ Token is GRADUATED
   ✓ Trading enabled
   ✓ Not paused
   ```

2. **Verify Approvals**
   ```
   For SELL offers:
   ✓ Tokens approved to Market
   ✓ Approval amount sufficient
   
   For BUY offers:
   ✓ USDC approved to Market
   ✓ Approval amount sufficient
   ```

3. **Check Balances**
   ```
   For SELL: Have enough tokens
   For BUY: Have enough USDC
   Include: Fee amount (2.5%)
   ```

4. **Validate Parameters**
   ```
   ✓ Amount > minimum (1 USDC worth)
   ✓ Price > 0
   ✓ Valid token address
   ```

### Cannot Fill Offer

**Symptoms:**
- Fill button disabled
- Transaction fails
- Trade not executed

**Solutions:**

1. **Check Offer Status**
   ```
   ✓ Offer still OPEN
   ✓ Not already filled
   ✓ Not cancelled
   ✓ Refresh page for latest
   ```

2. **Verify Funds**
   ```
   For filling SELL offer:
   ✓ Have enough USDC
   ✓ USDC approved
   
   For filling BUY offer:
   ✓ Have enough tokens
   ✓ Tokens approved
   ```

3. **Check Amount**
   ```
   ✓ Amount <= offer amount
   ✓ Amount > 0
   ✓ Valid number
   ```

### Offer Not Showing

**Symptoms:**
- Created offer not visible
- Offers list empty
- Missing offers

**Solutions:**

1. **Refresh Page**
   - Hard refresh (Cmd/Ctrl + Shift + R)
   - Clear cache
   - Try different browser

2. **Check Filters**
   ```
   ✓ Correct token selected
   ✓ Offer type filter (BUY/SELL)
   ✓ Status filter (OPEN)
   ✓ No search filters active
   ```

3. **Verify Transaction**
   - Check transaction on Etherscan
   - Confirm it succeeded
   - Wait for indexing (1-2 min)

## DeFi Issues

### Cannot Deposit to Vault

**Symptoms:**
- Deposit fails
- Shares not received
- Error message

**Solutions:**

1. **Check Vault Status**
   ```
   ✓ Vault exists (token graduated)
   ✓ Not paused
   ✓ Not at supply cap
   ✓ Risk tier allows deposits
   ```

2. **Verify USDC**
   ```
   ✓ Have enough USDC
   ✓ Approved Vault contract
   ✓ Approval amount sufficient
   ```

3. **Check Limits**
   ```
   ✓ Amount > minimum
   ✓ Amount < supply cap
   ✓ Vault has capacity
   ```

### Cannot Borrow

**Symptoms:**
- Borrow button disabled
- Transaction fails
- USDC not received

**Solutions:**

1. **Check Collateral**
   ```
   ✓ Deposited collateral
   ✓ Collateral sufficient
   ✓ Borrow amount <= max borrow
   ```

2. **Verify Limits**
   ```
   Max Borrow = Collateral Value × Collateral Factor
   
   Example:
   Collateral: 1,000 tokens @ $1 = $1,000
   Collateral Factor: 50%
   Max Borrow: $500
   ```

3. **Check Vault**
   ```
   ✓ Vault has liquidity
   ✓ Utilization < 85%
   ✓ Not paused
   ```

### Position Liquidated

**Symptoms:**
- Collateral seized
- Debt repaid
- Lost collateral

**What Happened:**
```
Your collateral value dropped below liquidation threshold
Stability pool repaid your debt
Your collateral was seized
```

**Prevention:**
```
✓ Monitor collateral ratio
✓ Add collateral when needed
✓ Set price alerts
✓ Maintain safe buffer
✓ Repay loans during volatility
```

**Recovery:**
```
✗ Cannot recover seized collateral
✓ Debt is cleared
✓ Learn from experience
✓ Be more conservative next time
```

## Dividend Issues

### Cannot Claim Dividend

**Symptoms:**
- Claim button disabled
- Transaction fails
- USDC not received

**Solutions:**

1. **Check Eligibility**
   ```
   ✓ Held tokens at snapshot
   ✓ Round is ACTIVE
   ✓ Haven't claimed yet
   ✓ Balance > 0 at snapshot
   ```

2. **Verify Round**
   ```
   ✓ Round activated
   ✓ Snapshot taken
   ✓ Funds available
   ✓ Not expired
   ```

3. **Check Address**
   ```
   ✓ Same address as snapshot
   ✓ Not transferred tokens after
   ✓ Correct wallet connected
   ```

### Wrong Dividend Amount

**Symptoms:**
- Amount seems incorrect
- Different than expected
- Calculation doesn't match

**Verification:**
```
Your Dividend = (Your Balance / Total Supply) × Total Amount

Check:
✓ Your balance at snapshot
✓ Total supply at snapshot
✓ Total dividend amount
✓ Already claimed?
```

**If Still Wrong:**
- Check transaction on Etherscan
- Verify snapshot ID
- Contact support with details
- Provide transaction hash

## Display Issues

### Data Not Loading

**Symptoms:**
- Blank pages
- Loading forever
- "No data" messages

**Solutions:**

1. **Check Internet**
   - Verify connection
   - Try different network
   - Disable VPN temporarily

2. **Clear Cache**
   ```
   Browser → Settings → Clear browsing data
   ✓ Cached images and files
   ✓ Cookies and site data
   Time range: All time
   ```

3. **Try Different Browser**
   - Chrome
   - Firefox
   - Brave
   - Safari

4. **Disable Extensions**
   - Ad blockers
   - Privacy extensions
   - Other wallet extensions

### Incorrect Balances

**Symptoms:**
- Balance shows 0
- Wrong token amount
- Outdated data

**Solutions:**

1. **Refresh Data**
   - Refresh page
   - Disconnect and reconnect wallet
   - Wait 1-2 minutes for sync

2. **Check Blockchain**
   ```
   Visit: sepolia.etherscan.io
   Enter: Your wallet address
   Verify: Actual balance
   ```

3. **Import Token**
   ```
   MetaMask → Import tokens
   Enter: Token contract address
   Verify: Balance appears
   ```

### Charts Not Displaying

**Symptoms:**
- Blank chart area
- "No data" message
- Chart errors

**Solutions:**

1. **Check Token Activity**
   - Needs trading history
   - Recently graduated?
   - Wait for trades

2. **Browser Compatibility**
   - Update browser
   - Enable JavaScript
   - Disable strict privacy settings

3. **Try Different Timeframe**
   - 1H, 4H, 1D, 1W
   - Some may have no data
   - Recent tokens limited

## Getting Help

### Before Contacting Support

**Gather Information:**
```
✓ Wallet address
✓ Transaction hash (if applicable)
✓ Token/campaign address
✓ Error message (screenshot)
✓ Browser and wallet version
✓ Steps to reproduce
```

### Contact Channels

**Discord** (Fastest)
- Real-time help
- Community support
- Team members active

**Email** (Detailed)
- support@redcarpethq.com
- Include all information above
- Response: 12-24 hours

**Twitter** (Public)
- @RedCarpetHQ
- Public issues
- Status updates

### Emergency Issues

**Critical Problems:**
- Funds stuck
- Security concerns
- Contract bugs

**Contact:**
- security@redcarpethq.com
- Mark: [URGENT]
- Provide all details

---

**Still Having Issues?**

Join our [Discord](https://discord.gg/redcarpethq) for real-time support or email support@redcarpethq.com with detailed information about your problem.
