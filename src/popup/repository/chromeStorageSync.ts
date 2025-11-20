export const saveUrl = (url: string): Promise<void> => {
  return new Promise((resolve) => {
    chrome.storage.sync.set({ savedUrl: url }, () => {
      resolve();
    });
  });
};

export const getUrl = (): Promise<string | null> => {
  return new Promise((resolve) => {
    chrome.storage.sync.get(["savedUrl"], (result) => {
      resolve(result.savedUrl || null);
    });
  });
};
