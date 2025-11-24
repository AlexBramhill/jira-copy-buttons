import { For } from "solid-js";
import {
  MultipleTextInputRow,
  type MultipleTextInputRowItem,
} from "./MultipleTextInputRow";
import { IconButton } from "../IconButton";
import type { UUID } from "crypto";

interface MultipleTextInputEditorProps {
  hostnames: MultipleTextInputRowItem[];
  onAdd: () => void;
  onChange: (id: UUID, value: string) => void;
  onRemove: (id: UUID) => void;
}

const MultipleTextInputEditor = (props: MultipleTextInputEditorProps) => {
  return (
    <div class="space-y-3">
      <div class="">
        <p>
          <label
            for="url-input-0"
            class="text-sm font-semibold text-neutral-200"
          >
            Whitelisted URLs
          </label>
        </p>
        Add in the hostnames of your Jira instances where you want the branch
        creation buttons to appear.
      </div>

      <For each={props.hostnames}>
        {(value) => (
          <MultipleTextInputRow
            data={value}
            onChange={props.onChange}
            onRemove={props.onRemove}
          />
        )}
      </For>
      <IconButton ariaLabel="Add hostname" onClick={props.onAdd}>
        +
      </IconButton>
    </div>
  );
};

export default MultipleTextInputEditor;
