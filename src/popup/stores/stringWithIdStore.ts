import { onMount } from "solid-js";
import { createStore, produce } from "solid-js/store";
import type { UUID } from "crypto";
import { logger } from "../../shared/logger";
import {
  createEmptyStringWithIdStoreItem,
  getStringWithIdStoreItemsFromSavedValuesOrDefault,
} from "../components/text-inputs/TextInputHelpers";
import type { StringWithIdStoreItem } from "../components/multiple-text-inputs/MultipleTextInputRow";

interface CreateStringWithIdStoreConfig {
  loadFromPersistence: () => Promise<string[]>;
  saveToPersistence: (values: string[]) => Promise<void>;
}

export const createStringWithIdStore = ({
  loadFromPersistence,
  saveToPersistence,
}: CreateStringWithIdStoreConfig) => {
  const [values, setValues] = createStore<StringWithIdStoreItem[]>([
    createEmptyStringWithIdStoreItem(),
  ]);

  const persistValues = async (rows: StringWithIdStoreItem[] = values) => {
    await saveToPersistence(rows.map((row) => row.value));
    logger.debug({ values: rows }, "Saved to storage");
  };

  onMount(async () => {
    const savedValues = await loadFromPersistence();
    const stringWithIdStoreItems =
      getStringWithIdStoreItemsFromSavedValuesOrDefault(savedValues);
    setValues(stringWithIdStoreItems);
    logger.debug({ savedValues }, "Loaded from storage");
  });

  const updateValue = async (row: StringWithIdStoreItem) => {
    const index = values.findIndex((item) => item.id === row.id);
    if (index === -1) {
      return;
    }
    setValues(index, "value", row.value);
    await persistValues();
  };

  const removeValue = async (id: UUID) => {
    if (values.length === 1) {
      setValues([createEmptyStringWithIdStoreItem()]);
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
        draft.push(createEmptyStringWithIdStoreItem());
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
