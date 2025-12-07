import FormField from "../FormField";
import Select from "../Select";

// TODO make this more robust in terms of types
interface SelectFieldProps<T extends string> {
  id: string;
  label?: string;
  value: T;
  onChange: (value: T) => void;
  options: { value: T; label: string }[];
  class?: string;
  prefix?: string;
  suffix?: string;
}

export const SelectField = <T extends string>(props: SelectFieldProps<T>) => (
  <FormField id={props.id}>
    <Select
      id={props.id}
      value={props.value}
      onChange={props.onChange}
      options={props.options}
      class={props.class}
      prefix={props.prefix}
      suffix={props.suffix}
    />
  </FormField>
);

export default SelectField;
