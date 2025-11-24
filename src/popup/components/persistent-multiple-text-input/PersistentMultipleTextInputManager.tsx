import { onMount, type ParentProps } from "solid-js";
import { createStore } from "solid-js/store";
import { logger } from "../../../shared/logger";
import MultipleTextInputEditor from "./MultipleTextInputEditor";
import type {
  StringStoreWithId,
  TextInputComponent,
} from "./MultipleTextInputRow";
import type { UUID } from "crypto";

const createEmptyStringStoreWithId = (): StringStoreWithId =>
  createStringStoreWithIdFromString("");

const createStringStoreWithIdFromString = (value: string) => ({
  id: crypto.randomUUID(),
  value,
});

const getStringStoreWithIdsFromSavedValuesOrDefault = (
  savedValues: string[]
) => {
  return savedValues.length
    ? savedValues.map((value) => createStringStoreWithIdFromString(value))
    : [createEmptyStringStoreWithId()];
};

type PersistentMultipleTextInputManagerProps = {
  textInput: TextInputComponent;
  saveToPersistence: (values: string[]) => Promise<void>;
  loadFromPersistence: () => Promise<string[]>;
} & ParentProps;

const PersistentMultipleTextInputManager = ({
  textInput,
  children,
  saveToPersistence,
  loadFromPersistence,
}: PersistentMultipleTextInputManagerProps) => {
  const [savedStrings, setSavedStrings] = createStore<StringStoreWithId[]>([
    createEmptyStringStoreWithId(),
  ]);

  onMount(async () => {
    const savedValues = await loadFromPersistence();
    const stringStoreWithIds =
      getStringStoreWithIdsFromSavedValuesOrDefault(savedValues);
    setSavedStrings(stringStoreWithIds);
    logger.debug({ savedValues }, "Loaded hostnames from storage");
  });

  const persistValues = async (values: StringStoreWithId[] = savedStrings) => {
    await saveToPersistence(values.map((row) => row.value));
    logger.debug({ hostnames: values }, "Saved hostnames to storage");
  };

  const handleValueChange = async (row: StringStoreWithId) => {
    const index = savedStrings.findIndex((item) => item.id === row.id);
    if (index === -1) {
      return;
    }
    setSavedStrings(index, "value", row.value);
    await persistValues();
  };

  const removeHostnameField = async (id: UUID) => {
    if (savedStrings.length === 1) {
      setSavedStrings([createEmptyStringStoreWithId()]);
    } else {
      setSavedStrings((current) => current.filter((item) => item.id !== id));
    }
    await persistValues();
  };

  const addHostnameField = async () => {
    setSavedStrings((current) => [...current, createEmptyStringStoreWithId()]);
    await persistValues();
  };

  return (
    <MultipleTextInputEditor
      textInput={textInput}
      children={children}
      hostnames={savedStrings}
      onAdd={addHostnameField}
      onChange={handleValueChange}
      onRemove={removeHostnameField}
    />
  );
};

export default PersistentMultipleTextInputManager;
