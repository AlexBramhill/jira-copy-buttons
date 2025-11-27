import type { ParentProps } from "solid-js";

type IconButtonProps = {
  onClick: () => void;
  ariaLabel: string;
  class?: string;
} & ParentProps;

export const IconButton = ({
  children,
  onClick,
  ariaLabel,
  class: className,
}: IconButtonProps) => {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      class={`rounded-md border border-neutral-700 p-2 text-sm text-neutral-100 transition hover:bg-neutral-800 ${
        className ?? ""
      }`.trim()}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default IconButton;
