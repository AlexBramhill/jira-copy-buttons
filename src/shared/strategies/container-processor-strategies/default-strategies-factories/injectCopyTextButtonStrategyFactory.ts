import { logger } from "../../../logger";
import { upsertCopyButtonOnDom } from "../../../page-interactors/buttonInjector";
import { getTextFromElementExcludingInjectedElements } from "../../../page-interactors/elementSelectors";
import { select } from "../../../page-interactors/selector";
import { repository } from "../../../repository/chromeStorageSync";
import type { TicketSelectorStrategy } from "../../ticket-selector-strategies/TicketSelectorStrategy";
import type { ContainerProcessorStrategy } from "../ContainerProcessorStrategy";

export const createInjectCopyTextButtonStrategy =
  (): ContainerProcessorStrategy => ({
    name: "Inject Copy Text Button",
    process: async ({
      container,
      ticketSelectorStrategy,
    }: {
      container: HTMLElement;
      ticketSelectorStrategy: TicketSelectorStrategy;
    }) => {
      logger.debug({ container }, "Injecting button into container");

      const branchCopyButtonStrategies = (
        await repository.branchCopyButtonStrategies.get()
      ).filter((strategy: any) => strategy.isEnabled);

      logger.debug(
        { branchCopyButtonStrategies },
        "Inject Copy Text Button Strategy: Retrieved enabled strategies"
      );

      const domElementToAppend = select(
        ticketSelectorStrategy.buttonLocationSelector,
        container
      );

      const prefixElement = select(
        ticketSelectorStrategy.prefixSelector,
        container
      );

      const titleElement = select(
        ticketSelectorStrategy.titleSelector,
        container
      );

      const prefixText =
        getTextFromElementExcludingInjectedElements(prefixElement);
      const titleText =
        getTextFromElementExcludingInjectedElements(titleElement);

      branchCopyButtonStrategies.forEach((branchCopyButtonStrategy) => {
        upsertCopyButtonOnDom(
          branchCopyButtonStrategy,
          prefixText,
          titleText,
          domElementToAppend
        );
      });
    },
  });
