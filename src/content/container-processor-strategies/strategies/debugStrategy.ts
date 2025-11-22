import type { IContainerProcessorStrategy } from "../IContainerProcessorStrategy";

export const debugStrategy: IContainerProcessorStrategy = {
  processContainer: ({ container, ticketSelectorStrategy }) => {
    console.log("Debug Strategy: Processing container", container);

    var prefixElement = ticketSelectorStrategy.selectPrefixElement(container);
    console.log("Debug Strategy: Prefix element", prefixElement);

    if (prefixElement) {
      prefixElement.style.border = "2px solid red";
    }

    var titleElement = ticketSelectorStrategy.selectTitleElement(container);
    console.log("Debug Strategy: Title element", titleElement);

    if (titleElement) {
      titleElement.style.border = "2px solid blue";
    }
  },
};
