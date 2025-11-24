import type { ValueWithIdStoreItem } from "../../stores/IValueWithIdStoreItem";

export const createValueWithIdStoreItem = <T>(
  value: T
): ValueWithIdStoreItem<T> => ({
  id: crypto.randomUUID(),
  value,
});

export const createValuesWithIdStoreItems = <T>(savedValues: T[]) => {
  return savedValues.map((value) => createValueWithIdStoreItem(value));
};
