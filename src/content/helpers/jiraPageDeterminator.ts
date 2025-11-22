import { getHostname } from "../../shared/repository/chromeStorageSync";
import { removeWwwPrefix } from "./urlHelper";

export const isOnJiraPage = async () => {
  const hostname = await getHostname();
  const currentPageUrl = new URL(window.location.href);

  const isOnStoredHostnamePage =
    hostname &&
    removeWwwPrefix(hostname) === removeWwwPrefix(currentPageUrl.hostname);

  return isOnStoredHostnamePage;
};
