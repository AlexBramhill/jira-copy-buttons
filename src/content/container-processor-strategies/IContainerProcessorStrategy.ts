import type { ITicketSelectorStrategy } from "../../shared/ticket-selector-strategies/ITicketSelectorStrategy";

export interface IContainerProcessorStrategy {
  process: ({
    container,
    ticketSelectorStrategy,
  }: {
    container: HTMLElement;
    ticketSelectorStrategy: ITicketSelectorStrategy;
  }) => void;
}
