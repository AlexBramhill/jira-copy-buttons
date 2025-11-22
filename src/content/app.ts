import { isOnJiraPage } from "./helpers/jiraPageDeterminator";
import { addProcessPageEventListener } from "./page-processor/processPage";
import { allTicketSelectorStrategies } from "./ticket-selector-strategies/allTicketSelectorStrategies";

export const runApp = () => {
  console.log("Content script loaded!");

  chrome.runtime.sendMessage({ msg: "Hello from content script" });

  (async () => {
    if (await isOnJiraPage()) {
      console.log("On Jira page, applying border style.");
      addProcessPageEventListener(allTicketSelectorStrategies);
    }
  })();
};
