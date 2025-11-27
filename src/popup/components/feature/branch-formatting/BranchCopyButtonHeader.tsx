import type { BranchCopyButtonConfig } from "../../../../shared/repository/BranchCopyButtonConfig";
import { getExampleBranchCopyButtonText } from "../../../../shared/transformers/branchCopyButtonTransformer";
import { Code } from "../../common/Code";
import IconButton from "../../common/IconButton";

interface BranchCopyButtonHeaderProps {
  config: BranchCopyButtonConfig;
  onRemove: () => void;
}

export const BranchCopyButtonHeader = (props: BranchCopyButtonHeaderProps) => {
  return (
    <div class="flex items-center justify-between w-full gap-2">
      <div class="flex items-center justify-center w-10 shrink-0">
        <IconButton
          ariaLabel="Remove button"
          onClick={props.onRemove}
          class="w-8 h-8 flex items-center justify-center text-xs"
        >
          ✖
        </IconButton>
      </div>
      <div class="flex-1">
        <h3 class="text-sm">{props.config.buttonName} button</h3>
        <Code class="mt-1">{getExampleBranchCopyButtonText(props.config)}</Code>
      </div>
    </div>
  );
};

export default BranchCopyButtonHeader;
