# Creating Campaigns

This comprehensive guide walks you through creating your first campaign on RedCarpetHQ.

## Prerequisites

Before creating a campaign:

- ✅ **Wallet Setup**: MetaMask configured for Base Sepolia ([Guide](../getting-started/wallet-setup.md))
- ✅ **Base Sepolia ETH**: At least 0.1 ETH for gas fees
- ✅ **Test USDC**: For testing (if needed)
- ✅ **Whitelist Status**: Approved by screener (if screening enabled)
- ✅ **Project Details**: All information prepared

## Campaign Creation Flow

### Step 1: Access Campaign Creator

1. Visit RedCarpetHQ platform
2. Connect your wallet
3. Click **"Create Campaign"** button
4. Verify whitelist status (if required)

### Step 2: Basics Tab

Configure core campaign parameters.

#### Campaign Name
```
Example: "The Last Frontier - Sci-Fi Feature Film"
```
- **Purpose**: Displayed on campaign page and token
- **Requirements**: 
  - 3-100 characters
  - Clear and descriptive
  - Professional presentation
- **Tips**: Include genre or project type

#### Token Symbol
```
Example: "FRONTIER"
```
- **Purpose**: Token ticker (like BTC, ETH)
- **Requirements**:
  - 2-10 characters
  - Uppercase letters only
  - Unique (not used by other campaigns)
- **Tips**: 
  - Short and memorable
  - Related to film name
  - Easy to type

#### Token Price
```
Example: 1.00 USDC per token
```
- **Purpose**: How much each token costs
- **Calculation**:
  ```
  Tokens Received = USDC Invested / Token Price
  ```
- **Considerations**:
  - Lower price = more tokens per dollar
  - Higher price = fewer tokens, higher perceived value
  - Standard: 0.1 - 10 USDC per token
- **Example**:
  - Price: 1 USDC
  - Investor pays: 100 USDC
  - Tokens received: 100 tokens

#### Floor (Minimum Goal)
```
Example: 50,000 USDC
```
- **Purpose**: Minimum funding to succeed
- **Requirements**:
  - Must be > 0
  - Realistic for your project
  - Covers essential production costs
- **Impact**:
  - Campaign fails if not reached
  - All funds refunded if failed
  - Must reach floor to claim funds

#### Ceiling (Maximum Goal)
```
Example: 200,000 USDC (optional)
```
- **Purpose**: Maximum funding limit
- **Options**:
  - Set ceiling for capped fundraising
  - Leave at 0 for unlimited
- **Considerations**:
  - Ceiling must be > Floor
  - Campaign auto-concludes at ceiling
  - Prevents over-dilution

#### Overage Type

**Option 1: No Overage (0)**
- Campaign ends exactly at floor
- No additional funds accepted
- Supply locked at floor amount
- **Use Case**: Fixed budget projects

**Option 2: Unlimited Overage (1)**
- Accept funds until deadline
- No maximum limit
- Supply grows with funding
- **Use Case**: Flexible budget projects

**Option 3: Ceiling Overage (2)**
- Accept funds up to ceiling
- Campaign ends at ceiling or deadline
- Supply capped at ceiling amount
- **Use Case**: Budget with maximum limit

**Comparison:**
| Type | Stops At | Supply | Best For |
|------|----------|--------|----------|
| No Overage | Floor | Fixed | Exact budget |
| Unlimited | Deadline | Variable | Flexible budget |
| Ceiling | Ceiling or Deadline | Capped | Budget range |

#### Start Time
```
Example: 2025-02-01 00:00:00 UTC
```
- **Purpose**: When campaign begins accepting funds
- **Requirements**:
  - Must be future time
  - At least 1 hour from now (recommended)
- **Tips**:
  - Allow time for promotion
  - Coordinate with marketing
  - Consider time zones

#### End Time
```
Example: 2025-04-30 23:59:59 UTC
```
- **Purpose**: Campaign deadline
- **Requirements**:
  - Must be after start time
  - Maximum 270 days from initial start
