import { createElementName, ELEMENT_PREFIX } from "../../helpers/elementNamer";
import type { ITicketSelectorStrategy } from "../../ticket-selector-strategies/ITicketSelectorStrategy";
import type { IContainerProcessorStrategy } from "../IContainerProcessorStrategy";
import { logger } from "../../../shared/logger";
import { getBranchCopyButtonConfigs } from "../../../shared/repository/chromeStorageSync";
import type { BranchCopyButtonConfig } from "../../../shared/repository/BranchCopyButtonConfig";
import { toBranchCopyButtonText } from "../../../shared/transformers/branchCopyButtonTransformer";

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

const upsertButtonOnDom = (
  branchCopyButtonConfig: BranchCopyButtonConfig,
  prefixText: string,
  titleText: string,
  domElementToAppend: HTMLElement | null
) => {
  const buttonId = createElementName(
    `copy-button-${branchCopyButtonConfig.buttonName}`
  );

  if (document.getElementById(buttonId)) {
    logger.debug({ buttonId }, "Button already exists, skipping injection");
    return;
  }

  const copyText = toBranchCopyButtonText(
    prefixText,
    titleText,
    branchCopyButtonConfig
  );

  const button = createButton(
    buttonId,
    branchCopyButtonConfig.buttonName,
    copyText
  );

  if (domElementToAppend) {
    domElementToAppend.appendChild(button);
  }
};

const createButton = (
  buttonId: string,
  buttonText: string,
  ticketName: string
) => {
  const button = document.createElement("button");
  button.id = buttonId;
  button.textContent = buttonText;
  button.style.marginLeft = "8px";
  button.style.height = "32px";
  button.onclick = (event) => {
    event.stopPropagation();
    event.preventDefault();
    navigator.clipboard.writeText(ticketName);
  };
  return button;
};

const getTextFromElementExcludingInjectedElements = (
  element: HTMLElement | null
) => {
  if (!element) return "";

  return Array.from(element.childNodes)
    .filter((node) => !containsInjectedTextElement(node))
    .map((node) => node.textContent)
    .join("")
    .trim();
};

const containsInjectedTextElement = (node: ChildNode): boolean => {
  if (node.nodeType === Node.ELEMENT_NODE && node instanceof HTMLElement) {
    const hasInjectedElement = node.id?.startsWith(ELEMENT_PREFIX);

    return hasInjectedElement;
  }

  return false;
};

export const injectCopyTextButtonStrategy: IContainerProcessorStrategy = {
  processContainer: processContainer,
};
