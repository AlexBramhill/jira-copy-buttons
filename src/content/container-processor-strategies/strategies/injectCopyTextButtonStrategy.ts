import type { ITicketSelectorStrategy } from "../../ticket-selector-strategies/ITicketSelectorStrategy";
import type { IContainerProcessorStrategy } from "../IContainerProcessorStrategy";
import { logger } from "../../../shared/logger";
import { getBranchCopyButtonConfigs } from "../../../shared/repository/chromeStorageSync";
import { upsertButtonOnDom } from "../../page-interactors/buttonInjector";
import { getTextFromElementExcludingInjectedElements } from "../../page-interactors/elementSelectors";

const processContainer = async ({
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

  const prefixText = getTextFromElementExcludingInjectedElements(prefixElement);
  const titleText = getTextFromElementExcludingInjectedElements(titleElement);

  configs.forEach((config) => {
    upsertButtonOnDom(config, prefixText, titleText, domElementToAppend);
  });
};

export const injectCopyTextButtonStrategy: IContainerProcessorStrategy = {
  processContainer: processContainer,
};
