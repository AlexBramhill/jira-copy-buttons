import type { IContainerProcessorStrategy } from "../IContainerProcessorStrategy";
import { logger } from "../../../shared/logger";
import { getBranchCopyButtonStrategies } from "../../../shared/repository/chromeStorageSync";
import { upsertCopyButtonOnDom } from "../../page-interactors/buttonInjector";
import type { ITicketSelectorStrategy } from "../../../shared/strategies/ticket-selector-strategies/ITicketSelectorStrategy";
import { getTextFromElementExcludingInjectedElements } from "../../../shared/page-interactors/elementSelectors";

export const injectCopyTextButtonStrategy: IContainerProcessorStrategy = {
  process: async ({
    container,
    ticketSelectorStrategy,
  }: {
    container: HTMLElement;
    ticketSelectorStrategy: ITicketSelectorStrategy;
  }) => {
    logger.debug({ container }, "Injecting button into container");

    const configs = await getBranchCopyButtonStrategies();
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
};
