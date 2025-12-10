import type { StrategyInfo } from "../StrategyInfo";
import type { TicketSelectorStrategy } from "../ticket-selector-strategies/TicketSelectorStrategy";

export type ContainerProcessorStrategy = {
  process: ({
    container,
    ticketSelectorStrategy,
  }: {
    container: HTMLElement;
    ticketSelectorStrategy: TicketSelectorStrategy;
  }) => void;
} & StrategyInfo;
