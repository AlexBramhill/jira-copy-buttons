import {
  selectElementsByVc,
  selectElementByTestId,
} from "../../../page-interactors/elementSelectors";
import { selectButtonDivUnderTitle } from "../../../page-interactors/jiraSpecificElementSelectors";
import type { TicketSelectorStrategy as TicketSelectorStrategy } from "../TicketSelectorStrategy";

export const createTicketPageSelectorStrategy = (): TicketSelectorStrategy => ({
  name: "Ticket Page Selector",
  description:
    "Rule for ticket page ie https://example.atlassian.net/browse/PD-1",
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
});
