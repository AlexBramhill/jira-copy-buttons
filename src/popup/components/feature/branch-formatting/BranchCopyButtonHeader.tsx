import type { BranchCopyButtonConfig } from "../../../../shared/repository/BranchCopyButtonConfig";
import { getExampleBranchCopyButtonText } from "../../../../shared/transformers/branchCopyButtonTransformer";
import { Code } from "../../common/Code";

interface BranchCopyButtonHeaderProps {
  config: BranchCopyButtonConfig;
}
export const BranchCopyButtonHeader = (props: BranchCopyButtonHeaderProps) => {
  return (
    <>
      <div>
        <h2 class="text-lg font-medium">{props.config.buttonName} button</h2>
        <Code class="mt-1">{getExampleBranchCopyButtonText(props.config)}</Code>
      </div>
    </>
  );
};

export default BranchCopyButtonHeader;
