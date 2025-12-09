import { logger } from "../../shared/logger";
import { addCssRootClass } from "../../shared/page-interactors/cssInjector";
import { repository } from "../../shared/repository/chromeStorageSync";
import type { TicketSelectorStrategy } from "../../shared/strategies/ticket-selector-strategies/TicketSelectorStrategy";
import { selectAll } from "../../shared/page-interactors/selector";

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
    const containers = selectAll(ticketSelectorStrategy.containerSelector);

    const enabledContainerProcessorStrategies = (
      await repository.containerProcessorStrategies.get()
    ).filter((strategy) => strategy.isEnabled);

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
