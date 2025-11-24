import type { StringWithIdStoreItem } from "../multiple-text-inputs/MultipleTextInputRow";

export type TextInputProps = {
  data: StringWithIdStoreItem;
  onChange: (updated: StringWithIdStoreItem) => void;
};