- **Recommendations**:
  - 30-90 days typical
  - Shorter = urgency
  - Longer = more time to reach goal
- **Note**: Can extend once if needed

#### Funds Recipient
```
Example: 0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb
```
- **Purpose**: Address receiving funds when campaign succeeds
- **Requirements**:
  - Valid Ethereum address
  - You control this address
- **Default**: Your connected wallet
- **Options**:
  - Personal wallet
  - Multi-sig wallet (recommended for large amounts)
  - Production company wallet

### Step 3: Story Tab

Tell your film's story to attract supporters.

#### Project Synopsis
- **Length**: 500-2000 words
- **Structure**:
  1. Logline (1-2 sentences)
  2. Story overview
  3. Themes and tone
  4. Target audience
  5. Why this matters
- **Tips**:
  - Compelling opening
  - Clear narrative
  - Emotional connection
  - Professional writing

#### Visual Assets
- **Poster Image**: 1920x1080px (16:9)
- **Concept Art**: Multiple images
- **Behind-the-Scenes**: Production photos
- **Storyboards**: Key scenes
- **Format**: JPG, PNG (max 5MB each)

#### Video Pitch
- **Length**: 2-5 minutes
- **Content**:
  - Producer introduction
  - Project overview
  - Why support needed
  - Call to action
- **Platform**: YouTube, Vimeo
- **Quality**: HD minimum (1080p)

### Step 4: People Tab

Showcase your team's credentials.

#### Producer/Director
- Full name
- Biography (200-500 words)
- IMDb link (if available)
- Previous work
- Photo (professional headshot)

#### Key Team Members
- Cinematographer
- Writer
- Production designer
- Lead actors (if attached)
- Notable advisors

#### Team Credentials
- Awards and recognition
- Festival selections
- Industry experience
- Education/training
- Notable collaborations

### Step 5: About Us Tab

Provide detailed project information.

#### Budget Breakdown
```
Example:
- Pre-production: $20,000
- Production: $100,000
- Post-production: $50,000
- Marketing: $20,000
- Contingency: $10,000
Total: $200,000
```

#### Production Timeline
```
Example:
- Pre-production: Feb-Mar 2025
- Principal Photography: Apr-May 2025
- Post-production: Jun-Aug 2025
- Festival Circuit: Sep 2025 - Mar 2026
- Distribution: Q2 2026
```

#### Distribution Plan
- Festival strategy
- Distribution channels
- Release timeline
- Marketing approach
- Revenue projections

#### Legal Information
- Production company details
- Rights ownership
- Regulatory compliance
- Risk disclosures

### Step 6: Rewards Tab

Define perks for supporters (optional but recommended).

#### Reward Tiers
```
Example Tiers:

Tier 1: $50 - "Supporter"
- Digital thank you
- Name in credits
- Behind-the-scenes updates

Tier 2: $250 - "Producer"
- All Tier 1 rewards
- Digital copy of film
- Virtual Q&A access
- Producer credit

Tier 3: $1,000 - "Executive Producer"
- All Tier 2 rewards
- Physical poster (signed)
- Set visit (if local)
- Executive Producer credit

Tier 4: $5,000 - "Associate Producer"
- All Tier 3 rewards
- Premiere tickets (2)
- Private screening
- Associate Producer credit
```

#### Reward Guidelines
- **Deliverable**: Can you fulfill it?
- **Scalable**: Works for multiple backers?
- **Valuable**: Worth the investment?
- **Legal**: No securities implications?

### Step 7: Bonus Perks Tab

Additional incentives for supporters.

#### Early Bird Bonuses
- Extra tokens for first X backers
- Discounted token price
- Exclusive rewards
- Limited availability

#### Milestone Bonuses
- Unlock at funding milestones
- Additional perks at 50%, 75%, 100%
- Stretch goals
- Community rewards

