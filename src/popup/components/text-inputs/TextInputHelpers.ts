import type { StringStoreWithId } from "../multiple-text-inputs/MultipleTextInputRow";

const createStringStoreWithId = (value: string) => ({
  id: crypto.randomUUID(),
  value,
});

export const createEmptyStringStoreWithId = (): StringStoreWithId =>
  createStringStoreWithId("");

export const getStringStoreWithIdsFromSavedValuesOrDefault = (
  savedValues: string[]
) => {
  return savedValues.length
    ? savedValues.map((value) => createStringStoreWithId(value))
    : [createEmptyStringStoreWithId()];
};
