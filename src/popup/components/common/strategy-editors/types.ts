import type { JSX } from "solid-js";
import type { ToggleableStorageData } from "../../../../shared/repository/ToggleableStorageData";
import type { StrategyInfo } from "../../../../shared/strategies/StrategyInfo";
import type { Case } from "../../../../shared/transformers/Case";
import type { ElementSelector } from "../../../../shared/strategies/ticket-selector-strategies/ElementSelector";

export type StrategyStorageItem = ToggleableStorageData & StrategyInfo;

type BaseFieldDefinition = {
  id: string;
  label?: string;
  prefix?: string;
  class?: string;
};

type TextFieldDefinition<T> = BaseFieldDefinition & {
  type: "text";
  placeholder?: string;
  getValue: (item: T) => string;
  setValue: (item: T, value: string) => T;
};

type SelectFieldDefinition<T> = BaseFieldDefinition & {
  type: "select";
  getOptions: () => { value: string; label: string }[];
  getValue: (item: T) => string;
  setValue: (item: T, value: string) => T;
};

type ToggleFieldDefinition<T> = BaseFieldDefinition & {
  type: "toggle";
  getValue: (item: T) => boolean;
  setValue: (item: T, value: boolean) => T;
};

type ElementSelectorFieldDefinition<T> = BaseFieldDefinition & {
  type: "elementSelector";
  getValue: (item: T) => ElementSelector;
  setValue: (item: T, value: ElementSelector) => T;
};

type CaseFieldDefinition<T> = BaseFieldDefinition & {
  type: "case";
  getValue: (item: T) => Case;
  setValue: (item: T, value: Case) => T;
};

export type FieldDefinition<T> =
  | TextFieldDefinition<T>
  | SelectFieldDefinition<T>
  | ToggleFieldDefinition<T>
  | ElementSelectorFieldDefinition<T>
  | CaseFieldDefinition<T>;

export type StrategyConfig<T extends StrategyStorageItem> = {
  fields: FieldDefinition<T>[];
  renderHeader?: (item: T) => JSX.Element;
};
