import { createSignal, onMount } from "solid-js";
import { logger } from "../../../shared/logger";
import {
  getHostnames,
  saveHostnames,
} from "../../../shared/repository/chromeStorageSync";
import {
  updateFieldByIndexCallback,
  removeFieldByIndexCallback,
} from "../../helpers/signalHelpers";
import HostnamesEditor from "./HostnamesEditor";

export default function HostnamesManager() {
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

  const handleValueChange = async (index: number, value: string) => {
    await updateHostnames(updateFieldByIndexCallback(index, value));
  };

  const removeHostnameField = async (index: number) => {
    await updateHostnames(removeFieldByIndexCallback(index));
  };

  const addHostnameField = () => {
    setHostnames((current) => [...current, ""]);
  };

  return (
    <HostnamesEditor
      hostnames={hostnames()}
      onAdd={addHostnameField}
      onChange={handleValueChange}
      onRemove={removeHostnameField}
    />
  );
}
