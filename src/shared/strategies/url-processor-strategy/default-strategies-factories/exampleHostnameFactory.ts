import type { UrlProcessorStrategy } from "../UrlProcessorStrategy";

export const createExampleUrlStrategy: () => UrlProcessorStrategy = () => ({
  name: "Example Hostname Strategy",
  hostname: "example.atlassian.net",
});
