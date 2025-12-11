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
    <div class={`${props.class ?? ""}`}>
      <button
        type="button"
        class="w-full flex justify-between items-center text-left text-white font-semibold"
        aria-expanded={open()}
        onClick={toggle}
      >
        {props.header}
        <span class="ml-2 text-neutral-400">{open() ? "▲" : "▼"}</span>
      </button>
      <Show when={open()}>
        <div class="mt-2 pt-4 border-t border-neutral-700">
          {props.children}
        </div>
      </Show>
    </div>
  );
};

export default Accordion;
