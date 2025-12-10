import type { StrategyStorageItem, FieldDefinition } from "./types";
import TextField from "../../common/fields/TextField";
import SelectField from "../../common/fields/SelectField";
import { ToggleButtonField } from "../../common/fields/ToggleField";
import CaseTransformField from "../../common/fields/CaseTransformField";
import type { Case } from "../../../../shared/transformers/Case";
import type { ElementSelector } from "../../../../shared/strategies/ticket-selector-strategies/ElementSelector";
import ElementSelectorField from "../../common/fields/ElementSelectorField";

interface StrategyFieldProps<T extends StrategyStorageItem> {
  field: FieldDefinition<T>;
  value: T;
  onUpdate: (value: T) => Promise<void>;
}

export const StrategyField = <T extends StrategyStorageItem>(
  props: StrategyFieldProps<T>
) => {
  const handleChange = async (newValue: any) => {
    const updatedItem = props.field.setValue(props.value, newValue);
    await props.onUpdate(updatedItem);
  };

  switch (props.field.type) {
    case "text": // update to use consts
      return (
        <TextField
          id={props.field.id}
          value={props.field.getValue(props.value) as string}
          onInput={handleChange}
          placeholder={props.field.placeholder}
          prefix={props.field.prefix}
          class={props.field.class}
        />
      );

    case "select":
      return (
        <SelectField
          id={props.field.id}
          value={props.field.getValue(props.value) as string}
          onChange={handleChange}
          options={props.field.getOptions?.() || []}
          prefix={props.field.prefix}
          label={props.field.label}
          class={props.field.class}
        />
      );

    case "toggle":
      return (
        <ToggleButtonField
          id={props.field.id}
          checked={props.field.getValue(props.value) as boolean}
          onChange={handleChange}
          prefix={props.field.prefix}
        />
      );

    case "elementSelector":
      return (
        <ElementSelectorField
          id={props.field.id}
          label={props.field.label || ""}
          value={props.field.getValue(props.value) as ElementSelector}
          onChange={handleChange}
        />
      );

    case "case":
      return (
        <CaseTransformField
          id={props.field.id}
          value={props.field.getValue(props.value) as Case}
          onChange={handleChange}
          prefix={props.field.prefix}
          label={props.field.label}
          class={props.field.class}
        />
      );

    default:
      return null;
  }
};

export default StrategyField;
