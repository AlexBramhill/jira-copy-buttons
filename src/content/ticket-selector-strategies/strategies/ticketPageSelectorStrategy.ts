import type { ITicketSelectorStrategy as ITicketSelectorStrategy } from "../ITicketSelectorStrategy";

/**
 * Rule for ticket page ie https://example.atlassian.net/browse/PD-1
 */
export const ticketPageSelectorStrategy: ITicketSelectorStrategy = {
  selectContainers: () =>
    document.querySelectorAll('[data-vc="FullPageIssueContainer"]'),
  selectPrefixElement: (container: HTMLElement) =>
    container.querySelector(
      '[data-testid="issue.views.issue-base.foundation.breadcrumbs.current-issue.item"]'
    ),
  selectTitleElement: (container: HTMLElement) =>
    container.querySelector(
      '[data-testid="issue.views.issue-base.foundation.summary.heading"]'
    ),
};
