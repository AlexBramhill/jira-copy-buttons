interface TextInputProps {
  id: string;
  value: string;
  onInput: (value: string) => void;
  placeholder?: string;
  class?: string;
}

export const TextInput = (props: TextInputProps) => {
  return (
    <input
      id={props.id}
      type="text"
      value={props.value}
      onInput={(e) => props.onInput(e.currentTarget.value)}
      placeholder={props.placeholder}
      class={`w-full rounded-md border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm text-neutral-100 placeholder:text-neutral-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none ${
        props.class || ""
      }`}
    />
  );
};

export default TextInput;
