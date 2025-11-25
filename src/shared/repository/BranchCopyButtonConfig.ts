import type { Case } from "../transformers/Case";

export type BranchCopyButtonConfig = {
  buttonName: string;
  formatPattern: string;
  prefixCase: Case;
  descriptionCase: Case;
};
