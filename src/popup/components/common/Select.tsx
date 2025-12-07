import { Affixes } from "./Affixes";

interface SelectProps<T extends string> {
  id: string;
  value: T;
  onChange: (value: T) => void;
  options: { value: T; label: string }[];
  class?: string;
  prefix?: string;
  suffix?: string;
}

export const Select = <T extends string>(props: SelectProps<T>) => {
  return (
    <Affixes prefix={props.prefix} suffix={props.suffix}>
      <select
        id={props.id}
        value={props.value}
        onChange={(e) => props.onChange(e.currentTarget.value as T)}
        class={`flex-1 min-w-0 rounded-none border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm text-neutral-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none ${
          props.class || ""
        } ${props.prefix ? "rounded-l-none border-l-0" : "rounded-l-md"} ${
          props.suffix ? "rounded-r-none border-r-0" : "rounded-r-md"
        }`}
      >
        {props.options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </Affixes>
  );
};

export default Select;
