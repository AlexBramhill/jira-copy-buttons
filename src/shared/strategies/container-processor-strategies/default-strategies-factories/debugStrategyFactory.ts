import {
  createDebugButtonCss,
  createDebugTitleCss,
  createDebugPrefixCss,
} from "../../../../content/css/debugCss";
import { logger } from "../../../logger";
import { addClassToElement } from "../../../page-interactors/elementClassModifier";
import { select } from "../../../page-interactors/selector";
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

  const buttonElement = select(
    ticketSelectorStrategy.buttonLocationSelector,
    container
  );

  if (buttonElement) {
    addClassToElement(buttonElement, debugButtonCss.className);
  }
};

const highlightTitleElement = (
  ticketSelectorStrategy: TicketSelectorStrategy,
  container: HTMLElement
) => {
  const debugTitleCss = createDebugTitleCss();

  const titleElement = select(ticketSelectorStrategy.titleSelector, container);

  if (titleElement) {
    addClassToElement(titleElement, debugTitleCss.className);
  }
};

const highlightPrefixElement = (
  ticketSelectorStrategy: TicketSelectorStrategy,
  container: HTMLElement
) => {
  const debugPrefixCss = createDebugPrefixCss();

  const prefixElement = select(
    ticketSelectorStrategy.prefixSelector,
    container
  );

  if (prefixElement) {
    addClassToElement(prefixElement, debugPrefixCss.className);
  }
};
