import type { ValueWithId } from "../../../stores/IValueWithId";

export type TextInputProps = {
  data: ValueWithId<string>;
  onChange: (updated: ValueWithId<string>) => void;
};
