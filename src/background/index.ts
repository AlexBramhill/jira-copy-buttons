import { logger } from "../shared/logger";

chrome.runtime.onInstalled.addListener(() => {
  logger.info("Extension installed");
});
