import { FormField } from "../../common/FormField";
import { TextInput } from "../../common/TextInput";
import { Code } from "../../common/Code";
import type { Component } from "solid-js";
import {
  TICKET_DESCRIPTION_WILDCARD,
  TICKET_PREFIX_WILDCARD,
} from "../../../../shared/ticketWildcards";

interface BranchNameFormatFieldProps {
  value: string;
  onInput: (value: string) => void;
}

export const BranchNameFormatField: Component<BranchNameFormatFieldProps> = (
  props
) => (
  <FormField id="format-pattern">
    <TextInput
      id="format-pattern"
      value={props.value}
      onInput={props.onInput}
      placeholder={`${TICKET_PREFIX_WILDCARD}: ${TICKET_DESCRIPTION_WILDCARD}`}
      class="font-mono"
      prefix="Formatting:"
    />
  </FormField>
);
