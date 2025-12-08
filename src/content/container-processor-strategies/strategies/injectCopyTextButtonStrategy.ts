import type { IContainerProcessorStrategy } from "../IContainerProcessorStrategy";
import { logger } from "../../../shared/logger";
import { upsertCopyButtonOnDom } from "../../page-interactors/buttonInjector";
import type { ITicketSelectorStrategy } from "../../../shared/strategies/ticket-selector-strategies/ITicketSelectorStrategy";
import { getTextFromElementExcludingInjectedElements } from "../../../shared/page-interactors/elementSelectors";
import { repository } from "../../../shared/repository/chromeStorageSync";

export const injectCopyTextButtonStrategy: IContainerProcessorStrategy = {
  process: async ({
    container,
    ticketSelectorStrategy,
  }: {
    container: HTMLElement;
    ticketSelectorStrategy: ITicketSelectorStrategy;
  }) => {
    logger.debug({ container }, "Injecting button into container");

    const branchCopyButtonStrategies = (
      await repository.branchCopyButtonStrategies.get()
    ).filter((strategy) => strategy.isEnabled);

    logger.debug(
      { branchCopyButtonStrategies },
      "Inject Copy Text Button Strategy: Retrieved enabled strategies"
    );
    const domElementToAppend =
      ticketSelectorStrategy.selectElementToAddButtonTo(container);

    const prefixElement = ticketSelectorStrategy.selectPrefixElement(container);
    const titleElement = ticketSelectorStrategy.selectTitleElement(container);

    const prefixText =
      getTextFromElementExcludingInjectedElements(prefixElement);
    const titleText = getTextFromElementExcludingInjectedElements(titleElement);

    branchCopyButtonStrategies.forEach((branchCopyButtonStrategy) => {
      upsertCopyButtonOnDom(
        branchCopyButtonStrategy,
        prefixText,
        titleText,
        domElementToAppend
      );
    });
  },
};
