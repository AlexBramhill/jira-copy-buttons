import { repository } from "../../shared/repository/chromeStorageSync";
import { removeWwwPrefix } from "../helpers/urlHelper";

export const isOnJiraPage = async () => {
  const hostnames = await repository.hostnames.get();
  const currentPageUrl = new URL(window.location.href);
  const currentPageHostname = removeWwwPrefix(currentPageUrl.hostname);

  const isOnStoredHostnamePage = hostnames.some(
    (hostname) => removeWwwPrefix(hostname) === currentPageHostname
  );

  return isOnStoredHostnamePage;
};
