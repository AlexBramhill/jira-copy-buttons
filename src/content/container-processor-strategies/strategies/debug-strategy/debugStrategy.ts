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

  cleanUp: () => {
    logger.debug("Debug Strategy: Cleaning up injected styles");

    const cssClassesToRemove = Object.values(DEBUG_CSS).map(
      (cssClass) => cssClass.className
    );

    const elementsWithDebugClasses = document.querySelectorAll(
      cssClassesToRemove.map((className) => `.${className}`).join(", ")
    );

    elementsWithDebugClasses.forEach((element) => {
      element.classList.remove(
        DEBUG_CSS.PREFIX.className,
        DEBUG_CSS.TITLE.className,
        DEBUG_CSS.BUTTON.className
      );
    });
  },
};
