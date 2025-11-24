import type { Case } from "../../shared/transformers/Case";

export type BranchCopyButtonSettings = {
  buttonName: string;
  formatPattern: string;
  prefixCase: Case;
  descriptionCase: Case;
};
