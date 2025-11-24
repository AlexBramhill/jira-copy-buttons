import type { ParentProps } from "solid-js";
import MultipleTextInputEditor from "./MultipleTextInputEditor";
import type { TextInputComponent } from "./MultipleTextInputRow";
import { createStringWithIdStore } from "../../stores/stringWithIdStore";

type PersistentMultipleTextInputsProps = {
  textInput: TextInputComponent;
  saveToPersistence: (values: string[]) => Promise<void>;
  loadFromPersistence: () => Promise<string[]>;
} & ParentProps;

const PersistentMultipleTextInputs = ({
  textInput,
  children,
  saveToPersistence,
  loadFromPersistence,
}: PersistentMultipleTextInputsProps) => {
  const { values, addValue, updateValue, removeValue } =
    createStringWithIdStore({
      loadFromPersistence,
      saveToPersistence,
    });

  return (
    <MultipleTextInputEditor
      textInput={textInput}
      children={children}
      data={values}
      onAdd={addValue}
      onChange={updateValue}
      onRemove={removeValue}
    />
  );
};

export default PersistentMultipleTextInputs;
