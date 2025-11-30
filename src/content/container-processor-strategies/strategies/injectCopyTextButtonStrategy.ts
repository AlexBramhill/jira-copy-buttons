import type { ITicketSelectorStrategy } from "../../ticket-selector-strategies/ITicketSelectorStrategy";
import type { IContainerProcessorStrategy } from "../IContainerProcessorStrategy";
import { logger } from "../../../shared/logger";
import { getBranchCopyButtonConfigs } from "../../../shared/repository/chromeStorageSync";
import { upsertCopyButtonOnDom } from "../../page-interactors/buttonInjector";
import { getTextFromElementExcludingInjectedElements } from "../../page-interactors/elementSelectors";

export const injectCopyTextButtonStrategy: IContainerProcessorStrategy = {
  process: async ({
    container,
    ticketSelectorStrategy,
  }: {
    container: HTMLElement;
    ticketSelectorStrategy: ITicketSelectorStrategy;
  }) => {
    logger.debug({ container }, "Injecting button into container");

    const configs = await getBranchCopyButtonConfigs();
    const domElementToAppend =
      ticketSelectorStrategy.selectElementToAddButtonTo(container);

    const prefixElement = ticketSelectorStrategy.selectPrefixElement(container);
    const titleElement = ticketSelectorStrategy.selectTitleElement(container);

    const prefixText =
      getTextFromElementExcludingInjectedElements(prefixElement);
    const titleText = getTextFromElementExcludingInjectedElements(titleElement);

    configs.forEach((config) => {
      upsertCopyButtonOnDom(config, prefixText, titleText, domElementToAppend);
    });
  },

  cleanUp: () => {
    logger.debug("Inject Copy Text Button Strategy: No cleanup needed");
  },
};
