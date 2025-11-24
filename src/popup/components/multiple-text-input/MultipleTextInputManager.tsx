import { createSignal, onMount, type ParentProps } from "solid-js";
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
import type { StringStoreWithId } from "./MultipleTextInputRow";
import type { UUID } from "crypto";

export const MultipleTextInputManager = ({ children }: ParentProps) => {
  const [hostnames, setHostnames] = createSignal<StringStoreWithId[]>([
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

  const persistHostnames = async (values: StringStoreWithId[]) => {
    await saveHostnames(values.map((row) => row.value));
    logger.debug({ hostnames: values }, "Saved hostnames to storage");
  };

  const updateHostnames = async (
    updateCallback: (current: StringStoreWithId[]) => StringStoreWithId[]
  ) => {
    const next = updateCallback(hostnames());
    setHostnames(next);
    await persistHostnames(next);
  };

  const handleValueChange = async (row: StringStoreWithId) => {
    await updateHostnames(updateFieldByIdCallback(row.id, row));
  };

  const removeHostnameField = async (id: UUID) => {
    await updateHostnames(removeFieldByIdCallback(id));
  };

  const addHostnameField = () => {
    setHostnames((current) => [
      ...current,
      { id: crypto.randomUUID(), value: "" },
    ]);
  };

  return (
    <MultipleTextInputEditor
      children={children}
      hostnames={hostnames()}
      onAdd={addHostnameField}
      onChange={handleValueChange}
      onRemove={removeHostnameField}
    />
  );
};

export default MultipleTextInputManager;
