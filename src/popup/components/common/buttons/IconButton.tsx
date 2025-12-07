import type { ParentProps } from "solid-js";

type IconButtonProps = {
  onClick: () => void;
  ariaLabel: string;
  variant?: IconButtonVariant;
  class?: string;
} & ParentProps;

export const IconButtonVariants = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  DELETE: "delete",
} as const;

export type IconButtonVariant =
  (typeof IconButtonVariants)[keyof typeof IconButtonVariants];

export const IconButton = ({
  children,
  onClick,
  ariaLabel,
  variant = IconButtonVariants.SECONDARY,
  class: className,
}: IconButtonProps) => {
  const baseClasses =
    "w-8 h-8 flex items-center justify-center text-xs rounded-md border transition";

  const variantClasses = {
    [IconButtonVariants.PRIMARY]:
      "bg-blue-600 text-white border-blue-600 hover:bg-blue-700 hover:border-blue-700",
    [IconButtonVariants.SECONDARY]:
      "bg-neutral-800 text-neutral-400 border-neutral-700 hover:bg-neutral-700 hover:text-neutral-100",
    [IconButtonVariants.DELETE]:
      "bg-neutral-800 text-neutral-400 border-neutral-700 hover:bg-red-600 hover:text-white hover:border-red-600",
  };

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      class={`${baseClasses} ${variantClasses[variant]} ${
        className ?? ""
      }`.trim()}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default IconButton;
