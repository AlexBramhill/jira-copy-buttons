import type { ITicketSelectorStrategy } from "../ticket-selector-strategies/ITicketSelectorStrategy";
import { logger } from "../../shared/logger";
import { getEnabledContainerProcessorStrategies } from "../helpers/strategyGetter";

export const addProcessJiraPageEventListener = (
  ticketSelectorStrategies: ITicketSelectorStrategy[]
) => {
  const observer = new MutationObserver(() => {
    logger.debug("DOM mutated, processing page again");
    processPage(ticketSelectorStrategies);
  });

  observer.observe(document, {
    childList: true,
    subtree: true,
  });
};

export const processPage = (
  ticketSelectorStrategies: ITicketSelectorStrategy[]
) => {
  ticketSelectorStrategies.forEach(async (ticketSelectorStrategy) => {
    const containers = ticketSelectorStrategy.selectContainers();

    const enabledContainerProcessorStrategies =
      await getEnabledContainerProcessorStrategies();

    containers.forEach((container) => {
      enabledContainerProcessorStrategies.forEach(
        (containerProcessorStrategy) => {
          containerProcessorStrategy.process({
            container,
            ticketSelectorStrategy,
          });
        }
      );
    });
  });
};
