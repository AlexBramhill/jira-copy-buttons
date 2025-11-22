import { ticketPageSelectorStrategy } from "./strategies/ticketPageSelectorStrategy";
import type { ITicketSelectorStrategy } from "./ITicketSelectorStrategy";
import { ticketModalSelectorStrategy } from "./strategies/ticketModalSelectorStrategy";

export const allTicketSelectorStrategies: ITicketSelectorStrategy[] = [
  ticketPageSelectorStrategy,
  ticketModalSelectorStrategy,
];
