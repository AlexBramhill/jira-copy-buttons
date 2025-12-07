import type { Case } from "../../transformers/Case";

export type BranchCopyButtonStrategy = {
  buttonName: string;
  formatPattern: string;
  prefixCase: Case;
  descriptionCase: Case;
};
