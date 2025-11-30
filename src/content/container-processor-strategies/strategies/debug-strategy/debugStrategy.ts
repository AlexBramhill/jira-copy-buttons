import { logger } from "../../../../shared/logger";
import type { IContainerProcessorStrategy } from "../../IContainerProcessorStrategy";
import { addClassToElement } from "../../../page-interactors/elementClassModifier";
import { addDebugCssClassesToStylesheet, DEBUG_CSS } from "./debugStrategyCss";

export const debugStrategy: IContainerProcessorStrategy = {
  process: ({ container, ticketSelectorStrategy }) => {
    addDebugCssClassesToStylesheet();

    logger.debug({ container }, "Debug Strategy: Processing container");
    const prefixElement = ticketSelectorStrategy.selectPrefixElement(container);
    if (prefixElement) {
      addClassToElement(prefixElement, DEBUG_CSS.PREFIX.className);
    }

    const titleElement = ticketSelectorStrategy.selectTitleElement(container);
    if (titleElement) {
      addClassToElement(titleElement, DEBUG_CSS.TITLE.className);
    }

    const buttonElement =
      ticketSelectorStrategy.selectElementToAddButtonTo(container);
    if (buttonElement) {
      addClassToElement(buttonElement, DEBUG_CSS.BUTTON.className);
    }
  },
};
