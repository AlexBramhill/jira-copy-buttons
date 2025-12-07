import { Case } from "../../../transformers/Case";
import {
  TICKET_DESCRIPTION_WILDCARD,
  TICKET_PREFIX_WILDCARD,
} from "../../../transformers/ticketWildcards";
import type { BranchCopyButtonStrategy } from "../BranchCopyButtonStrategy";

export const checkoutNewGitBranch: BranchCopyButtonStrategy = {
  buttonName: "Create Branch",
  formatPattern: `git checkout -b ${TICKET_PREFIX_WILDCARD}-${TICKET_DESCRIPTION_WILDCARD}`,
  prefixCase: Case.Kebab,
  descriptionCase: Case.Kebab,
};
