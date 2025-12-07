import IconButton, { IconButtonVariants } from "./IconButton";

type DeleteButtonProps = {
  onClick: () => Promise<void>;
};

export const DeleteButton = (props: DeleteButtonProps) => (
  <IconButton
    ariaLabel="Remove button"
    onClick={async () => await props.onClick()}
    variant={IconButtonVariants.DELETE}
  >
    ✖
  </IconButton>
);
