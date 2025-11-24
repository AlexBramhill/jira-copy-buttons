import type { UUID } from "crypto";
import type { ValueWithIdStoreItem } from "../stores/IValueWithIdStoreItem";

export const removeFieldByIdCallback = <
  TValue,
  T extends ValueWithIdStoreItem<TValue>
>(
  idToRemove: UUID
): ((current: T[]) => T[]) => {
  return (current) => {
    if (current.length === 1) {
      return [];
    }
    return current.filter((item) => item.id !== idToRemove);
  };
};

export const updateFieldByIdCallback = <
  TValue,
  T extends ValueWithIdStoreItem<TValue>
>(
  idToUpdate: UUID,
  newValue: T
): ((current: T[]) => T[]) => {
  return (current) => {
    const next = [...current];
    const index = next.findIndex((item) => item.id === idToUpdate);
    if (index !== -1) {
      next[index] = newValue;
    }
    return next;
  };
};
