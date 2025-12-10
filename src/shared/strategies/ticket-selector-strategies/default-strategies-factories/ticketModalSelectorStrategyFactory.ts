import { SelectorType } from "../ElementSelector";
import type { TicketSelectorStrategy } from "../TicketSelectorStrategy";

export const createTicketModalSelectorStrategy =
  (): TicketSelectorStrategy => ({
    name: "Ticket Modal Selector",
    description:
      "Rule for ticket modal ie https://example.atlassian.net/jira/software/projects/PD/boards/1?selectedIssue=PD-1",
    containerSelector: {
      type: SelectorType.TestId,
      value: "issue.views.issue-details.issue-modal.modal-dialog",
    },
    prefixSelector: {
      type: SelectorType.TestId,
      value: "issue.views.issue-base.foundation.breadcrumbs.current-issue.item",
    },
    titleSelector: {
      type: SelectorType.TestId,
      value: "issue.views.issue-base.foundation.summary.heading",
    },
    buttonLocationSelector: {
      type: SelectorType.CssSelector,
      value:
        "[data-testid='issue-view-product-templates-default.ui.foundation-content.foundation-content-wrapper'] + * > :nth-child(2)",
    },
  });
