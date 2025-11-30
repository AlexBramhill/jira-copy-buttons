import { logger } from "../../../shared/logger";
import type { IContainerProcessorStrategy } from "../IContainerProcessorStrategy";

export const debugStrategy: IContainerProcessorStrategy = {
  process: ({ container, ticketSelectorStrategy }) => {
    logger.debug({ container }, "Debug Strategy: Processing container");

    var prefixElement = ticketSelectorStrategy.selectPrefixElement(container);

    if (prefixElement) {
      prefixElement.style.border = "2px solid red";
    }

    var titleElement = ticketSelectorStrategy.selectTitleElement(container);

    if (titleElement) {
      titleElement.style.border = "2px solid blue";
    }

    var buttonElement =
      ticketSelectorStrategy.selectElementToAddButtonTo(container);

    if (buttonElement) {
      buttonElement.style.border = "2px solid green";
    }
  },

  cleanUp: (container: HTMLElement) => {
    logger.debug({ container }, "Debug Strategy: Cleaning up container");
  },
};
