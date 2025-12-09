import { createCheckoutNewGitBranchStrategy } from "./default-strategies-factories/checkoutNewGitBranchFactory";

export const createDefaultBranchCopyButtonStrategies = () => [
  createCheckoutNewGitBranchStrategy(),
];
