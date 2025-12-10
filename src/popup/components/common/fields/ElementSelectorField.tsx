import {
  SelectorType,
  type ElementSelector,
} from "../../../../shared/strategies/ticket-selector-strategies/ElementSelector";
import FormField from "../FormField";
import Select from "../Select";
import { TextInput } from "../TextInput";

interface ElementSelectorFieldProps {
  id: string;
  label: string;
  value: ElementSelector;
  onChange: (value: ElementSelector) => void;
}

// TODO constrain this type to require all SelectorTypes
const selectorTypeOptions = [
  { value: SelectorType.TestId, label: "Test ID (data-testid)" },
  { value: SelectorType.VcAttribute, label: "VC Attribute (data-vc)" },
  { value: SelectorType.CssSelector, label: "CSS Selector" },
];

export const ElementSelectorField = (props: ElementSelectorFieldProps) => {
  return (
    <FormField id={props.id} label={props.label}>
      <div class="space-y-2">
        <Select
          id={`${props.id}-type`}
          value={props.value.type}
          onChange={(type) =>
            props.onChange({ ...props.value, type: type })
          }
          options={selectorTypeOptions}
        />
        <TextInput
          id={`${props.id}-value`}
          value={props.value.value}
          onInput={(value) => props.onChange({ ...props.value, value })}
          placeholder={
            props.value.type === SelectorType.CssSelector
              ? ".my-class or [data-attr='value']"
              : "selector-value"
          }
        />
      </div>
    </FormField>
  );
};

export default ElementSelectorField;
