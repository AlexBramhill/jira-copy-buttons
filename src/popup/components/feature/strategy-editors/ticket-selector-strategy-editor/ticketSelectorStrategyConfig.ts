import type { TicketSelectorStrategyStorageDataItem } from "../../../../../shared/repository/ticketSelectorStrategyStorageData";
import type { StrategyConfig } from "../StrategyConfig";

export const ticketSelectorStrategyConfig: StrategyConfig<TicketSelectorStrategyStorageDataItem> =
  {
    fields: [
      {
        id: "strategy-name",
        type: "text",
        prefix: "Name",
        placeholder: "Strategy Name",
        getValue: (item) => item.name,
        setValue: (item, value) => ({ ...item, name: value }),
      },
      {
        id: "strategy-description",
        type: "text",
        prefix: "Description",
        placeholder: "Description (optional)",
        getValue: (item) => item.description || "",
        setValue: (item, value) => ({ ...item, description: value }),
      },
      {
        id: "container-selector",
        type: "elementSelector",
        label: "Container Selector",
        getValue: (item) => item.containerSelector,
        setValue: (item, value) => ({ ...item, containerSelector: value }),
      },
      {
        id: "prefix-selector",
        type: "elementSelector",
        label: "Prefix Selector",
        getValue: (item) => item.prefixSelector,
        setValue: (item, value) => ({ ...item, prefixSelector: value }),
      },
      {
        id: "title-selector",
        type: "elementSelector",
        label: "Title Selector",
        getValue: (item) => item.titleSelector,
        setValue: (item, value) => ({ ...item, titleSelector: value }),
      },
      {
        id: "button-location-selector",
        type: "elementSelector",
        label: "Button Location Selector",
        getValue: (item) => item.buttonLocationSelector,
        setValue: (item, value) => ({ ...item, buttonLocationSelector: value }),
      },
      {
        id: "enabled-toggle",
        type: "toggle",
        prefix: "Enabled",
        getValue: (item) => item.isEnabled,
        setValue: (item, value) => ({ ...item, isEnabled: value }),
      },
    ],
  };
