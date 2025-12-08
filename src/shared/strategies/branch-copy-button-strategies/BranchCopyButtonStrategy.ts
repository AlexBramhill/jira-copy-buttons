import type { Case } from "../../transformers/Case";
import type { ConfigurableStrategy } from "../ConfigurableStrategy";

export type BranchCopyButtonStrategy = {
  buttonName: string;
  formatPattern: string;
  prefixCase: Case;
  descriptionCase: Case;
} & ConfigurableStrategy;
