import type { StringWithIdStoreItem } from "../multiple-text-inputs/MultipleTextInputRow";

const createStringWithIdStoreItem = (value: string) => ({
  id: crypto.randomUUID(),
  value,
});

export const createEmptyStringWithIdStoreItem = (): StringWithIdStoreItem =>
  createStringWithIdStoreItem("");

export const getStringWithIdStoreItemsFromSavedValuesOrDefault = (
  savedValues: string[]
) => {
  return savedValues.length
    ? savedValues.map((value) => createStringWithIdStoreItem(value))
    : [createEmptyStringWithIdStoreItem()];
};
