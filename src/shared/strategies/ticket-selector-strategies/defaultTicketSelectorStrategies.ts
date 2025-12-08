import type { TicketSelectorStrategy } from "./ITicketSelectorStrategy";
import { ticketPageSelectorStrategy } from "./default-strategies/ticketPageSelectorStrategy";
import { ticketModalSelectorStrategy } from "./default-strategies/ticketModalSelectorStrategy";

export const DEFAULT_TICKET_SELECTOR_STRATEGIES = {
  ticketModalSelectorStrategy,
  ticketPageSelectorStrategy,
} satisfies {
  [key: string]: TicketSelectorStrategy;
};

export const DEFAULT_TICKET_SELECTOR_STRATEGIES_ARRAY: TicketSelectorStrategy[] =
  Object.values(DEFAULT_TICKET_SELECTOR_STRATEGIES);
