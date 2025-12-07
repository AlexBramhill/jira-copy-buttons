export type DefaultTicketSelectorStrategyName =
  | "ticketModalSelectorStrategy"
  | "ticketPageSelectorStrategy";

export const defaultTicketSelectorStrategyNames = {
  ticketModalSelectorStrategy: "ticketModalSelectorStrategy",
  ticketPageSelectorStrategy: "ticketPageSelectorStrategy",
} as const satisfies { [K in DefaultTicketSelectorStrategyName]: K };

export type TicketSelectorStrategyStorageData = {
  [K in DefaultTicketSelectorStrategyName]: boolean;
};

export const DEFAULT_TICKET_SELECTOR_STRATEGY_STORAGE_DATA: TicketSelectorStrategyStorageData =
  {
    ticketModalSelectorStrategy: true,
    ticketPageSelectorStrategy: true,
  } as const;
