import { logger } from "../../shared/logger";
import type { TicketSelectorStrategy } from "../../shared/strategies/ticket-selector-strategies/ITicketSelectorStrategy";
import { getEnabledContainerProcessorStrategies } from "../helpers/strategyGetter";
import { addCssRootClass } from "../page-interactors/cssInjector";

export const addProcessJiraPageEventListener = (
  ticketSelectorStrategies: TicketSelectorStrategy[]
) => {
  const observer = new MutationObserver(() => {
    logger.debug("DOM mutated, processing page again");
    addCssRootClass();
    processPage(ticketSelectorStrategies);
  });

  observer.observe(document, {
    childList: true,
    subtree: true,
  });
};

const processPage = (ticketSelectorStrategies: TicketSelectorStrategy[]) => {
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
