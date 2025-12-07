import { DEFAULT_CONTAINER_PROCESSOR_STRATEGY_STORAGE_DATA_DEFAULT } from "./containerProcessorStrategyStorageData";
import { DEFAULT_TICKET_SELECTOR_STRATEGY_STORAGE_DATA } from "./ticketSelectorStrategyStorageData";
import { storageKeys, type StorageKey } from "./storageKeys";
import { DEFAULT_BRANCH_COPY_BUTTON_STRATEGY_STORAGE_DATA } from "./branchCopyButtonStrategyStorageData";

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

const createStorageRepository = <T>(key: StorageKey, defaultValue: T) => ({
  save: (value: T) => saveValue(key, value),
  get: () => getValueOrDefault(key, defaultValue),
});

export const hostnamesRepository = createStorageRepository<string[]>(
  storageKeys.savedHostnames,
  []
);

export const containerProcessorStrategiesRepository = createStorageRepository(
  storageKeys.containerProcessorStrategies,
  DEFAULT_CONTAINER_PROCESSOR_STRATEGY_STORAGE_DATA_DEFAULT
);

export const ticketSelectorStrategiesRepository = createStorageRepository(
  storageKeys.ticketSelectorStrategies,
  DEFAULT_TICKET_SELECTOR_STRATEGY_STORAGE_DATA
);

export const branchCopyButtonStrategiesRepository = createStorageRepository(
  storageKeys.branchCopyButtonStrategies,
  DEFAULT_BRANCH_COPY_BUTTON_STRATEGY_STORAGE_DATA
);
