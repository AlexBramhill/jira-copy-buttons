import type { BranchCopyButtonConfig } from "./BranchCopyButtonConfig";

interface StorageData {
  savedHostnames: string[];
  branchCopyButtonConfigs: BranchCopyButtonConfig[];
}

export const storageKeys = {
  savedHostnames: "savedHostnames",
  branchCopyButtonConfigs: "branchCopyButtonConfigs",
} as const satisfies { [K in keyof StorageData]: K };

export type StorageKey = (typeof storageKeys)[keyof StorageData];
