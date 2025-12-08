import ToggleButton from "../buttons/ToggleButton";
import FormField from "../FormField";

export const ToggleButtonField = (props: {
  id: string;
  label?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  class?: string;
  prefix?: string;
  suffix?: string;
}) => (
  <FormField id={props.id}>
    <ToggleButton
      id={props.id}
      checked={props.checked}
      onChange={() => props.onChange(!props.checked)}
      class={props.class}
      prefix={props.prefix}
      suffix={props.suffix}
    />
  </FormField>
);
