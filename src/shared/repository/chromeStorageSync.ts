import { DEFAULT_CONTAINER_PROCESSOR_STRATEGY_STORAGE_DATA_DEFAULT } from "./containerProcessorStrategyStorageData";
import { DEFAULT_TICKET_SELECTOR_STRATEGY_STORAGE_DATA } from "./ticketSelectorStrategyStorageData";
import { storageKeys, type StorageKey } from "./storageKeys";
import { DEFAULT_BRANCH_COPY_BUTTON_STRATEGY_STORAGE_DATA } from "./branchCopyButtonStrategyStorageData";

const saveValue = async <T>(key: StorageKey, value: T): Promise<void> => {
  await chrome.storage.sync.set({ [key]: value });
};

export type StorageRepository<T> = {
  save: (value: T) => Promise<void>;
  get: () => Promise<T>;
  createDefaultValue: () => T;
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
  defaultValue: T
): StorageRepository<T> => ({
  save: (value: T) => saveValue(key, value),
  get: () => getValueOrDefault(key, defaultValue),
  createDefaultValue: () => defaultValue,
});

export const repository = {
  hostnames: createStorageRepository<string[]>(storageKeys.savedHostnames, []),
  containerProcessorStrategies: createStorageRepository(
    storageKeys.containerProcessorStrategies,
    DEFAULT_CONTAINER_PROCESSOR_STRATEGY_STORAGE_DATA_DEFAULT
  ),
  ticketSelectorStrategies: createStorageRepository(
    storageKeys.ticketSelectorStrategies,
    DEFAULT_TICKET_SELECTOR_STRATEGY_STORAGE_DATA
  ),
  branchCopyButtonStrategies: createStorageRepository(
    storageKeys.branchCopyButtonStrategies,
    DEFAULT_BRANCH_COPY_BUTTON_STRATEGY_STORAGE_DATA
  ),
};
