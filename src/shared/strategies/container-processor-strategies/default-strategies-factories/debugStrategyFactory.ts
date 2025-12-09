import {
  createDebugButtonCss,
  createDebugTitleCss,
  createDebugPrefixCss,
} from "../../../../content/css/debugCss";
import { logger } from "../../../logger";
import { addClassToElement } from "../../../page-interactors/elementClassModifier";
import type { TicketSelectorStrategy } from "../../ticket-selector-strategies/TicketSelectorStrategy";
import type { ContainerProcessorStrategy } from "../ContainerProcessorStrategy";

export const createDebugStrategy = (): ContainerProcessorStrategy => ({
  name: "Debug",
  process: ({ container, ticketSelectorStrategy }) => {
    logger.debug({ container }, "Debug Strategy: Processing container");
    highlightPrefixElement(ticketSelectorStrategy, container);
    highlightTitleElement(ticketSelectorStrategy, container);
    highlightButtonElement(ticketSelectorStrategy, container);
  },
});

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
