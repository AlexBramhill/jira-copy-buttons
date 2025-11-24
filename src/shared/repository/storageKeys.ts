interface StorageData {
  savedHostnames: string[];
  branchFormatStrings: string[];
}

export const storageKeys = {
  savedHostnames: "savedHostnames",
  branchFormatStrings: "branchFormatStrings",
} as const satisfies { [K in keyof StorageData]: K };
