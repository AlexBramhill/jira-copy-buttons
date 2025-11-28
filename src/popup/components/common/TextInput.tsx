import type { JSX } from "solid-js";

interface TextInputProps {
  id: string;
  value: string;
  onInput: (value: string) => void;
  placeholder?: string;
  class?: string;
  prefix?: JSX.Element | string;
  suffix?: JSX.Element | string;
}

export const TextInput = (props: TextInputProps) => (
  <div class="flex items-stretch w-full">
    {props.prefix && (
      <span class="inline-flex items-center px-2 rounded-l-md border border-r-0 border-neutral-700 bg-neutral-800 text-neutral-400 text-sm">
        {props.prefix}
      </span>
    )}
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
    {props.suffix && (
      <span class="inline-flex items-center px-2 rounded-r-md border border-l-0 border-neutral-700 bg-neutral-800 text-neutral-400 text-sm">
        {props.suffix}
      </span>
    )}
  </div>
);
