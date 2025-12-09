import { createDebugStrategy } from "./default-strategies-factories/debugStrategyFactory";
import { createInjectCopyTextButtonStrategy } from "./default-strategies-factories/injectCopyTextButtonStrategyFactory";

export const createDefaultContainerProcessorStrategies = () => [
  createInjectCopyTextButtonStrategy(),
  createDebugStrategy(),
];
