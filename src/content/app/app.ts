import { isDebug } from "../../shared/debugger";
import { logger } from "../../shared/logger";
import { processPage } from "../page-processors/pageProcessor";

export const runApp = () => {
  logger.debug("Debug mode enabled");
  logger.debug("Content script loaded");

  if (isDebug()) {
    chrome.runtime.sendMessage({ msg: "Hello from content script" });
  }

  processPage();
};
