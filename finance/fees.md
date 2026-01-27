# Fee Structure

For comprehensive information about fees on RedCarpetHQ, please see:

- [Fee Distribution](business-logic/fee-distribution.md) - Complete fee breakdown and distribution
- [Design Rationale](business-logic/design-rationale.md#fee-structure) - Why fees are structured this way

## Quick Reference

### Platform Fees

**Campaign Funding: 5%**
- Deducted when producer withdraws funds
- Distributed via FeeDistributor

**Trading: 2.5%**
- Charged to buyer on each trade
- Distributed to ecosystem participants

**Borrowing: 12% APY**
- Interest on USDC loans
- Risk-tiered distribution

### Fee Distribution

**Campaign Fees (5%):**
- 40% → Platform Treasury (FEE_SAFE)
- 40% → Trading Contests
- 10% → UnifiedVault (lenders)
- 10% → Producer Rewards Pool

**Trading Fees (2.5%):**
- 40% → Platform Treasury (FEE_SAFE)
- 40% → Trading Contests
- 10% → UnifiedVault (lenders)
- 10% → Producer Rewards Pool

For detailed information, visit the [Fee Distribution](business-logic/fee-distribution.md) page.
