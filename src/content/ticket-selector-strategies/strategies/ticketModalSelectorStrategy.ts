import type { ITicketSelectorStrategy as ITicketSelectorStrategy } from "../ITicketSelectorStrategy";

/**
 * Rule for ticket modal ie https://example.atlassian.net/jira/software/projects/PD/boards/1?selectedIssue=PD-1
 */
export const ticketModalSelectorStrategy: ITicketSelectorStrategy = {
  selectContainers: () =>
    document.querySelectorAll(
      '[data-testid="issue.views.issue-details.issue-modal.modal-dialog"]'
    ),
  selectPrefixElement: (_container: Element) =>
    _container.querySelector(
      '[data-testid="issue.views.issue-base.foundation.breadcrumbs.current-issue.item"]'
    ),
  selectTitleElement: (_container: Element) =>
    _container.querySelector(
      '[data-testid="issue.views.issue-base.foundation.summary.heading"]'
    ),
};
