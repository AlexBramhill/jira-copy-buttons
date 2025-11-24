import { createSignal, onMount } from "solid-js";
import {
  getHostnames,
  saveHostnames,
} from "../../shared/repository/chromeStorageSync";
import { logger } from "../../shared/logger";
import {
  removeFieldByIdCallback,
  updateFieldByIdCallback,
} from "../helpers/signalHelpers";
import MultipleTextInputEditor from "./Text Input/MultipleTextInputEditor";
import type { UUID } from "crypto";

const HostnamesManager = () => {
  const [hostnames, setHostnames] = createSignal<string[]>([""]);

  onMount(async () => {
    const savedValues = await getHostnames();
    if (savedValues.length) {
      setHostnames(savedValues);
    }
    logger.debug({ savedValues }, "Loaded hostnames from storage");
  });

  const persistHostnames = async (values: string[]) => {
    await saveHostnames(values);
    logger.debug({ hostnames: values }, "Saved hostnames to storage");
  };

  const updateHostnames = async (
    updateCallback: (current: string[]) => string[]
  ) => {
    const next = updateCallback(hostnames());
    setHostnames(next);
    await persistHostnames(next);
  };

  const handleValueChange = async (id: UUID, value: string) => {
    await updateHostnames(updateFieldByIdCallback(id, value));
  };

  const removeHostnameField = async (id: UUID) => {
    await updateHostnames(removeFieldByIdCallback(id));
  };

  const addHostnameField = () => {
    setHostnames((current) => [...current, ""]);
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

export default HostnamesManager;
