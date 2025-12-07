import type { BranchCopyButtonStrategy } from "./BranchCopyButtonStrategy";
import { checkoutNewGitBranch } from "./default-strategies/checkoutNewGitBranch";

export const DEFAULT_BRANCH_COPY_BUTTON_STRATEGIES = {
  checkoutNewGitBranch,
} satisfies {
  [key: string]: BranchCopyButtonStrategy;
};

export const DEFAULT_BRANCH_COPY_BUTTON_STRATEGIES_ARRAY: BranchCopyButtonStrategy[] =
  Object.values(DEFAULT_BRANCH_COPY_BUTTON_STRATEGIES);
