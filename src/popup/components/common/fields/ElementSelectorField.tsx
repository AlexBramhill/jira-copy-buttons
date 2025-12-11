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
  {
    value: SelectorType.TestId,
    label: "Test ID Attribute (data-testid)",
    prefix: '[data-testid="',
    suffix: '"]',
  },
  {
    value: SelectorType.VcAttribute,
    label: "VC Attribute (data-vc)",
    prefix: '[data-vc="',
    suffix: '"]',
  },
  {
    value: SelectorType.CssSelector,
    label: "Other CSS Selector",
  },
];

export const ElementSelectorField = (props: ElementSelectorFieldProps) => {
  return (
    <FormField id={props.id} label={props.label}>
      <div class="space-y-2">
        <Select
          prefix="Select by:"
          id={`${props.id}-type`}
          value={props.value.type}
          onChange={(type) => props.onChange({ ...props.value, type: type })}
          options={selectorTypeOptions}
        />
        <TextInput
          id={`${props.id}-value`}
          value={props.value.value}
          onInput={(value) => props.onChange({ ...props.value, value })}
          prefix={
            selectorTypeOptions.find((opt) => opt.value === props.value.type)
              ?.prefix
          }
          suffix={
            selectorTypeOptions.find((opt) => opt.value === props.value.type)
              ?.suffix
          }
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
