interface SelectProps<T extends string> {
  id: string;
  value: T;
  onChange: (value: T) => void;
  options: { value: T; label: string }[];
  class?: string;
}

export const Select = <T extends string>(props: SelectProps<T>) => {
  return (
    <select
      id={props.id}
      value={props.value}
      onChange={(e) => props.onChange(e.currentTarget.value as T)}
      class={`w-full rounded-md border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm text-neutral-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none ${
        props.class || ""
      }`}
    >
      {props.options.map((option) => (
        <option value={option.value}>{option.label}</option>
      ))}
    </select>
  );
};

export default Select;
