export type TicketSelectorStrategyName =
  | "ticketModalSelectorStrategy"
  | "ticketPageSelectorStrategy";

export const ticketSelectorStrategyNames = {
  ticketModalSelectorStrategy: "ticketModalSelectorStrategy",
  ticketPageSelectorStrategy: "ticketPageSelectorStrategy",
} as const satisfies { [K in TicketSelectorStrategyName]: K };

export type TicketSelectorStrategyStorageData = {
  [K in TicketSelectorStrategyName]: boolean;
};

export const TicketSelectorStrategyStorageDataDefault: TicketSelectorStrategyStorageData =
  {
    ticketModalSelectorStrategy: true,
    ticketPageSelectorStrategy: true,
  } as const;
