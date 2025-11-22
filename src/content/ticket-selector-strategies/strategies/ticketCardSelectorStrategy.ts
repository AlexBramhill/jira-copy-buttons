import type { ITicketSelectorStrategy as ITicketSelectorStrategy } from "../ITicketSelectorStrategy";

/**
 * Rule for ticket modal ie https://example.atlassian.net/jira/software/projects/PD/boards/1?selectedIssue=PD-1
 */
export const ticketCardSelectorStrategy: ITicketSelectorStrategy = {
  selectContainers: () =>
    document.querySelectorAll(
      '[data-testid="platform-card.ui.card.focus-container"]'
    ),
  selectPrefixElement: (container: HTMLElement) =>
    container.querySelector('[data-testid="platform-card.common.ui.key.key"]'),
  selectTitleElement: (container: HTMLElement) =>
    container.querySelector(
      '[data-component-selector="platform-card.ui.card.card-content.content-section"]'
    ),
};
