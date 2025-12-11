import type { ContainerProcessorStrategy } from "../strategies/container-processor-strategies/ContainerProcessorStrategy";
import { createDefaultContainerProcessorStrategies } from "../strategies/container-processor-strategies/defaultContainerProcessorStrategiesFactory";
import type { ToggleableStorageData } from "./ToggleableStorageData";

export type ContainerProcessorStrategyStorageDataItem =
  ContainerProcessorStrategy & ToggleableStorageData;

export type ContainerProcessorStrategyStorageData =
  ContainerProcessorStrategyStorageDataItem[];

export const createDefaultContainerProcessorStrategyStorageData: () => ContainerProcessorStrategyStorageData =
  () => [
    ...createDefaultContainerProcessorStrategies().map((strategy) => ({
      isEnabled: true,
      ...strategy,
    })),
  ];
