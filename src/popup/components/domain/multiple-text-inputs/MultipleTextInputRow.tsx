import type { UUID } from "crypto";
import { IconButton } from "../IconButton";
import type { ValueWithId } from "../../../stores/IValueWithId";
import type { Component } from "solid-js";
import type { TextInputProps } from "../text-input/TextInputProps";

export type TextInputComponent = Component<TextInputProps>;

type MultipleTextInputRowProps = {
  textInput: TextInputComponent;
  data: ValueWithId<string>;
  onChange: (valueWithId: ValueWithId<string>) => void;
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
