# DeFi Architecture

For comprehensive information about RedCarpetHQ's DeFi architecture, please see:

- [Finance Overview](finance/overview.md) - Complete DeFi system overview
- [Design Rationale](business-logic/design-rationale.md#defi-architecture) - Architectural decisions

## Architecture Overview

### UnifiedVault

**Single ERC-4626 vault per token:**
- Simplified UX
- Auto-allocation (80% lending, 20% stability)
- Risk-tiered interest rates
- Integrated liquidation system

### FeeDistributor

**Centralized fee management:**
- 40% Platform treasury
- 40% Trading contests
- 10% Vault (lenders)
- 10% Producer rewards

### RiskOracle

**Risk assessment system:**
- GREEN/YELLOW/RED tiers
- Price staleness detection
- Vault utilization monitoring
- Wash trading detection

### Key Contracts

**Global Contracts:**
- UnifiedVault (per token)
- FeeDistributor
- RiskOracle
- Market
- Contest

**Per-Campaign Contracts:**
- Campaign
- CampaignToken (ERC-20)
- DividendDistributor

For detailed technical information, visit the [Finance Overview](finance/overview.md) page.
