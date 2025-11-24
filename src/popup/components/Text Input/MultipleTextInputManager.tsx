import { createSignal, onMount } from "solid-js";
import { logger } from "../../../shared/logger";
import {
  getHostnames,
  saveHostnames,
} from "../../../shared/repository/chromeStorageSync";
import {
  updateFieldByIdCallback as updateFieldByIdCallback,
  removeFieldByIdCallback as removeFieldByIdCallback,
} from "../../helpers/signalHelpers";
import MultipleTextInputEditor from "./MultipleTextInputEditor";
import type { MultipleTextInputRowItem } from "./MultipleTextInputRow";

export const MultipleTextInputManager = () => {
  const [hostnames, setHostnames] = createSignal<MultipleTextInputRowItem[]>([
    { id: crypto.randomUUID(), value: "" },
  ]);

  onMount(async () => {
    const savedValues = await getHostnames();
    crypto.randomUUID();
    if (savedValues.length) {
      setHostnames(
        savedValues.map((value) => ({ id: crypto.randomUUID(), value }))
      );
    }
    logger.debug({ savedValues }, "Loaded hostnames from storage");
  });

  const persistHostnames = async (values: MultipleTextInputRowItem[]) => {
    await saveHostnames(values.map((row) => row.value));
    logger.debug({ hostnames: values }, "Saved hostnames to storage");
  };

  const updateHostnames = async (
    updateCallback: (
      current: MultipleTextInputRowItem[]
    ) => MultipleTextInputRowItem[]
  ) => {
    const next = updateCallback(hostnames());
    setHostnames(next);
    await persistHostnames(next);
  };

  const handleValueChange = async (row: MultipleTextInputRowItem) => {
    await updateHostnames(updateFieldByIdCallback(row.id, row));
  };

  const removeHostnameField = async (row: MultipleTextInputRowItem) => {
    await updateHostnames(removeFieldByIdCallback(row.id));
  };

  const addHostnameField = () => {
    setHostnames((current) => [
      ...current,
      { id: crypto.randomUUID(), value: "" },
    ]);
  };

  return (
    <MultipleTextInputEditor
      hostnames={hostnames()}
      onAdd={addHostnameField}
      onChange={handleValueChange}
      onRemove={removeHostnameField}
    />
  );
};

export default MultipleTextInputManager;
