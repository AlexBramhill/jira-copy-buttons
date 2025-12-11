import type { Case } from "../../transformers/Case";
import type { StrategyInfo } from "../StrategyInfo";

export type BranchCopyButtonStrategyEditorHeader = {
  buttonName: string;
  formatPattern: string;
  prefixCase: Case;
  descriptionCase: Case;
} & StrategyInfo;
