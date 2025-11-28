import { createBooleanToggle } from "../../signals/booleanToggleStore";
import { type JSX, Show, type ParentProps } from "solid-js";

interface AccordionProps extends ParentProps {
  openByDefault?: boolean;
  class?: string;
  header: JSX.Element;
}

export const Accordion = (props: AccordionProps) => {
  const [open, toggle] = createBooleanToggle(props.openByDefault);

  return (
    <div
      class={`border border-neutral-700 rounded-md bg-neutral-900/80 ${
        props.class ?? ""
      }`}
    >
      <button
        type="button"
        class="w-full flex justify-between items-center px-2 py-2 text-left text-white font-semibold focus:outline-none focus:ring"
        aria-expanded={open()}
        onClick={toggle}
      >
        {props.header}
        <span class="ml-2 text-neutral-400">{open() ? "▲" : "▼"}</span>
      </button>
      <Show when={open()}>
        <div class="py-4 px-4">{props.children}</div>
      </Show>
    </div>
  );
};

export default Accordion;
