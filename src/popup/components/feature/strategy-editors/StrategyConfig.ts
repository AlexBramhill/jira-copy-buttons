import type { JSX } from "solid-js";
import type { FieldDefinition } from "../../common/fields/FieldDefinition";
import type { StrategyStorageItem } from "../../common/StrategyAccordion";

export type StrategyConfig<T extends StrategyStorageItem> = {
  renderHeader?: (item: T) => JSX.Element;
  fields: FieldDefinition<T>[];
};
