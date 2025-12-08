import type { BranchCopyButtonStrategy } from "../strategies/branch-copy-button-strategies/BranchCopyButtonStrategy";
import { DEFAULT_BRANCH_COPY_BUTTON_STRATEGIES_ARRAY } from "../strategies/branch-copy-button-strategies/defaultBranchCopyButtonStrategies";
import type { ToggleableStorageData } from "./ToggleableStorageData";

export type BranchCopyButtonStrategyStorageDataItem = ToggleableStorageData &
  BranchCopyButtonStrategy;

export type BranchCopyButtonStrategyStorageData =
  BranchCopyButtonStrategyStorageDataItem[];

export const DEFAULT_BRANCH_COPY_BUTTON_STRATEGY_STORAGE_DATA: BranchCopyButtonStrategyStorageData =
  [
    ...DEFAULT_BRANCH_COPY_BUTTON_STRATEGIES_ARRAY.map((strategy) => ({
      isEnabled: true,
      ...strategy,
    })),
  ];
