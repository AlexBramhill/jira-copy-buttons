import type { StringStoreWithId } from "../persistent-multiple-text-input/MultipleTextInputRow";

export type TextInputProps = {
  data: StringStoreWithId;
  onChange: (updated: StringStoreWithId) => void;
};
