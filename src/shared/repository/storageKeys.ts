import type { ContainerProcessorStrategyStorageData } from "./containerProcessorStrategy";
import type { TicketSelectorStrategyStorageData } from "./ticketSelectorStrategy";
import type { BranchCopyButtonStrategy } from "./BranchCopyButtonStrategy";

interface StorageData {
  savedHostnames: string[];
  branchCopyButtonStrategies: BranchCopyButtonStrategy[];
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
