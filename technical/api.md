# API Reference

> **Note:** Public API is currently in development and not yet available.

## Overview

The RedCarpetHQ API will provide programmatic access to platform data and functionality. This page will be updated when the API becomes available.

## Planned Features

### REST API

**Endpoints (Planned):**
- Campaign data
- Token information
- Trading data
- User portfolios
- Market analytics

### GraphQL API

**Queries (Planned):**
- Flexible data fetching
- Nested queries
- Real-time subscriptions
- Efficient data loading

### WebSocket API

**Real-Time Data (Planned):**
- Price updates
- Trade notifications
- Campaign events
- Market activity

## Current Access

### On-Chain Data

**Available Now:**
- Direct smart contract calls
- Blockchain explorers (Etherscan)
- Web3 libraries (ethers.js, web3.js)
- The Graph (subgraph coming soon)

### Example: Reading Contract Data

```javascript
// Using ethers.js
const { ethers } = require('ethers');

// Connect to Sepolia
const provider = new ethers.JsonRpcProvider(
  'https://sepolia.infura.io/v3/YOUR-API-KEY'
);

// Campaign contract
const campaignAddress = '0x...';
const campaignABI = [...]; // Get from platform
const campaign = new ethers.Contract(
  campaignAddress,
  campaignABI,
  provider
);

// Read campaign data
const goal = await campaign.fundingGoal();
const raised = await campaign.totalRaised();
const deadline = await campaign.deadline();

console.log('Goal:', ethers.formatUnits(goal, 6), 'USDC');
console.log('Raised:', ethers.formatUnits(raised, 6), 'USDC');
console.log('Deadline:', new Date(deadline * 1000));
```

## Smart Contract ABIs

### Getting ABIs

**Available Sources:**
- Platform documentation
- Verified contracts on Etherscan
- GitHub repository (when public)
- NPM package (coming soon)

### Key Contracts

**Campaign Contract:**
- `contribute(uint256 amount)`
- `finalize()`
- `burnForRefund(uint256 amount)`
- View functions for campaign data

**Market Contract:**
- `createOffer(...)`
- `acceptOffer(...)`
- `cancelOffer(...)`
- View functions for offers

**UnifiedVaultV3:**
- `deposit(uint256 assets, address receiver)`
- `withdraw(uint256 assets, address receiver, address owner)`
- `borrow(uint256 amount)`
- `repay(uint256 amount)`

## The Graph Subgraph

### Coming Soon

**Planned Subgraph:**
- Indexed blockchain data
- Fast queries
- Historical data
- Aggregated analytics

**Example Queries (Future):**
```graphql
{
  campaigns(first: 10, orderBy: totalRaised, orderDirection: desc) {
    id
    name
    goal
    totalRaised
    deadline
    status
  }
  
  trades(where: { token: "0x..." }) {
    id
    buyer
    seller
    amount
    price
    timestamp
  }
}
```

## SDK (Planned)

### JavaScript/TypeScript SDK

**Features:**
- Type-safe interfaces
- Easy integration
- Helper functions
- Event listeners

**Example Usage (Future):**
```typescript
import { RedCarpetHQ } from '@redcarpethq/sdk';

const client = new RedCarpetHQ({
  network: 'sepolia',
  provider: window.ethereum
});

// Get campaign data
const campaign = await client.campaigns.get('0x...');

// Create offer
await client.market.createOffer({
  token: '0x...',
  amount: 1000,
  price: 1.5
});

// Listen to events
client.on('trade', (trade) => {
  console.log('New trade:', trade);
});
```

## Rate Limits

### Future API Limits

**Planned Tiers:**
- **Free:** 100 requests/minute
- **Developer:** 1,000 requests/minute
- **Enterprise:** Custom limits

**Best Practices:**
- Cache responses
- Use webhooks for real-time data
- Batch requests when possible
- Respect rate limits

## Authentication

### API Keys (Future)

**When Available:**
- Generate API keys in dashboard
- Include in request headers
- Rotate regularly
- Keep secure

**Example:**
```javascript
fetch('https://api.redcarpethq.com/v1/campaigns', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY'
  }
})
```

## Webhooks (Planned)

### Event Notifications

**Planned Events:**
- Campaign created
- Campaign graduated
- Trade executed
- Dividend distributed
- Liquidation occurred

**Configuration:**
- Set webhook URL
- Choose events
- Verify signatures
- Handle retries

## Data Availability

### Current Options

**1. Direct Contract Calls:**
- Most reliable
- Real-time data
- Requires Web3 knowledge
- Gas costs for writes

**2. Etherscan API:**
- Free tier available
- Transaction history
- Contract events
- Rate limited

**3. Infura/Alchemy:**
- Enhanced APIs
- Better performance
- Free tiers available
- Easy integration

## Community Tools

### Third-Party Integrations

**Available:**
- Dune Analytics dashboards
- DeFi Llama integration (future)
- CoinGecko listing (future)
- Portfolio trackers

**Build Your Own:**
- Use on-chain data
- Create analytics
- Build trading bots
- Develop tools

## Documentation

### When API Launches

**Will Include:**
- Complete endpoint reference
- Authentication guide
- Code examples
- SDKs and libraries
- Rate limit details
- Changelog
- Migration guides

## Stay Updated

### Get Notified

**Follow Announcements:**
- Discord #announcements
- Twitter @RedCarpetHQ
- Email newsletter
- GitHub releases

**Developer Community:**
- Discord #developers
- GitHub discussions
- Stack Overflow tag
- Developer blog

## Frequently Asked Questions

**Q: When will the API be available?**
A: Timeline TBA. Follow announcements for updates.

**Q: Will the API be free?**
A: Free tier planned with paid tiers for higher usage.

**Q: Can I access historical data?**
A: Yes, via The Graph subgraph when available.

**Q: How do I get contract ABIs?**
A: Check Etherscan for verified contracts or platform documentation.

**Q: Can I build commercial applications?**
A: Yes, subject to Terms of Service and API terms.

**Q: Will there be SDKs for other languages?**
A: JavaScript/TypeScript first, others based on demand.

## Related Resources

- [Smart Contracts](technical/contracts.md)
- [Network Information](technical/network.md)
- [Security & Audits](technical/security.md)

---

**Interested in API Access?**

Join our Discord #developers channel to stay updated and provide feedback on API development.
