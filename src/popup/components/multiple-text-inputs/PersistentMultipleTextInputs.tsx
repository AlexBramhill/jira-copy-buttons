import { onMount, type ParentProps } from "solid-js";
import { createStore } from "solid-js/store";
import { logger } from "../../../shared/logger";
import MultipleTextInputEditor from "./MultipleTextInputEditor";
import type {
  StringStoreWithId,
  TextInputComponent,
} from "./MultipleTextInputRow";
import type { UUID } from "crypto";
import {
  createEmptyStringStoreWithId,
  getStringStoreWithIdsFromSavedValuesOrDefault,
} from "../text-inputs/TextInputHelpers";

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
  const [savedStrings, setSavedStrings] = createStore<StringStoreWithId[]>([
    createEmptyStringStoreWithId(),
  ]);

  onMount(async () => {
    const savedValues = await loadFromPersistence();
    const stringStoreWithIds =
      getStringStoreWithIdsFromSavedValuesOrDefault(savedValues);
    setSavedStrings(stringStoreWithIds);
    logger.debug({ savedValues }, "Loaded from storage");
  });

  const persistValues = async (values: StringStoreWithId[] = savedStrings) => {
    await saveToPersistence(values.map((row) => row.value));
    logger.debug({ values }, "Saved to storage");
  };

  const handleValueChange = async (row: StringStoreWithId) => {
    const index = savedStrings.findIndex((item) => item.id === row.id);
    if (index === -1) {
      return;
    }
    setSavedStrings(index, "value", row.value);
    await persistValues();
  };

  const removeField = async (id: UUID) => {
    if (savedStrings.length === 1) {
      setSavedStrings([createEmptyStringStoreWithId()]);
    } else {
      setSavedStrings((current) => current.filter((item) => item.id !== id));
    }
    await persistValues();
  };

  const addField = async () => {
    setSavedStrings((current) => [...current, createEmptyStringStoreWithId()]);
    await persistValues();
  };

  return (
    <MultipleTextInputEditor
      textInput={textInput}
      children={children}
      data={savedStrings}
      onAdd={addField}
      onChange={handleValueChange}
      onRemove={removeField}
    />
  );
};

export default PersistentMultipleTextInputs;
