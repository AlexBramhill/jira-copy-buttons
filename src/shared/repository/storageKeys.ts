interface StorageData {
  savedUrlFragment: string;
}

export const storageKeys = {
  savedUrlFragment: "savedUrlFragment",
} as const satisfies { [K in keyof StorageData]: K };
