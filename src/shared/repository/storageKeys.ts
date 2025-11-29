import type { ContainerProcessorStrategyStorageData } from "./containerProcessorStrategy";
import type { TicketSelectorStrategyStorageData } from "./ticketSelectorStrategy";
import type { BranchCopyButtonConfig } from "./BranchCopyButtonConfig";

interface StorageData {
  savedHostnames: string[];
  branchCopyButtonConfigs: BranchCopyButtonConfig[];
  containerProcessorStrategies: ContainerProcessorStrategyStorageData[];
  ticketSelectorStrategies: TicketSelectorStrategyStorageData[];
}

export const storageKeys = {
  savedHostnames: "savedHostnames",
  branchCopyButtonConfigs: "branchCopyButtonConfigs",
  containerProcessorStrategies: "containerProcessorStrategies",
  ticketSelectorStrategies: "ticketSelectorStrategies",
} as const satisfies { [K in keyof StorageData]: K };

export type StorageKey = (typeof storageKeys)[keyof typeof storageKeys];
