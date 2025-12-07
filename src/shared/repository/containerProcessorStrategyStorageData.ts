export type ContainerProcessorStrategyName =
  | "injectCopyTextButtonStrategy"
  | "debugStrategy";

export const containerProcessorStrategyNames = {
  injectCopyTextButtonStrategy: "injectCopyTextButtonStrategy",
  debugStrategy: "debugStrategy",
} as const satisfies { [K in ContainerProcessorStrategyName]: K };

export type ContainerProcessorStrategyStorageData = {
  [K in ContainerProcessorStrategyName]: boolean;
};

export const DEFAULT_CONTAINER_PROCESSOR_STRATEGY_STORAGE_DATA_DEFAULT: ContainerProcessorStrategyStorageData =
  {
    injectCopyTextButtonStrategy: true,
    debugStrategy: false,
  } as const;
