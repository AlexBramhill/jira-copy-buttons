import {
  createDefaultTicketSelectorStrategies,
} from "../strategies/ticket-selector-strategies/defaultTicketSelectorStrategies";
import type { TicketSelectorStrategy } from "../strategies/ticket-selector-strategies/TicketSelectorStrategy";
import type { ToggleableStorageData } from "./ToggleableStorageData";

export type TicketSelectorStrategyStorageDataItem = ToggleableStorageData &
  TicketSelectorStrategy;

export type TicketSelectorStrategyStorageData =
  TicketSelectorStrategyStorageDataItem[];

export const createDefaultTicketSelectorStrategyStorageData: () => TicketSelectorStrategyStorageData =
  () => [
    ...createDefaultTicketSelectorStrategies().map((strategy) => ({
      isEnabled: true,
      ...strategy,
    })),
  ];
