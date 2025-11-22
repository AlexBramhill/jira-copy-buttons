import {
  selectElementsByTestId,
  selectElementByTestId,
} from "../../helpers/elementSelector";
import type { ITicketSelectorStrategy as ITicketSelectorStrategy } from "../ITicketSelectorStrategy";

/**
 * Rule for ticket modal ie https://example.atlassian.net/jira/software/projects/PD/boards/1?selectedIssue=PD-1
 */
export const ticketModalSelectorStrategy: ITicketSelectorStrategy = {
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
};
