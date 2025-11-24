import { For, type ParentProps } from "solid-js";
import {
  MultipleTextInputRow,
  type StringStoreWithId,
} from "./MultipleTextInputRow";
import { IconButton } from "../IconButton";
import type { UUID } from "crypto";

type MultipleTextInputEditorProps = {
  hostnames: StringStoreWithId[];
  onAdd: () => void;
  onChange: (stringStoreWithId: StringStoreWithId) => void;
  onRemove: (id: UUID) => void;
} & ParentProps;

const MultipleTextInputEditor = (props: MultipleTextInputEditorProps) => {
  return (
    <>
      {props.children}
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
    </>
  );
};

export default MultipleTextInputEditor;
