import type { JSX } from "solid-js";
import { Affixes } from "./Affixes";

interface ToggleProps {
  id: string;
  checked: boolean;
  onChange: () => void;
  prefix?: JSX.Element | string;
  suffix?: JSX.Element | string;
  class?: string;
}

export const Toggle = (props: ToggleProps) => (
  <Affixes
    prefix={props.prefix}
    suffix={props.suffix}
    prefixClass="rounded-r-md border-r-1 mr-2"
    suffixClass="rounded-l-md border-l-1 ml-2"
    wrapperClass={props.class}
  >
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
  </Affixes>
);

export default Toggle;
