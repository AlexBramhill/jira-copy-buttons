import type { ContainerProcessorStrategy } from "./ContainerProcessorStrategy";
import { debugStrategy } from "./default-strategies/debugStrategy";
import { injectCopyTextButtonStrategy } from "./default-strategies/injectCopyTextButtonStrategy";

export const DEFAULT_CONTAINER_PROCESSOR_STRATEGIES = {
  injectCopyTextButtonStrategy,
  debugStrategy,
} satisfies {
  [key: string]: ContainerProcessorStrategy;
};

export const DEFAULT_CONTAINER_PROCESSOR_STRATEGIES_ARRAY: ContainerProcessorStrategy[] =
  Object.values(DEFAULT_CONTAINER_PROCESSOR_STRATEGIES);
