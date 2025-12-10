import type { StrategyConfig } from "../../common/strategy-editors/types";
import type { BranchCopyButtonStrategyStorageDataItem } from "../../../../shared/repository/branchCopyButtonStrategyStorageData";
import {
  TICKET_DESCRIPTION_WILDCARD,
  TICKET_PREFIX_WILDCARD,
} from "../../../../shared/transformers/ticketWildcards";
import BranchCopyButtonHeader from "./BranchCopyButtonHeader";

export const branchCopyButtonStrategyConfig: StrategyConfig<BranchCopyButtonStrategyStorageDataItem> =
  {
    fields: [
      {
        id: "button-name",
        type: "text",
        prefix: "Button text:",
        placeholder: "Display Name",
        getValue: (item) => item.buttonName,
        setValue: (item, value) => ({ ...item, buttonName: value }),
      },
      {
        id: "format-pattern",
        type: "text",
        prefix: "Copy Text:",
        placeholder: `${TICKET_PREFIX_WILDCARD}: ${TICKET_DESCRIPTION_WILDCARD}`,
        class: "font-mono",
        getValue: (item) => item.formatPattern,
        setValue: (item, value) => ({ ...item, formatPattern: value }),
      },
      {
        id: "prefix-case",
        type: "case",
        prefix: "Prefix Case:",
        getValue: (item) => item.prefixCase,
        setValue: (item, value) => ({ ...item, prefixCase: value }),
      },
      {
        id: "description-case",
        type: "case",
        prefix: "Description Case:",
        getValue: (item) => item.descriptionCase,
        setValue: (item, value) => ({ ...item, descriptionCase: value }),
      },
      {
        id: "enabled-toggle",
        type: "toggle",
        prefix: "Enabled",
        getValue: (item) => item.isEnabled,
        setValue: (item, value) => ({ ...item, isEnabled: value }),
      },
    ],
    renderHeader: (item) => <BranchCopyButtonHeader config={item} />,
  };
