import type { TicketSelectorStrategy } from "../../shared/strategies/ticket-selector-strategies/ITicketSelectorStrategy";

export interface IContainerProcessorStrategy {
  process: ({
    container,
    ticketSelectorStrategy,
  }: {
    container: HTMLElement;
    ticketSelectorStrategy: TicketSelectorStrategy;
  }) => void;
}
