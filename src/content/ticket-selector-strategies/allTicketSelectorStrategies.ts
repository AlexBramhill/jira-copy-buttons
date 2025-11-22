import { ticketPageSelectorStrategy } from "./strategies/ticketPageSelectorStrategy";
import type { ITicketSelectorStrategy } from "./ITicketSelectorStrategy";
import { ticketModalSelectorStrategy } from "./strategies/ticketModalSelectorStrategy";
import { ticketCardSelectorStrategy } from "./strategies/ticketCardSelectorStrategy";

export const allTicketSelectorStrategies: ITicketSelectorStrategy[] = [
  ticketPageSelectorStrategy,
  ticketModalSelectorStrategy,
  ticketCardSelectorStrategy,
];
