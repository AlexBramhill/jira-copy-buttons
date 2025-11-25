import type { BranchCopyButtonConfig } from "./BranchCopyButtonConfig";
import { storageKeys, type StorageKey } from "./storageKeys";

const saveValue = async <T>(key: StorageKey, value: T): Promise<void> => {
  await chrome.storage.sync.set({ [key]: value });
};

const getValue = async <T>(key: StorageKey, defaultValue: T): Promise<T> => {
  const result = await chrome.storage.sync.get([key]);
  return result[key] !== undefined ? result[key] : defaultValue;
};

export const saveHostnames = (hostnames: string[]): Promise<void> =>
  saveValue<string[]>(storageKeys.savedHostnames, hostnames);

export const getHostnames = (): Promise<string[]> =>
  getValue<string[]>(storageKeys.savedHostnames, []);

export const saveBranchCopyButtonConfigs = (
  configs: BranchCopyButtonConfig[]
): Promise<void> =>
  saveValue<BranchCopyButtonConfig[]>(
    storageKeys.branchCopyButtonConfigs,
    configs
  );

export const getBranchCopyButtonConfigs = (): Promise<
  BranchCopyButtonConfig[]
> =>
  getValue<BranchCopyButtonConfig[]>(storageKeys.branchCopyButtonConfigs, []);
