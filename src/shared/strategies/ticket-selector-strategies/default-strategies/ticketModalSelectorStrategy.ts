import {
  selectElementByTestId,
  selectElementsByTestId,
} from "../../../page-interactors/elementSelectors";
import { selectButtonDivUnderTitle } from "../../../page-interactors/jiraSpecificElementSelectors";
import type { TicketSelectorStrategy as TicketSelectorStrategy } from "../ITicketSelectorStrategy";

/**
 * Rule for ticket modal ie https://example.atlassian.net/jira/software/projects/PD/boards/1?selectedIssue=PD-1
 */
export const ticketModalSelectorStrategy: TicketSelectorStrategy = {
  selectContainers: () =>
    selectElementsByTestId(
      "issue.views.issue-details.issue-modal.modal-dialog"
    ),
  selectPrefixElement: (container: HTMLElement) =>
    selectElementByTestId(
      "issue.views.issue-base.foundation.breadcrumbs.current-issue.item",
      container
    ),
  selectTitleElement: (container: HTMLElement) =>
    selectElementByTestId(
      "issue.views.issue-base.foundation.summary.heading",
      container
    ),
  selectElementToAddButtonTo: (container: HTMLElement) =>
    selectButtonDivUnderTitle(container),
};
