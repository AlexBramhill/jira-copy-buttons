import type { JSX } from "solid-js";

interface ToggleProps {
  id: string;
  checked: boolean;
  onChange: () => void;
  prefix?: JSX.Element | string;
  suffix?: JSX.Element | string;
  class?: string;
}

export const Toggle = (props: ToggleProps) => (
  <div class={`flex items-center ${props.class || ""}`}>
    {props.prefix && <span class="mr-2 text-neutral-300">{props.prefix}</span>}
    <button
      type="button"
      role="switch"
      aria-checked={props.checked}
      id={props.id}
      class={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-neutral-900 ${
        props.checked ? "bg-blue-600" : "bg-neutral-700"
      }`}
      onClick={props.onChange}
    >
      <span
        class={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
          props.checked ? "translate-x-6" : "translate-x-1"
        }`}
      />
    </button>
    {props.suffix && <span class="ml-2  text-neutral-300">{props.suffix}</span>}
  </div>
);

export default Toggle;
