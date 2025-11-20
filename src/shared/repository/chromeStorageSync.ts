import { storageKeys } from "./storageKeys";

export const saveUrlFragment = async (urlFragment: string): Promise<void> => {
  await chrome.storage.sync.set({
    [storageKeys.savedUrlFragment]: urlFragment,
  });
};

export const getUrlFragment = async (): Promise<string | null> => {
  const result = await chrome.storage.sync.get([storageKeys.savedUrlFragment]);
  return result[storageKeys.savedUrlFragment] || null;
};
