import type { ITicketSelectorStrategy } from "./ITicketSelectorStrategy";
import type { TicketSelectorStrategyName } from "../repository/ticketSelectorStrategyStorageData";
import { ticketPageSelectorStrategy } from "./strategies/ticketPageSelectorStrategy";
import { ticketModalSelectorStrategy } from "./strategies/ticketModalSelectorStrategy";

export const defaultTicketSelectorStrategies = {
  ticketModalSelectorStrategy,
  ticketPageSelectorStrategy,
} satisfies {
  [K in TicketSelectorStrategyName]: ITicketSelectorStrategy;
};
