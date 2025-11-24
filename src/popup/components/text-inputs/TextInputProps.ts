import type { ValueWithIdStoreItem } from "../../stores/IValueWithIdStoreItem";

export type TextInputProps = {
  data: ValueWithIdStoreItem<string>;
  onChange: (updated: ValueWithIdStoreItem<string>) => void;
};
