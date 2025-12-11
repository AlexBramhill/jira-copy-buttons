import { createDefaultTicketSelectorStrategyStorageData } from "./ticketSelectorStrategyStorageData";
import { storageKeys, type StorageKey } from "./storageKeys";
import { createDefaultContainerProcessorStrategyStorageData } from "./containerProcessorStrategyStorageData";
import {
  createDefaultBranchCopyButtonStrategyStorageData,
  type BranchCopyButtonStrategyStorageData,
} from "./branchCopyButtonStrategyStorageData";
import { createDefaultUrlProcessorStrategyStorageData } from "./urlProcessorStrategyStorageData";

export type StorageRepository<T> = {
  save: (value: T) => Promise<void>;
  get: () => Promise<T>;
  createDefaultValue: () => T;
};

const saveValue = async <T>(key: StorageKey, value: T): Promise<void> => {
  await chrome.storage.sync.set({ [key]: value });
};

const getValueOrDefault = async <T>(
  key: StorageKey,
  defaultValue: T
): Promise<T> => {
  const result = await chrome.storage.sync.get([key]);
  return result[key] !== undefined ? result[key] : defaultValue;
};
const createStorageRepository = <T>(
  key: StorageKey,
  createDefaults: () => T
): StorageRepository<T> => ({
  save: (value: T) => saveValue(key, value),
  get: () => getValueOrDefault(key, createDefaults()),
  createDefaultValue: createDefaults,
});

export const repository = {
  urlProcessorStrategies: createStorageRepository(
    storageKeys.urlProcessorStrategies,
    createDefaultUrlProcessorStrategyStorageData
  ),
  containerProcessorStrategies: createStorageRepository(
    storageKeys.containerProcessorStrategies,
    createDefaultContainerProcessorStrategyStorageData
  ),
  ticketSelectorStrategies: createStorageRepository(
    storageKeys.ticketSelectorStrategies,
    createDefaultTicketSelectorStrategyStorageData
  ),
  branchCopyButtonStrategies:
    createStorageRepository<BranchCopyButtonStrategyStorageData>(
      storageKeys.branchCopyButtonStrategies,
      createDefaultBranchCopyButtonStrategyStorageData
    ),
};
