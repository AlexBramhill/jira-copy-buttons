import type { BranchCopyButtonConfig } from "../../../../shared/repository/BranchCopyButtonConfig";
import {
  getExampleBranchCopyButtonText,
  toDescriptionButtonText,
  toPrefixButtonText,
} from "../../../../shared/transformers/branchCopyButtonTransformer";
import {
  EXAMPLE_DESCRIPTION,
  EXAMPLE_PREFIX,
} from "../../../constants/exampleTicket";
import { Code } from "../../common/Code";
import type { ParentProps } from "solid-js";

interface BranchPreviewCardProps extends ParentProps {
  config: BranchCopyButtonConfig;
}

export const BranchPreviewCard = (props: BranchPreviewCardProps) => {
  return (
    <div class="rounded-md border border-neutral-700 bg-neutral-800/70 p-4 space-y-2 shadow-sm">
      <div class="text-sm font-semibold text-neutral-200 mb-1">
        Live Preview
      </div>
      <div class="space-y-1 text-xs text-neutral-400">
        <div>
          Prefix: <span class="text-neutral-300">{EXAMPLE_PREFIX}</span> →{" "}
          <span class="text-neutral-100 font-mono">
            {toPrefixButtonText(EXAMPLE_PREFIX, props.config)}
          </span>
        </div>
        <div>
          Description:{" "}
          <span class="text-neutral-300">{EXAMPLE_DESCRIPTION}</span> →{" "}
          <span class="text-neutral-100 font-mono">
            {toDescriptionButtonText(EXAMPLE_DESCRIPTION, props.config)}
          </span>
        </div>
      </div>
      <div class="mt-2 pt-2 border-t border-neutral-700">
        <div class="text-xs text-neutral-400 mb-1">Branch Name:</div>
        <Code class="block w-full bg-neutral-900 border border-neutral-700 px-2 py-1 text-sm mt-1">
          {getExampleBranchCopyButtonText(props.config)}
        </Code>
      </div>
      {props.children}
    </div>
  );
};
