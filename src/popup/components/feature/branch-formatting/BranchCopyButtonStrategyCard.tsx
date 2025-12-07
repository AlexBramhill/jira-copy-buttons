import { BranchNameFormatField } from "./BranchNameFormatField";
import { ButtonNameField } from "./BranchButtonNameField";
import CaseTransformField from "./CaseTransformField";
import type { BranchCopyButtonStrategyStorageDataItem } from "../../../../shared/repository/branchCopyButtonStrategyStorageData";

interface BranchCopyButtonStrategyCardProps {
  value: BranchCopyButtonStrategyStorageDataItem;
  updateValue: (
    value: BranchCopyButtonStrategyStorageDataItem
  ) => Promise<void>;
}

export const BranchCopyButtonStrategyCard = (
  props: BranchCopyButtonStrategyCardProps
) => {
  return (
    <div class="space-y-4">
      <ButtonNameField
        value={props.value.buttonName}
        onInput={(value) =>
          props.updateValue({ ...props.value, buttonName: value })
        }
      />
      <BranchNameFormatField
        value={props.value.formatPattern}
        onInput={(value) =>
          props.updateValue({ ...props.value, formatPattern: value })
        }
      />
      <CaseTransformField
        id="prefix-case"
        prefix="Prefix Case:"
        value={props.value.prefixCase}
        onChange={(value) =>
          props.updateValue({ ...props.value, prefixCase: value })
        }
      />
      <CaseTransformField
        id="description-case"
        prefix="Description Case:"
        value={props.value.descriptionCase}
        onChange={(value) =>
          props.updateValue({ ...props.value, descriptionCase: value })
        }
      />
    </div>
  );
};
