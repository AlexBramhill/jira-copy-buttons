import { DEFAULT_TICKET_SELECTOR_STRATEGIES_ARRAY } from "../strategies/ticket-selector-strategies/defaultTicketSelectorStrategies";
import type { TicketSelectorStrategy } from "../strategies/ticket-selector-strategies/TicketSelectorStrategy";
import type { ToggleableStorageData } from "./ToggleableStorageData";

export type TicketSelectorStrategyStorageDataItem = ToggleableStorageData &
  TicketSelectorStrategy;

export type TicketSelectorStrategyStorageData =
  TicketSelectorStrategyStorageDataItem[];

export const DEFAULT_TICKET_SELECTOR_STRATEGY_STORAGE_DATA: TicketSelectorStrategyStorageData =
  [
    ...DEFAULT_TICKET_SELECTOR_STRATEGIES_ARRAY.map((strategy) => ({
      isEnabled: true,
      ...strategy,
    })),
  ];