### Step 8: Promotion Tab

Marketing and outreach information.

#### Social Media
- Twitter/X handle
- Instagram account
- Facebook page
- TikTok (if applicable)
- YouTube channel

#### Website
- Official film website
- Production company site
- Press kit link

#### Press Coverage
- Articles and interviews
- Reviews and features
- Industry mentions
- Media contacts

### Step 9: On-Chain Tab

Deploy your campaign to the blockchain.

#### Review All Details
Before deployment, verify:
- ✅ All information accurate
- ✅ Token symbol unique
- ✅ Dates correct
- ✅ Wallet address correct
- ✅ Floor/ceiling appropriate

#### Gas Estimation
```
Estimated Gas: ~500,000 gas
Cost: ~0.01-0.05 ETH
```

#### Deploy Campaign

1. Click **"Deploy Campaign"**
2. Review transaction in MetaMask
3. Confirm gas fee
4. Sign transaction
5. Wait for confirmation (1-2 minutes)

#### Transaction Confirmation
- Transaction hash displayed
- View on Base Sepolia BaseScan
- Campaign contract address generated
- Token contract address created

#### Post-Deployment
- Campaign appears on platform
- Status: "Pending" until start time
- Share campaign link
- Begin promotion

## Campaign Settings

### Updatable Fields (Before Start)
- ✅ Start time (if not started)
- ✅ End time (before deadline)
- ✅ Floor amount (before start)
- ✅ Ceiling amount (before start)
- ✅ Funds recipient

### Non-Updatable Fields
- ❌ Token name
- ❌ Token symbol
- ❌ Token price
- ❌ Overage type
- ❌ Payment token (USDC)

## Best Practices

### Planning

**Timeline:**
- 2-4 weeks preparation
- Gather all materials
- Review legal requirements
- Prepare marketing plan

**Budget:**
- Realistic floor target
- No platform fees (you receive 100% of funds raised)
- Plan for contingencies
- Consider post-campaign costs

### Content Quality

**Writing:**
- Professional tone
- Clear and concise
- Proofread carefully
- No typos or errors

**Visuals:**
- High-quality images
- Professional design
- Consistent branding
- Optimized file sizes

**Video:**
- Good lighting and audio
- Clear presentation
- Engaging content
- Professional editing

### Marketing Preparation

**Pre-Launch:**
- Build email list
- Engage social media
- Reach out to press
- Create content calendar

**Launch Day:**
- Coordinate announcements
- Email subscribers
- Social media blitz
- Press release

**During Campaign:**
- Regular updates
- Respond to questions
- Share milestones
- Maintain momentum

## Common Mistakes

### Avoid These Errors

**❌ Unrealistic Goals**
- Floor too high for audience
- Timeline too aggressive
- Budget not justified

**❌ Poor Presentation**
- Low-quality materials
- Incomplete information
- Unprofessional appearance
- Typos and errors

**❌ Weak Marketing**
- No pre-launch buzz
- Inactive social media
- No outreach plan
- Ignoring supporters

**❌ Legal Issues**
- Unclear rights ownership
- Missing disclosures
- Securities violations
- Unfulfillable promises

**❌ Technical Errors**
- Wrong wallet address
- Incorrect dates
- Token symbol conflicts
- Insufficient gas

## After Creation

### Immediate Actions

1. **Verify Deployment**
   - Check campaign page
   - Verify all details
   - Test token contract
   - Confirm dates

2. **Share Campaign**
   - Post on social media
   - Email supporters
   - Submit to directories
   - Reach out to press

3. **Monitor Activity**
   - Track purchases
   - Respond to questions
   - Update regularly
   - Engage community

### Ongoing Management

- **Daily**: Check progress, respond to messages
- **Weekly**: Post updates, share milestones
- **As Needed**: Adjust strategy, address issues

---

**Next Steps:** [Learn Campaign Lifecycle →](campaign-lifecycle.md)
