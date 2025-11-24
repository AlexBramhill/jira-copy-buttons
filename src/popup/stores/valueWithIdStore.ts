import { onMount } from "solid-js";
import { createStore, produce } from "solid-js/store";
import type { UUID } from "crypto";
import { logger } from "../../shared/logger";
import {
  createValueWithIdStoreItem,
  createValuesWithIdStoreItems,
} from "../components/text-inputs/TextInputHelpers";
import type { ValueWithIdStoreItem } from "./IValueWithIdStoreItem";

interface CreateValueWithIdStoreConfig<T> {
  loadFromPersistence: () => Promise<T[]>;
  saveToPersistence: (values: T[]) => Promise<void>;
  createDefaultValue: () => T;
}

export const createValueWithIdStore = <T>({
  loadFromPersistence,
  saveToPersistence,
  createDefaultValue,
}: CreateValueWithIdStoreConfig<T>) => {
  const [values, setValues] = createStore<ValueWithIdStoreItem<T>[]>([
    createValueWithIdStoreItem(createDefaultValue()),
  ]);

  onMount(async () => {
    const savedValues = await loadFromPersistence();
    const valueWithIdStoreItems = createValuesWithIdStoreItems(savedValues);
    setValues(valueWithIdStoreItems);
    logger.debug({ savedValues }, "Loaded from storage");
  });

  const persistValues = async (rows: ValueWithIdStoreItem<T>[] = values) => {
    await saveToPersistence(rows.map((row) => row.value));
    logger.debug({ values: rows }, "Saved to storage");
  };

  const updateValue = async (row: ValueWithIdStoreItem<T>) => {
    const index = values.findIndex((item) => item.id === row.id);
    if (index === -1) {
      return;
    }
    setValues(index, "value", row.value);
    await persistValues();
  };

  const removeValue = async (id: UUID) => {
    if (values.length === 1) {
      setValues([createValueWithIdStoreItem(createDefaultValue())]);
    } else {
      setValues(
        produce((draft) => {
          const index = draft.findIndex((item) => item.id === id);
          if (index !== -1) {
            draft.splice(index, 1);
          }
        })
      );
    }
    await persistValues();
  };

  const addValue = async () => {
    setValues(
      produce((draft) => {
        draft.push(createValueWithIdStoreItem(createDefaultValue()));
      })
    );
    await persistValues();
  };

  return {
    values,
    addValue,
    updateValue,
    removeValue,
  };
};
