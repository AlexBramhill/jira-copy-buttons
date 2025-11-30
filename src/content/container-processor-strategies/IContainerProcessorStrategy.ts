import type { ITicketSelectorStrategy } from "../ticket-selector-strategies/ITicketSelectorStrategy";

export interface IContainerProcessorStrategy {
  process: ({
    container,
    ticketSelectorStrategy,
  }: {
    container: HTMLElement;
    ticketSelectorStrategy: ITicketSelectorStrategy;
  }) => void;

  cleanUp: (container: HTMLElement) => void;
}
