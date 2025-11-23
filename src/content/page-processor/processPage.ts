import { allContainerProcessorStrategies } from "../container-processor-strategies/allContainerProcessorStrategies";
import type { ITicketSelectorStrategy } from "../ticket-selector-strategies/ITicketSelectorStrategy";
import { logger } from "../../shared/logger";

export const addProcessPageEventListener = (
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
  ticketSelectorStrategies.forEach((ticketSelectorStrategy) => {
    const containers = ticketSelectorStrategy.selectContainers();

    containers.forEach((container) => {
      allContainerProcessorStrategies.forEach((processorStrategy) => {
        processorStrategy.processContainer({
          container,
          ticketSelectorStrategy,
        });
      });
    });
  });
};
