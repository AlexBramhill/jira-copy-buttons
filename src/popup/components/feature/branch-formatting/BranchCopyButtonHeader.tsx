import type { BranchCopyButtonConfig } from "../../../../shared/repository/BranchCopyButtonConfig";
import { getExampleBranchCopyButtonText } from "../../../../shared/transformers/branchCopyButtonTransformer";
import { DeleteButton } from "../../common/button/DeleteButton";
import { Code } from "../../common/Code";
import ContainerHeading from "../../common/ContainerHeading";

interface BranchCopyButtonHeaderProps {
  config: BranchCopyButtonConfig;
  onRemove: () => Promise<void>;
}

export const BranchCopyButtonHeader = (props: BranchCopyButtonHeaderProps) => {
  return (
    <div class="flex items-center justify-between w-full gap-2">
      <div class="shrink-0">
        <DeleteButton onClick={props.onRemove} />
      </div>
      <div class="flex-1">
        <ContainerHeading level={3} class="text-sm">
          {props.config.buttonName}
        </ContainerHeading>
        <Code class="mt-1">{getExampleBranchCopyButtonText(props.config)}</Code>
      </div>
    </div>
  );
};

export default BranchCopyButtonHeader;
