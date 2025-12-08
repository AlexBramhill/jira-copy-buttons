import {
  createDebugButtonCss,
  createDebugTitleCss,
  createDebugPrefixCss,
} from "../../../../content/css/debugCss";
import { addClassToElement } from "../../../../content/page-interactors/elementClassModifier";
import { logger } from "../../../logger";
import type { TicketSelectorStrategy } from "../../ticket-selector-strategies/ITicketSelectorStrategy";
import type { ContainerProcessorStrategy } from "../ContainerProcessorStrategy";

export const debugStrategy: ContainerProcessorStrategy = {
  process: ({ container, ticketSelectorStrategy }) => {
    logger.debug({ container }, "Debug Strategy: Processing container");

    highlightPrefixElement(ticketSelectorStrategy, container);
    highlightTitleElement(ticketSelectorStrategy, container);
    highlightButtonElement(ticketSelectorStrategy, container);
  },
};

const highlightButtonElement = (
  ticketSelectorStrategy: TicketSelectorStrategy,
  container: HTMLElement
) => {
  const debugButtonCss = createDebugButtonCss();

  const buttonElement =
    ticketSelectorStrategy.selectElementToAddButtonTo(container);

  if (buttonElement) {
    addClassToElement(buttonElement, debugButtonCss.className);
  }
};

const highlightTitleElement = (
  ticketSelectorStrategy: TicketSelectorStrategy,
  container: HTMLElement
) => {
  const debugTitleCss = createDebugTitleCss();

  const titleElement = ticketSelectorStrategy.selectTitleElement(container);

  if (titleElement) {
    addClassToElement(titleElement, debugTitleCss.className);
  }
};

const highlightPrefixElement = (
  ticketSelectorStrategy: TicketSelectorStrategy,
  container: HTMLElement
) => {
  const debugPrefixCss = createDebugPrefixCss();

  const prefixElement = ticketSelectorStrategy.selectPrefixElement(container);

  if (prefixElement) {
    addClassToElement(prefixElement, debugPrefixCss.className);
  }
};
