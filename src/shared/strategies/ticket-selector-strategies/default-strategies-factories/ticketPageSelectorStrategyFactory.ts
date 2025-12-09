import { SelectorType } from "../ElementSelector";
import type { TicketSelectorStrategy } from "../TicketSelectorStrategy";

export const createTicketPageSelectorStrategy = (): TicketSelectorStrategy => ({
  name: "Ticket Page Selector",
  description:
    "Rule for ticket page ie https://example.atlassian.net/browse/PD-1",
  containerSelector: {
    type: SelectorType.ByVcAttribute,
    value: "FullPageIssueContainer",
  },
  prefixSelector: {
    type: SelectorType.ByTestId,
    value: "issue.views.issue-base.foundation.breadcrumbs.current-issue.item",
  },
  titleSelector: {
    type: SelectorType.ByTestId,
    value: "issue.views.issue-base.foundation.summary.heading",
  },
  buttonLocationSelector: {
    type: SelectorType.ByCssSelector,
    value:
      "[data-testid='issue-view-product-templates-default.ui.foundation-content.foundation-content-wrapper'] + * > :nth-child(2)",
  },
});
