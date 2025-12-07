import {
  containerProcessorStrategyStorageDataDefault,
  type ContainerProcessorStrategyStorageData,
} from "./containerProcessorStrategyStoageData";
import {
  TicketSelectorStrategyStorageDataDefault,
  type TicketSelectorStrategyStorageData,
} from "./ticketSelectorStrategyStorageData";
import type { BranchCopyButtonStrategy } from "../strategies/BranchCopyButtonStrategy";
import { storageKeys, type StorageKey } from "./storageKeys";

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

export const saveHostnames = (hostnames: string[]): Promise<void> =>
  saveValue<string[]>(storageKeys.savedHostnames, hostnames);

export const getHostnames = (): Promise<string[]> =>
  getValueOrDefault<string[]>(storageKeys.savedHostnames, []);

export const saveContainerProcessorStrategies = (
  strategies: ContainerProcessorStrategyStorageData
): Promise<void> =>
  saveValue<ContainerProcessorStrategyStorageData>(
    storageKeys.containerProcessorStrategies,
    strategies
  );

export const getContainerProcessorStrategies =
  (): Promise<ContainerProcessorStrategyStorageData> =>
    getValueOrDefault<ContainerProcessorStrategyStorageData>(
      storageKeys.containerProcessorStrategies,
      containerProcessorStrategyStorageDataDefault
    );

export const saveTicketSelectorStrategies = (
  strategies: TicketSelectorStrategyStorageData
): Promise<void> =>
  saveValue<TicketSelectorStrategyStorageData>(
    storageKeys.ticketSelectorStrategies,
    strategies
  );

export const getTicketSelectorStrategies =
  (): Promise<TicketSelectorStrategyStorageData> =>
    getValueOrDefault<TicketSelectorStrategyStorageData>(
      storageKeys.ticketSelectorStrategies,
      TicketSelectorStrategyStorageDataDefault
    );

export const saveBranchCopyButtonStrategies = (
  strategies: BranchCopyButtonStrategy[]
): Promise<void> =>
  saveValue<BranchCopyButtonStrategy[]>(
    storageKeys.branchCopyButtonStrategies,
    strategies
  );

export const getBranchCopyButtonStrategies = (): Promise<
  BranchCopyButtonStrategy[]
> =>
  getValueOrDefault<BranchCopyButtonStrategy[]>(
    storageKeys.branchCopyButtonStrategies,
    []
  );
