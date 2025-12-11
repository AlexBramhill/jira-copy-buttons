import type { StrategyInfo } from "../StrategyInfo";

export type UrlProcessorStrategy = {
  hostname: string;
} & StrategyInfo;
