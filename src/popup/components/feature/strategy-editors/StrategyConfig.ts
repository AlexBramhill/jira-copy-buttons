import type { JSX } from "solid-js";
import type { FieldDefinition } from "../../common/fields/FieldDefinition";

export type StrategyConfig<T> = {
  renderHeader: (item: T) => JSX.Element;
  fields: FieldDefinition<T>[];
};
