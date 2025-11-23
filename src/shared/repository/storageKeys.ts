interface StorageData {
  savedHostnames: string[];
}

export const storageKeys = {
  savedHostnames: "savedHostnames",
} as const satisfies { [K in keyof StorageData]: K };
