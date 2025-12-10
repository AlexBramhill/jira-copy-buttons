import type { BranchCopyButtonStrategyEditorHeader } from "../strategies/branch-copy-button-strategies/BranchCopyButtonStrategy";
import { createDefaultBranchCopyButtonStrategies } from "../strategies/branch-copy-button-strategies/defaultBranchCopyButtonStrategiesFactory";
import type { ToggleableStorageData } from "./ToggleableStorageData";

export type BranchCopyButtonStrategyStorageDataItem = ToggleableStorageData &
  BranchCopyButtonStrategyEditorHeader;

export type BranchCopyButtonStrategyStorageData =
  BranchCopyButtonStrategyStorageDataItem[];

export const createDefaultBranchCopyButtonStrategyStorageData: () => BranchCopyButtonStrategyStorageData =
  () => [
    ...createDefaultBranchCopyButtonStrategies().map((strategy) => ({
      isEnabled: true,
      ...strategy,
    })),
  ];
