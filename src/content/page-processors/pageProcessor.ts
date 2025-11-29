import { logger } from "../../shared/logger";
import { getEnabledTicketSelectorStrategies } from "../helpers/strategyGetter";
import { addProcessJiraPageEventListener } from "./jiraPageProcessor";
import { isOnJiraPage } from "./jiraPageDeterminator";

export const processPage = async () => {
  if (!(await isOnJiraPage())) {
    logger.debug("Not on Jira page, skipping processors");
    return;
  }

  logger.debug("On Jira page, registering processors");
  const enabledTicketSelectorStrategies =
    await getEnabledTicketSelectorStrategies();
  addProcessJiraPageEventListener(enabledTicketSelectorStrategies);
};
