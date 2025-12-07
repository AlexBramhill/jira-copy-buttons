import type { ITicketSelectorStrategy } from "./ITicketSelectorStrategy";
import { ticketPageSelectorStrategy } from "./default-strategies/ticketPageSelectorStrategy";
import { ticketModalSelectorStrategy } from "./default-strategies/ticketModalSelectorStrategy";
import type { TicketSelectorStrategyName } from "../../repository/ticketSelectorStrategyStorageData";

export const DEFAULT_TICKET_SELECTOR_STRATEGIES = {
  ticketModalSelectorStrategy,
  ticketPageSelectorStrategy,
} satisfies {
  [K in TicketSelectorStrategyName]: ITicketSelectorStrategy;
};
