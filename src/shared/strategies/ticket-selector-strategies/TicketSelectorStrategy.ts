import type { StrategyInfo } from "../StrategyInfo";
import type { ElementSelector } from "./ElementSelector";

export type TicketSelectorStrategy = {
  containerSelector: ElementSelector;
  prefixSelector: ElementSelector;
  titleSelector: ElementSelector;
  buttonLocationSelector: ElementSelector;
} & StrategyInfo;
