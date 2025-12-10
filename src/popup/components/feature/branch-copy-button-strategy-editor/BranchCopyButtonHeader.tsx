import type { BranchCopyButtonStrategyEditorHeader } from "../../../../shared/strategies/branch-copy-button-strategies/BranchCopyButtonStrategy";
import { getExampleBranchCopyButtonText } from "../../../../shared/transformers/branchCopyButtonTransformer";
import { Code } from "../../common/Code";
import ContainerHeading from "../../common/ContainerHeading";

interface BranchCopyButtonHeaderProps {
  config: BranchCopyButtonStrategyEditorHeader;
}

export const BranchCopyButtonHeader = (props: BranchCopyButtonHeaderProps) => {
  return (
    <div class="flex-1">
      <ContainerHeading level={3} class="text-sm">
        {props.config.buttonName}
      </ContainerHeading>
      <Code class="mt-1">{getExampleBranchCopyButtonText(props.config)}</Code>
    </div>
  );
};

export default BranchCopyButtonHeader;
