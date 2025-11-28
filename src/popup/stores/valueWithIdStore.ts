import { onMount } from "solid-js";
import { createStore } from "solid-js/store";
import { logger } from "../../shared/logger";
import type { ValueWithId } from "./IValueWithId";
import { createValueWithId } from "./storeItemTransformers";

interface CreateValueWithIdConfig<T> {
  loadFromPersistence: () => Promise<T>;
  saveToPersistence: (value: T) => Promise<void>;
  createDefaultValue: () => T;
}

// TODO don't need create default here
// TODO separate id layer
export const createValueWithIdStore = <T>({
  loadFromPersistence,
  saveToPersistence,
  createDefaultValue,
}: CreateValueWithIdConfig<T>) => {
  const [value, setValue] = createStore<ValueWithId<T>>(
    createValueWithId(createDefaultValue())
  );

  // TODO: update mount to handle change in object type on new release
  onMount(async () => {
    const savedValue = await loadFromPersistence();
    const valueWithId = createValueWithId(savedValue);
    setValue(valueWithId);
    logger.debug({ savedValue }, "Loaded from storage");
  });

  const persistValues = async (valueWithId: ValueWithId<T> = value) => {
    await saveToPersistence(valueWithId.value);
    logger.debug({ value: valueWithId }, "Saved to storage");
  };

  const updateValue = async (valueWithId: ValueWithId<T>) => {
    setValue(valueWithId);
    await persistValues();
  };

  const resetValue = async () => {
    setValue(createValueWithId(createDefaultValue()));
    await persistValues();
  };

  return {
    value,
    updateValue,
    resetValue,
  };
};
