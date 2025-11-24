import type { UUID } from "crypto";
import { IconButton } from "../IconButton";
import type { ValueWithIdStoreItem } from "../../stores/IValueWithIdStoreItem";
import type { Component } from "solid-js";
import type { TextInputProps } from "../text-inputs/TextInputProps";

export type TextInputComponent = Component<TextInputProps>;

type MultipleTextInputRowProps = {
  textInput: TextInputComponent;
  data: ValueWithIdStoreItem<string>;
  onChange: (valueWithIdStoreItem: ValueWithIdStoreItem<string>) => void;
  onRemove: (id: UUID) => void;
};

export const MultipleTextInputRow = (props: MultipleTextInputRowProps) => {
  return (
    <div class="flex items-center gap-2">
      <IconButton
        ariaLabel="Remove"
        onClick={() => props.onRemove(props.data.id)}
        class="py-2"
      >
        -
      </IconButton>
      <props.textInput data={props.data} onChange={props.onChange} />
    </div>
  );
};

export default MultipleTextInputRow;
