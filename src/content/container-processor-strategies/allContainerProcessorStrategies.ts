import { debugStrategy } from "./strategies/debugStrategy";
import { injectCopyTextButtonStrategy } from "./strategies/injectCopyTextButtonStrategy";

export const allContainerProcessorStrategies = [
  injectCopyTextButtonStrategy,
  debugStrategy,
];
