import { getHostnames } from "../../shared/repository/chromeStorageSync";
import { removeWwwPrefix } from "./urlHelper";

export const isOnJiraPage = async () => {
  const hostnames = await getHostnames();
  const currentPageUrl = new URL(window.location.href);
  const currentPageHostname = removeWwwPrefix(currentPageUrl.hostname);

  const isOnStoredHostnamePage =
    hostnames &&
    hostnames.some(
      (hostname) => removeWwwPrefix(hostname) === currentPageHostname
    );

  return isOnStoredHostnamePage;
};
