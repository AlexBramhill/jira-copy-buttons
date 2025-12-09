import { createTicketModalSelectorStrategy } from "./default-strategies-factories/ticketModalSelectorStrategyFactory";
import { createTicketPageSelectorStrategy } from "./default-strategies-factories/ticketPageSelectorStrategyFactory";

export const createDefaultTicketSelectorStrategies = () => [
  createTicketModalSelectorStrategy(),
  createTicketPageSelectorStrategy(),
];
