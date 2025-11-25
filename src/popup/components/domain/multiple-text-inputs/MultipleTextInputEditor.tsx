import { For, type ParentProps } from "solid-js";
import {
  MultipleTextInputRow,
  type TextInputComponent,
} from "./MultipleTextInputRow";
import { IconButton } from "../IconButton";
import type { UUID } from "crypto";
import type { ValueWithId } from "../../../stores/IValueWithId";

type MultipleTextInputEditorProps = {
  textInput: TextInputComponent;
  data: ValueWithId<string>[];
  onAdd: () => void;
  onChange: (valueWithId: ValueWithId<string>) => void;
  onRemove: (id: UUID) => void;
} & ParentProps;

const MultipleTextInputEditor = (props: MultipleTextInputEditorProps) => {
  return (
    <>
      {props.children}
      <For each={props.data}>
        {(item) => (
          <MultipleTextInputRow
            textInput={props.textInput}
            data={item}
            onChange={props.onChange}
            onRemove={props.onRemove}
          />
        )}
      </For>
      <IconButton ariaLabel="Add" onClick={props.onAdd}>
        +
      </IconButton>
    </>
  );
};

export default MultipleTextInputEditor;
