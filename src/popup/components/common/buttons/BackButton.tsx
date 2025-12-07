import IconButton from "./IconButton";

interface BackButtonProps {
  onClick: () => void;
}
export const BackButton = (props: BackButtonProps) => (
  <IconButton onClick={props.onClick} ariaLabel="Back to home">
    ◀
  </IconButton>
);
