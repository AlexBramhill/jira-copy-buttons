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
  <FormField id="format-pattern" label="Branch Name Format">
    <>
      <div class="mb-1 text-xs text-neutral-400">
        Use <Code>{TICKET_PREFIX_WILDCARD}</Code> and{" "}
        <Code>{TICKET_DESCRIPTION_WILDCARD}</Code> as wildcards
      </div>
      <TextInput
        id="format-pattern"
        value={props.value}
        onInput={props.onInput}
        placeholder={`${TICKET_PREFIX_WILDCARD}: ${TICKET_DESCRIPTION_WILDCARD}`}
        class="font-mono"
      />
    </>
  </FormField>
);
