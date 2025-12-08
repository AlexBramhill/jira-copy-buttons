import { repository } from "../../shared/repository/chromeStorageSync";
import { DEFAULT_TICKET_SELECTOR_STRATEGIES } from "../../shared/strategies/ticket-selector-strategies/defaultTicketSelectorStrategies";
import type { TicketSelectorStrategy } from "../../shared/strategies/ticket-selector-strategies/ITicketSelectorStrategy";
import { CONTAINER_PROCESSOR_STRATEGIES } from "../container-processor-strategies/allContainerProcessorStrategies";
import type { IContainerProcessorStrategy } from "../container-processor-strategies/IContainerProcessorStrategy";

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

// TODO: make this an array
export const getEnabledContainerProcessorStrategies = async (): Promise<
  IContainerProcessorStrategy[]
> => {
  const strategyEnabled = await repository.containerProcessorStrategies.get();

  return getEnabledStrategies(CONTAINER_PROCESSOR_STRATEGIES, strategyEnabled);
};
