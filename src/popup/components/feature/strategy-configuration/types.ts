import type { JSX } from "solid-js";
import type { ToggleableStorageData } from "../../../../shared/repository/ToggleableStorageData";
import type { ConfigurableStrategy } from "../../../../shared/strategies/ConfigurableStrategy";

export type StrategyStorageItem = ToggleableStorageData & ConfigurableStrategy;

export type FieldDefinition<T> = {
  id: string;
  type: "text" | "select" | "toggle" | "elementSelector" | "case"; // TODO consider refactoring to use consts
  label?: string;
  prefix?: string;
  placeholder?: string;
  getOptions?: () => { value: string; label: string }[];
  getValue: (item: T) => any;
  setValue: (item: T, value: any) => T;
  class?: string;
};

export type StrategyConfig<T extends StrategyStorageItem> = {
  fields: FieldDefinition<T>[];
  renderHeader?: (item: T) => JSX.Element;
};
