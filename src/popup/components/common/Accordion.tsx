import { createBooleanToggle } from "../../signals/booleanToggleStore";
import { Show, type ParentProps } from "solid-js";
import { Button } from "./Button";

interface AccordionProps extends ParentProps {
  title: string;
  openByDefault?: boolean;
  class?: string;
}

export const Accordion = (props: AccordionProps) => {
  const [open, toggle] = createBooleanToggle(props.openByDefault);

  return (
    <div
      class={`border border-neutral-700 rounded-md bg-neutral-900/80 ${
        props.class ?? ""
      }`}
    >
      <Button
        type="button"
        class="w-full flex justify-between items-center px-4 py-3 text-left text-white font-semibold focus:outline-none focus:ring"
        aria-expanded={open()}
        onClick={toggle}
      >
        <span>{props.title}</span>
        <span class="ml-2 text-neutral-400">{open() ? "▲" : "▼"}</span>
      </Button>
      <Show when={open()}>
        <div class="px-4 pb-4">{props.children}</div>
      </Show>
    </div>
  );
};

export default Accordion;
