import type { UrlProcessorStrategyStorageDataItem } from "../../../../../shared/repository/urlProcessorStrategyStorageData";
import type { StrategyConfig } from "../StrategyConfig";

export const UrlProcessorStrategyConfig: StrategyConfig<UrlProcessorStrategyStorageDataItem> =
  {
    fields: [
      {
        id: "hostname",
        type: "text",
        prefix: "Hostname",
        placeholder: "e.g. example.atlassian.net",
        getValue: (item) => item.hostname,
        setValue: (item, value) => ({
          ...item,
          hostname: value,
        }),
      },
    ],
  };
