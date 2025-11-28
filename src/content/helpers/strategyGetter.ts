import {
  getContainerProcessorStrategies,
  getTicketSelectorStrategies,
} from "../../shared/repository/chromeStorageSync";
import { containerProcessorStrategies } from "../container-processor-strategies/allContainerProcessorStrategies";
import type { IContainerProcessorStrategy } from "../container-processor-strategies/IContainerProcessorStrategy";
import { ticketSelectorStrategies } from "../ticket-selector-strategies/allTicketSelectorStrategies";
import type { ITicketSelectorStrategy } from "../ticket-selector-strategies/ITicketSelectorStrategy";

export const getEnabledStrategies = <
  TStrategy,
  TStrategyName extends string,
  TStorageData extends Record<TStrategyName, boolean>
>(
  allStrategies: Record<TStrategyName, TStrategy>,
  enabledFlags: TStorageData
): TStrategy[] => {
  return (Object.keys(allStrategies) as TStrategyName[])
    .filter((key) => enabledFlags[key] === true)
    .map((key) => allStrategies[key]);
};

export const getEnabledContainerProcessorStrategies = async (): Promise<
  IContainerProcessorStrategy[]
> => {
  const strategyEnabled = await getContainerProcessorStrategies();

  return getEnabledStrategies(containerProcessorStrategies, strategyEnabled);
};

export const getEnabledTicketSelectorStrategies = async (): Promise<
  ITicketSelectorStrategy[]
> => {
  const strategyEnabled = await getTicketSelectorStrategies();
  return getEnabledStrategies(ticketSelectorStrategies, strategyEnabled);
};
