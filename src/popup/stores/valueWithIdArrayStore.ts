import { onMount } from "solid-js";
import { createStore, produce } from "solid-js/store";
import type { UUID } from "crypto";
import { logger } from "../../shared/logger";
import {
  createValueWithId as createValueWithId,
  createValuesWithIds,
} from "./storeItemTransformers";
import type { ValueWithId } from "./IValueWithId";

interface CreateValueWithIdArrayStoreConfig<T> {
  loadFromPersistence: () => Promise<T[]>;
  saveToPersistence: (values: T[]) => Promise<void>;
  createDefaultValue: () => T;
  allowEmptyStore?: boolean;
}

// TODO don't need create default here
// TODO separate id layer
export const createValueWithIdArrayStore = <T>({
  loadFromPersistence,
  saveToPersistence,
  createDefaultValue,
  allowEmptyStore = false,
}: CreateValueWithIdArrayStoreConfig<T>) => {
  const [values, setValues] = createStore<ValueWithId<T>[]>([
    createValueWithId(createDefaultValue()),
  ]);

  onMount(async () => {
    const savedValues = await loadFromPersistence();
    const valueWithIds = createValuesWithIds(savedValues);
    setValues(valueWithIds);
    logger.debug({ savedValues }, "Loaded from storage");
  });

  const persistValues = async (rows: ValueWithId<T>[] = values) => {
    await saveToPersistence(rows.map((row) => row.value));
    logger.debug({ values: rows }, "Saved to storage");
  };

  const updateValue = async (row: ValueWithId<T>) => {
    const index = values.findIndex((item) => item.id === row.id);
    if (index === -1) {
      return;
    }
    setValues(index, "value", row.value);
    await persistValues();
  };

  const removeValue = async (id: UUID) => {
    if (values.length === 1 && !allowEmptyStore) {
      setValues([createValueWithId(createDefaultValue())]);
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
        draft.push(createValueWithId(createDefaultValue()));
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
