import type { IContainerProcessorStrategy } from "./IContainerProcessorStrategy";
import type { ContainerProcessorStrategyName } from "../../shared/repository/containerProcessorStrategyStorageData";
import { debugStrategy } from "./strategies/debugStrategy";
import { injectCopyTextButtonStrategy } from "./strategies/injectCopyTextButtonStrategy";

export const CONTAINER_PROCESSOR_STRATEGIES = {
  injectCopyTextButtonStrategy,
  debugStrategy,
} satisfies {
  [K in ContainerProcessorStrategyName]: IContainerProcessorStrategy;
};
