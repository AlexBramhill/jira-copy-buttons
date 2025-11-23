import type { IContainerProcessorStrategy } from "../IContainerProcessorStrategy";
import { logger } from "../../../shared/logger";

export const debugStrategy: IContainerProcessorStrategy = {
  processContainer: ({ container, ticketSelectorStrategy }) => {
    logger.debug("Debug Strategy: Processing container", container);

    var prefixElement = ticketSelectorStrategy.selectPrefixElement(container);

    if (prefixElement) {
      prefixElement.style.border = "2px solid red";
    }

    var titleElement = ticketSelectorStrategy.selectTitleElement(container);

    if (titleElement) {
      titleElement.style.border = "2px solid blue";
    }
  },
};
