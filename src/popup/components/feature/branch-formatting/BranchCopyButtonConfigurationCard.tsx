import type { BranchCopyButtonConfig } from "../../../../shared/repository/BranchCopyButtonConfig";
import { BranchNameFormatField } from "./BranchNameFormatField";
import { ButtonNameField } from "./ButtonNameField";
import CaseTransformField from "./CaseTransformField";

interface BranchCopyButtonConfigurationCardProps {
  value: BranchCopyButtonConfig;
  updateValue: (value: BranchCopyButtonConfig) => Promise<void>;
}

export const BranchCopyButtonConfigurationCard = (
  props: BranchCopyButtonConfigurationCardProps
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
        label="Prefix Case Transform"
        value={props.value.prefixCase}
        onChange={(value) =>
          props.updateValue({ ...props.value, prefixCase: value })
        }
      />
      <CaseTransformField
        id="description-case"
        label="Description Case Transform"
        value={props.value.descriptionCase}
        onChange={(value) =>
          props.updateValue({ ...props.value, descriptionCase: value })
        }
      />
    </div>
  );
};
