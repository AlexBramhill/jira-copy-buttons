export type ContainerProcessorStrategyName =
  | "injectCopyTextButtonStrategy"
  | "debugStrategy";

export const containerProcessorStrategyNames = {
  injectCopyTextButtonStrategy: "injectCopyTextButtonStrategy",
  debugStrategy: "debugStrategy",
} as const satisfies { [K in ContainerProcessorStrategyName]: K };

export type ContainerProcessorStrategyStorageDataItem = {
  isEnabled: boolean;
} & { name: ContainerProcessorStrategyName };

export type ContainerProcessorStrategyStorageData =
  ContainerProcessorStrategyStorageDataItem[];

export const DEFAULT_CONTAINER_PROCESSOR_STRATEGY_STORAGE_DATA_DEFAULT: ContainerProcessorStrategyStorageData =
  [
    {
      name: "injectCopyTextButtonStrategy",
      isEnabled: true,
    },
    {
      name: "debugStrategy",
      isEnabled: false,
    },
  ];
