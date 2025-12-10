import { logger } from "../../shared/logger";
import { addCssRootClass } from "../../shared/page-interactors/cssInjector";
import type { TicketSelectorStrategy } from "../../shared/strategies/ticket-selector-strategies/TicketSelectorStrategy";
import { selectAll } from "../../shared/page-interactors/selector";
import { createDefaultContainerProcessorStrategies } from "../../shared/strategies/container-processor-strategies/defaultContainerProcessorStrategiesFactory";

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
  ticketSelectorStrategies.forEach((ticketSelectorStrategy) => {
    const containers = selectAll(ticketSelectorStrategy.containerSelector);

    // TODO revert container processor strategies to only be a boolean toggle.
    const containerProcessorStrategies =
      createDefaultContainerProcessorStrategies();

    containers.forEach((container) => {
      containerProcessorStrategies.forEach((containerProcessorStrategy) => {
        containerProcessorStrategy.process({
          container,
          ticketSelectorStrategy,
        });
      });
    });
  });
};
