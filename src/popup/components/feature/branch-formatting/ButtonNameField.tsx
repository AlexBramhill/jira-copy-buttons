import type { Component } from "solid-js";
import FormField from "../../common/FormField";
import { TextInput } from "../../common/TextInput";
import type { ButtonNameFieldProps } from "./BranchButtonNameField";

export const ButtonNameField: Component<ButtonNameFieldProps> = (props) => (
  <FormField id="button-name">
    <TextInput
      id="button-name"
      value={props.value}
      onInput={props.onInput}
      placeholder="Copy Branch Name"
      prefix="Button text:"
    />
  </FormField>
);
