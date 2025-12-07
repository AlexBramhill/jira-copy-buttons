import {
  selectElementByTestId,
  selectElementsByVc,
} from "../../../content/page-interactors/elementSelectors";
import { selectButtonDivUnderTitle } from "../../../content/page-interactors/jiraSpecificElementSelectors";
import type { ITicketSelectorStrategy as ITicketSelectorStrategy } from "../ITicketSelectorStrategy";

/**
 * Rule for ticket page ie https://example.atlassian.net/browse/PD-1
 */
export const ticketPageSelectorStrategy: ITicketSelectorStrategy = {
  selectContainers: () => selectElementsByVc("FullPageIssueContainer"),
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
