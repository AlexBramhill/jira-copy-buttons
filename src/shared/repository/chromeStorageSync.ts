import { storageKeys } from "./storageKeys";

export const saveHostnames = async (hostnames: string[]): Promise<void> => {
  await chrome.storage.sync.set({
    [storageKeys.savedHostnames]: hostnames,
  });
};

export const getHostnames = async (): Promise<string[]> => {
  const result = await chrome.storage.sync.get([storageKeys.savedHostnames]);
  const stored = result[storageKeys.savedHostnames];
  return Array.isArray(stored) ? stored : [];
};
