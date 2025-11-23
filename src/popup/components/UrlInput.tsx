import { createSignal, onMount } from "solid-js";
import {
  getHostname,
  saveHostname,
} from "../../shared/repository/chromeStorageSync";
import { logger } from "../../shared/logger";

export default function UrlInput() {
  const [inputValue, setInputValue] = createSignal("");

  onMount(async () => {
    const savedValue = await getHostname();
    logger.debug({ savedValue }, "Loaded hostname from storage");
    if (savedValue) {
      setInputValue(savedValue);
    }
  });

  const handleInputChange = async (e: Event) => {
    const value = (e.target as HTMLInputElement).value;
    setInputValue(value);
    await saveHostname(value);
    logger.debug({ value }, "Saved hostname to storage");
  };

  return (
    <div>
      <label for="url-input">URL:</label>
      <div style="display: flex; gap: 4px;">
        <span>https://</span>
        <input
          id="url-input"
          type="text"
          value={inputValue()}
          onInput={handleInputChange}
          placeholder="example.atlassian.net"
          style="flex: 1"
        />
        <span>/</span>
      </div>
    </div>
  );
}
