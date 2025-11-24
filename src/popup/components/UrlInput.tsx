import { createSignal, onMount } from "solid-js";
import {
  getHostnames,
  saveHostnames,
} from "../../shared/repository/chromeStorageSync";
import { logger } from "../../shared/logger";
import { HostnamesEditor } from "./HostnamesEditor";

export default function UrlInput() {
  const [hostnames, setHostnames] = createSignal<string[]>([""]);

  const persistHostnames = async (values: string[]) => {
    const trimmed = values.map((value) => value.trim()).filter(Boolean);
    await saveHostnames(trimmed);
    logger.debug({ hostnames: trimmed }, "Saved hostnames to storage");
  };

  const updateHostnames = async (updater: (current: string[]) => string[]) => {
    const next = updater(hostnames());
    setHostnames(next);
    await persistHostnames(next);
  };

  onMount(async () => {
    const savedValues = await getHostnames();
    if (savedValues.length) {
      setHostnames(savedValues);
    }
    logger.debug({ savedValues }, "Loaded hostnames from storage");
  });

  const handleValueChange = async (index: number, value: string) => {
    await updateHostnames((current) => {
      const next = [...current];
      next[index] = value;
      return next;
    });
  };

  const addHostnameField = () => {
    setHostnames((current) => [...current, ""]);
  };

  const removeHostnameField = async (index: number) => {
    await updateHostnames((current) => {
      if (current.length === 1) {
        return [""];
      }
      return current.filter((_, i) => i !== index);
    });
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
