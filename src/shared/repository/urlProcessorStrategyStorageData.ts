import { createDefaultUrlProcessorStrategies } from "../strategies/url-processor-strategy/defaultUrlProcessorStragiesFactory";
import type { UrlProcessorStrategy } from "../strategies/url-processor-strategy/UrlProcessorStrategy";
import type { ToggleableStorageData } from "./ToggleableStorageData";

export type UrlProcessorStrategyStorageDataItem = UrlProcessorStrategy &
  ToggleableStorageData;

export type UrlProcessorStrategyStorageData =
  UrlProcessorStrategyStorageDataItem[];

export const createDefaultUrlProcessorStrategyStorageData: () => UrlProcessorStrategyStorageData =
  () => [
    ...createDefaultUrlProcessorStrategies().map((strategy) => ({
      isEnabled: true,
      ...strategy,
    })),
  ];
