import { Affixes } from "../Affixes";
import FormField from "../FormField";
import Toggle from "../Toggle";

export const ToggleField = (props: {
  id: string;
  label?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  class?: string;
  prefix?: string;
  suffix?: string;
}) => (
  <FormField id={props.id}>
      <Toggle
        id={props.id}
        checked={props.checked}
        onChange={() => props.onChange(!props.checked)}
        class={props.class}
        prefix={props.prefix}
        suffix={props.suffix}
      />
  </FormField>
);
