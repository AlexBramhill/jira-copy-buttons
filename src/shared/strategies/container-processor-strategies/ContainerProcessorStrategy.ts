import type { TicketSelectorStrategy } from "../ticket-selector-strategies/ITicketSelectorStrategy";

export type ContainerProcessorStrategy = {
  process: ({
    container,
    ticketSelectorStrategy,
  }: {
    container: HTMLElement;
    ticketSelectorStrategy: TicketSelectorStrategy;
  }) => void;
};
