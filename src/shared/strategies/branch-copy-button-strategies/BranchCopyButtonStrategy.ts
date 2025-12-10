import type { Case } from "../../transformers/Case";
import type { ConfigurableStrategy } from "../ConfigurableStrategy";

export type BranchCopyButtonStrategyEditorHeader = {
  buttonName: string;
  formatPattern: string;
  prefixCase: Case;
  descriptionCase: Case;
} & ConfigurableStrategy;
