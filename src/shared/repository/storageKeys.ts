import type { ContainerProcessorStrategyStorageData } from "./containerProcessorStrategyStoageData";
import type { TicketSelectorStrategyStorageData } from "./ticketSelectorStrategyStorageData";
import type { BranchCopyButtonStrategy } from "../strategies/BranchCopyButtonStrategy";

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
