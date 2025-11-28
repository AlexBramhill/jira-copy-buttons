import type { ITicketSelectorStrategy } from "./ITicketSelectorStrategy";
import type { TicketSelectorStrategyName } from "../../shared/repository/ticketSelectorStrategy";
import { ticketPageSelectorStrategy } from "./strategies/ticketPageSelectorStrategy";
import { ticketModalSelectorStrategy } from "./strategies/ticketModalSelectorStrategy";

export const ticketSelectorStrategies = {
  ticketModalSelectorStrategy,
  ticketPageSelectorStrategy,
} satisfies {
  [K in TicketSelectorStrategyName]: ITicketSelectorStrategy;
};
