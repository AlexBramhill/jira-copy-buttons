import type { ContainerProcessorStrategy } from "../strategies/container-processor-strategies/ContainerProcessorStrategy";
import { DEFAULT_CONTAINER_PROCESSOR_STRATEGIES_ARRAY } from "../strategies/container-processor-strategies/defaultContainerProcessorStrategies";
import type { ToggleableStorageData } from "./ToggleableStorageData";

export type ContainerProcessorStrategyStorageDataItem = ToggleableStorageData &
  ContainerProcessorStrategy;

export type ContainerProcessorStrategyStorageData =
  ContainerProcessorStrategyStorageDataItem[];

export const DEFAULT_CONTAINER_PROCESSOR_STRATEGY_STORAGE_DATA_DEFAULT: ContainerProcessorStrategyStorageData =
  [
    ...DEFAULT_CONTAINER_PROCESSOR_STRATEGIES_ARRAY.map((strategy) => ({
      isEnabled: true,
      ...strategy,
    })),
  ];
