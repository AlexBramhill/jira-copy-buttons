import { Affixes } from "./Affixes";

interface TextInputProps {
  id: string;
  value: string;
  onInput: (value: string) => void;
  placeholder?: string;
  class?: string;
  prefix?: string;
  suffix?: string;
}

export const TextInput = (props: TextInputProps) => (
  <Affixes prefix={props.prefix} suffix={props.suffix}>
    <input
      id={props.id}
      type="text"
      value={props.value}
      onInput={(e) => props.onInput(e.currentTarget.value)}
      placeholder={props.placeholder}
      class={`flex-1 min-w-0 rounded-none border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm text-neutral-100 placeholder:text-neutral-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none ${
        props.class || ""
      } ${props.prefix ? "rounded-l-none border-l-0" : "rounded-l-md"} ${
        props.suffix ? "rounded-r-none border-r-0" : "rounded-r-md"
      }`}
      autocomplete="off"
    />
  </Affixes>
);
