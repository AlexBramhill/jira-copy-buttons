import type { BranchCopyButtonConfig } from "../../../../shared/repository/BranchCopyButtonConfig";
import { getExampleBranchCopyButtonText } from "../../../../shared/transformers/branchCopyButtonTransformer";
import { Code } from "../../common/Code";
import ContainerHeading from "../../common/ContainerHeading";
import IconButton from "../../common/IconButton";
import { IconButtonVariants } from "../../common/IconButtonVariants";

interface BranchCopyButtonHeaderProps {
  config: BranchCopyButtonConfig;
  onRemove: () => Promise<void>;
}

export const BranchCopyButtonHeader = (props: BranchCopyButtonHeaderProps) => {
  return (
    <div class="flex items-center justify-between w-full gap-2">
      <div class="flex items-center justify-center w-10 shrink-0">
        <IconButton
          ariaLabel="Remove button"
          onClick={async () => await props.onRemove()}
          variant={IconButtonVariants.DELETE}
        >
          ✖
        </IconButton>
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
