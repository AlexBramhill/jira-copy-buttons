import { For, Index } from "solid-js";
import { HostnameRow } from "./HostnameRow";
import { IconButton } from "../IconButton";

interface HostnamesEditorProps {
  hostnames: string[];
  onAdd: () => void;
  onChange: (index: number, value: string) => void;
  onRemove: (index: number) => void;
}

const HostnamesEditor = (props: HostnamesEditorProps) => {
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
        Add in the hostnames of your Jira instances (one per line) where you
        want the branch creation buttons to appear.
      </div>

      <For each={props.hostnames}>
        {(value, index) => (
          <HostnameRow
            index={index()}
            value={value}
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

export default HostnamesEditor;
