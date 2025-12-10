import type { Case } from "../../../../shared/transformers/Case";
import type { ElementSelector } from "../../../../shared/strategies/ticket-selector-strategies/ElementSelector";
import type { Affix } from "../Affixes";

type FieldDefinitionWithValue<T, V, ExtraProps = {}> = {
  id: string;
  label?: string;
  prefix?: Affix;
  class?: string;
  getValue: (item: T) => V;
  setValue: (item: T, value: V) => T;
} & ExtraProps;

type TextFieldDefinition<T> = FieldDefinitionWithValue<
  T,
  string,
  {
    type: "text";
    placeholder?: string;
  }
>;

type SelectFieldDefinition<T> = FieldDefinitionWithValue<
  T,
  string,
  {
    type: "select";
    getOptions: () => { value: string; label: string }[];
  }
>;

type ToggleFieldDefinition<T> = FieldDefinitionWithValue<
  T,
  boolean,
  {
    type: "toggle";
  }
>;

type ElementSelectorFieldDefinition<T> = FieldDefinitionWithValue<
  T,
  ElementSelector,
  {
    type: "elementSelector";
  }
>;

type CaseFieldDefinition<T> = FieldDefinitionWithValue<
  T,
  Case,
  {
    type: "case";
  }
>;

export type FieldDefinition<T> =
  | TextFieldDefinition<T>
  | SelectFieldDefinition<T>
  | ToggleFieldDefinition<T>
  | ElementSelectorFieldDefinition<T>
  | CaseFieldDefinition<T>;
