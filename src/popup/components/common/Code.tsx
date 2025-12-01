import type { ParentProps } from "solid-js";

interface CodeProps extends ParentProps {
  class?: string;
}

export const Code = (props: CodeProps) => (
  <code
    class={`font-mono rounded bg-neutral-800 py-0.5 text-green-400 text-xs ${
      props.class || ""
    }`.trim()}
  >
    {props.children}
  </code>
);
