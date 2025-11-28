import { isOnJiraPage } from "./helpers/jiraPageDeterminator";
import { addProcessPageEventListener } from "./page-processor/processPage";
import { logger } from "../shared/logger";
import { isDebug } from "../shared/debugger";
import { getEnabledTicketSelectorStrategies } from "./helpers/strategyGetter";

export const runApp = () => {
  logger.debug("Debug mode enabled");
  logger.debug("Content script loaded");

  if (isDebug()) {
    chrome.runtime.sendMessage({ msg: "Hello from content script" });
  }

  (async () => {
    if (await isOnJiraPage()) {
      logger.debug("On Jira page, registering processors");
      const enabledTicketSelectorStrategies =
        await getEnabledTicketSelectorStrategies();
      addProcessPageEventListener(enabledTicketSelectorStrategies);
    }
  })();
};
