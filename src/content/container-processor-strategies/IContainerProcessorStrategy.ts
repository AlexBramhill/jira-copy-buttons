import type { ITicketSelectorStrategy } from "../ticket-selector-strategies/ITicketSelectorStrategy";

export interface IContainerProcessorStrategy {
  processContainer: ({
    container,
    ticketSelectorStrategy,
  }: {
    container: Element;
    ticketSelectorStrategy: ITicketSelectorStrategy;
  }) => void;
}
