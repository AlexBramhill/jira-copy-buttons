import type { StringStoreWithId } from "../multiple-text-inputs/MultipleTextInputRow";

export type TextInputProps = {
  data: StringStoreWithId;
  onChange: (updated: StringStoreWithId) => void;
};
