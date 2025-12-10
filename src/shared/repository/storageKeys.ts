import type { ContainerProcessorStrategyStorageData } from "./containerProcessorStrategyStorageData";
import type { TicketSelectorStrategyStorageData } from "./ticketSelectorStrategyStorageData";
import type { BranchCopyButtonStrategyEditorHeader } from "../strategies/branch-copy-button-strategies/BranchCopyButtonStrategy";

interface StorageData {
  savedHostnames: string[];
  branchCopyButtonStrategies: BranchCopyButtonStrategyEditorHeader[];
  containerProcessorStrategies: ContainerProcessorStrategyStorageData[];
  ticketSelectorStrategies: TicketSelectorStrategyStorageData[];
}

export const storageKeys = {
  savedHostnames: "savedHostnames",
  branchCopyButtonStrategies: "branchCopyButtonStrategies",
  containerProcessorStrategies: "containerProcessorStrategies",
  ticketSelectorStrategies: "ticketSelectorStrategies",
} as const satisfies { [K in keyof StorageData]: K };

export type StorageKey = (typeof storageKeys)[keyof typeof storageKeys];
