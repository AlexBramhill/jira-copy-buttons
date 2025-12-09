import type { ConfigurableStrategy } from "../ConfigurableStrategy";
import type { ElementSelector } from "./ElementSelector";

export type TicketSelectorStrategy = {
  containerSelector: ElementSelector;
  prefixSelector: ElementSelector;
  titleSelector: ElementSelector;
  buttonLocationSelector: ElementSelector;
} & ConfigurableStrategy;
