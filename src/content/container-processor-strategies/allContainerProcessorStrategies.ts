import type { IContainerProcessorStrategy } from "./IContainerProcessorStrategy";
import type { ContainerProcessorStrategyName } from "../../shared/repository/containerProcessorStrategy";
import { debugStrategy } from "./strategies/debugStrategy";
import { injectCopyTextButtonStrategy } from "./strategies/injectCopyTextButtonStrategy";

export const containerProcessorStrategies = {
  injectCopyTextButtonStrategy,
  debugStrategy,
} satisfies {
  [K in ContainerProcessorStrategyName]: IContainerProcessorStrategy;
};
