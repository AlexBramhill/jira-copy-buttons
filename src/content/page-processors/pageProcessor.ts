import { logger } from "../../shared/logger";
import { addProcessJiraPageEventListener } from "./jiraPageProcessor";
import { isOnJiraPage } from "./jiraPageDeterminator";
import { repository } from "../../shared/repository/chromeStorageSync";

export const processPage = async () => {
  if (!(await isOnJiraPage())) {
    logger.debug("Not on Jira page, skipping processors");
    return;
  }

  logger.debug("On Jira page, registering processors");
  const enabledTicketSelectorStrategies = (
    await repository.ticketSelectorStrategies.get()
  ).filter((strategy) => strategy.isEnabled);

  addProcessJiraPageEventListener(enabledTicketSelectorStrategies);
};
