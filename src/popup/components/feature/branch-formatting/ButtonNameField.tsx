import { FormField } from "../../common/FormField";
import { TextInput } from "../../common/TextInput";
import type { Component } from "solid-js";

interface ButtonNameFieldProps {
  value: string;
  onInput: (value: string) => void;
}

export const ButtonNameField: Component<ButtonNameFieldProps> = (props) => (
  <FormField id="button-name" label="Button Name">
    <TextInput
      id="button-name"
      value={props.value}
      onInput={props.onInput}
      placeholder="Copy Branch Name"
    />
  </FormField>
);
