import type { UrlProcessorStrategyStorageDataItem } from "../../../../../shared/repository/urlProcessorStrategyStorageData";
import type { StrategyConfig } from "../StrategyConfig";
import { TitleAndDescriptionHeader } from "../../../common/TitleAndDescriptionHeader";

export const UrlProcessorStrategyConfig: StrategyConfig<UrlProcessorStrategyStorageDataItem> =
  {
    renderHeader: (item) => <TitleAndDescriptionHeader title={item.hostname} />,
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
