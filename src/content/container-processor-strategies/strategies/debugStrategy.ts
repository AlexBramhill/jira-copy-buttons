import { logger } from "../../../shared/logger";
import type { IContainerProcessorStrategy } from "../IContainerProcessorStrategy";
import { addClassToElement } from "../../page-interactors/elementClassModifier";
import {
  createDebugPrefixCss,
  createDebugTitleCss,
  createDebugButtonCss,
} from "../../css/debugCss";
import type { TicketSelectorStrategy } from "../../../shared/strategies/ticket-selector-strategies/ITicketSelectorStrategy";

export const debugStrategy: IContainerProcessorStrategy = {
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
