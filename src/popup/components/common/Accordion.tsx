import { createBooleanToggle } from "../../signals/booleanToggleStore";
import { type JSX, Show, type ParentProps } from "solid-js";
import Button from "./buttons/Button";

interface AccordionProps extends ParentProps {
  openByDefault?: boolean;
  class?: string;
  header: JSX.Element;
}

export const Accordion = (props: AccordionProps) => {
  const [open, toggle] = createBooleanToggle(props.openByDefault);

  return (
    <div class={`${props.class ?? ""}`}>
      <Button
        type="button"
        class={`w-full flex justify-between items-center text-left text-white font-semibold  ${
          open() ? "rounded-b-none border-b-0 focus:outline-none" : ""
        }`}
        variant="secondary"
        aria-expanded={open()}
        onClick={toggle}
      >
        <span>{props.header}</span>
        <span class="ml-2 text-neutral-400">{open() ? "▲" : "▼"}</span>
      </Button>
      <Show when={open()}>
        <div class="pt-4 p-2 bg-neutral-900 border border-neutral-700 border-t-0 rounded-b-md">
          {props.children}
        </div>
      </Show>
    </div>
  );
};

export default Accordion;
