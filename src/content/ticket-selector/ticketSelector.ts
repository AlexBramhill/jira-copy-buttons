import type { ITicketSelectorStrategy } from "../ticket-selector-strategies/ITicketSelectorStrategy";

export const addProcessPageEventListener = (
  selectorStrategies: ITicketSelectorStrategy[]
) => {
  const observer = new MutationObserver(() => {
    console.log("DOM mutated, processing page again.");
    processPage(selectorStrategies);
  });

  observer.observe(document, {
    childList: true,
    subtree: true,
  });
};

export const processPage = (selectorStrategies: ITicketSelectorStrategy[]) => {
  selectorStrategies.forEach((strategy) => {
    const containers = strategy.selectContainers();

    containers.forEach((container) => {
      var ticketPrefixElement = strategy.selectPrefixElement(container);
      if (!ticketPrefixElement) {
        console.log("Could not find prefix element for container", container);
        return;
      }
      console.log("Found ticket prefix element:", ticketPrefixElement);
      var ticketTitleElement = strategy.selectTitleElement(container);
      if (!ticketTitleElement) {
        console.log("Could not find title element for container", container);
        return;
      }
      console.log("Found ticket title element:", ticketTitleElement);
      injectCopyToClipboardButtonInContainer({
        container,
        ticketName: "Tester copy and paste copy", // TODO: Generate branch name
        strategy,
      });
    });
  });
};

// TODO: Make the location for the button configurable
const injectCopyToClipboardButtonInContainer = ({
  container,
  ticketName,
  strategy,
}: {
  container: Element;
  ticketName: string;
  strategy: ITicketSelectorStrategy;
}) => {
  console.log("Injecting button into container:", container);

  const buttonId = `copy-button-${ticketName}`;

  // Check if button already exists
  if (document.getElementById(buttonId)) {
    console.log("Button already exists, skipping injection");
    return;
  }

  const button = document.createElement("button");
  button.id = buttonId;
  button.textContent = "Copy Branch Name";
  button.style.marginLeft = "8px";
  button.onclick = () => {
    navigator.clipboard.writeText(ticketName);
  };
  const titleElement = strategy.selectTitleElement(container);
  if (titleElement) {
    titleElement.appendChild(button);
  }
};
