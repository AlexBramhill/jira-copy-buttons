import { ticketPageSelectorStrategy } from "./strategies/ticketPageSelectorStrategy";
import type { ITicketSelectorStrategy } from "./ITicketSelectorStrategy";

export const allTicketSelectorStrategies: ITicketSelectorStrategy[] = [
  ticketPageSelectorStrategy,
];
