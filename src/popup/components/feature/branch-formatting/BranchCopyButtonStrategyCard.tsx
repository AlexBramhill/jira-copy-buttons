import { BranchNameFormatField } from "./BranchNameFormatField";
import { ButtonNameField } from "./ButtonNameField";
import CaseTransformField from "../../common/fields/CaseTransformField";
import type { BranchCopyButtonStrategyStorageDataItem } from "../../../../shared/repository/branchCopyButtonStrategyStorageData";
import Toggle from "../../common/Toggle";
import FormField from "../../common/FormField";
import TextField from "../../common/fields/TextField";

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
      <TextField
        id="button-name"
        value={props.value.buttonName}
        onInput={(value) =>
          props.updateValue({ ...props.value, buttonName: value })
        }
        placeholder="Display Name"
        prefix="Button text:"
      />
      <TextField
        id="format-pattern"
        value={props.value.formatPattern}
        onInput={(value) =>
          props.updateValue({ ...props.value, formatPattern: value })
        }
        prefix="Copy Text:"
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
      <ToggleField/>
      <FormField id="enabled-toggle" label="Enabled">
        <Toggle
          id="enabled-toggle"
          checked={props.value.isEnabled}
          onChange={() =>
            props.updateValue({
              ...props.value,
              isEnabled: !props.value.isEnabled,
            })
          }
        />
      </FormField>
    </div>
  );
};
