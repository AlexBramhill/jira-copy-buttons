import { Case } from "../../../transformers/Case";
import {
  TICKET_DESCRIPTION_WILDCARD,
  TICKET_PREFIX_WILDCARD,
} from "../../../transformers/ticketWildcards";
import type { BranchCopyButtonStrategyEditorHeader } from "../BranchCopyButtonStrategy";

export const createCheckoutNewGitBranchStrategy =
  (): BranchCopyButtonStrategyEditorHeader => ({
    name: "Check out new git branch",
    buttonName: "Create Branch",
    formatPattern: `git checkout -b ${TICKET_PREFIX_WILDCARD}-${TICKET_DESCRIPTION_WILDCARD}`,
    prefixCase: Case.Kebab,
    descriptionCase: Case.Kebab,
  });
