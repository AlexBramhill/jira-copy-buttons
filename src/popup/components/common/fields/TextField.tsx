import type { Affix } from "../Affixes";
import FormField from "../FormField";
import { TextInput } from "../TextInput";

export type TextFieldProps = {
  value: string;
  id: string;
  onInput: (value: string) => void;
  placeholder?: string;
  prefix?: Affix;
  suffix?: Affix;
  class?: string;
};

export const TextField = (props: TextFieldProps) => (
  <FormField id={props.id}>
    <TextInput
      id={props.id}
      value={props.value}
      onInput={props.onInput}
      placeholder={props.placeholder}
      prefix={props.prefix}
      suffix={props.suffix}
      class={props.class}
    />
  </FormField>
);

export default TextField;
