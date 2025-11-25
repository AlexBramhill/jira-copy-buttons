import type { ValueWithId } from "./IValueWithId";

export const createValueWithId = <T>(value: T): ValueWithId<T> => ({
  id: crypto.randomUUID(),
  value,
});

export const createValuesWithIds = <T>(savedValues: T[]) => {
  return savedValues.map((value) => createValueWithId(value));
};
