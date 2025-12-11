import { repository } from "../../shared/repository/chromeStorageSync";
import { removeWwwPrefix } from "../helpers/urlHelper";

export const isOnJiraPage = async () => {
  const hostnames = await repository.urlProcessorStrategies.get();
  const currentPageUrl = new URL(window.location.href);
  const currentPageHostname = removeWwwPrefix(currentPageUrl.hostname);

  const isOnStoredHostnamePage = hostnames.some(
    (item) => removeWwwPrefix(item.hostname) === currentPageHostname
  );

  return isOnStoredHostnamePage;
};
