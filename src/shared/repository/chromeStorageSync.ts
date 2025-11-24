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

export const saveBranchFormatStrings = (
  formatStrings: string[]
): Promise<void> =>
  saveValue<string[]>(storageKeys.branchFormatStrings, formatStrings);

export const getBranchFormatStrings = (): Promise<string[]> =>
  getValue<string[]>(storageKeys.branchFormatStrings, []);
