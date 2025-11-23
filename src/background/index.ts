import { logger } from "../shared/logger";

chrome.runtime.onInstalled.addListener(() => {
  logger.debug("Extension installed");
});
