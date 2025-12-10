import type { FieldDefinition } from "./FieldDefinition";
import TextField from "./TextField";
import SelectField from "./SelectField";
import { ToggleButtonField } from "./ToggleField";
import CaseTransformField from "./CaseTransformField";
import ElementSelectorField from "./ElementSelectorField";
import type { StrategyStorageItem } from "../StrategyAccordion";

interface StrategyFieldProps<T extends StrategyStorageItem> {
  field: FieldDefinition<T>;
  value: T;
  onUpdate: (value: T) => Promise<void>;
}

export const StrategyField = <T extends StrategyStorageItem>(
  props: StrategyFieldProps<T>
) => {
  const createChangeHandler = <V,>(field: {
    setValue: (item: T, value: V) => T;
  }) => {
    return async (value: V) => {
      const updatedItem = field.setValue(props.value, value);
      await props.onUpdate(updatedItem);
    };
  };

  switch (props.field.type) {
    case "text":
      return (
        <TextField
          id={props.field.id}
          value={props.field.getValue(props.value)}
          onInput={createChangeHandler(props.field)}
          placeholder={props.field.placeholder}
          prefix={props.field.prefix}
          class={props.field.class}
        />
      );

    case "select":
      return (
        <SelectField
          id={props.field.id}
          value={props.field.getValue(props.value)}
          onChange={createChangeHandler(props.field)}
          options={props.field.getOptions()}
          prefix={props.field.prefix}
          label={props.field.label}
          class={props.field.class}
        />
      );

    case "toggle":
      return (
        <ToggleButtonField
          id={props.field.id}
          checked={props.field.getValue(props.value)}
          onChange={createChangeHandler(props.field)}
          prefix={props.field.prefix}
        />
      );

    case "elementSelector":
      return (
        <ElementSelectorField
          id={props.field.id}
          label={props.field.label || ""}
          value={props.field.getValue(props.value)}
          onChange={createChangeHandler(props.field)}
        />
      );

    case "case":
      return (
        <CaseTransformField
          id={props.field.id}
          value={props.field.getValue(props.value)}
          onChange={createChangeHandler(props.field)}
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
