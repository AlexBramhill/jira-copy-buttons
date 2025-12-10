import type { JSX } from "solid-js";
import type { FieldDefinition } from "./fields/FieldDefinition";
import type { StrategyStorageItem } from "./StrategyStorageItem";

export type StrategyConfig<T extends StrategyStorageItem> = {
  fields: FieldDefinition<T>[];
  renderHeader?: (item: T) => JSX.Element;
};
