import { Button } from "./Button";
import { Toggle } from "../Toggle";

interface ToggleButtonProps {
  id?: string;
  checked: boolean;
  onChange: () => void;
  prefix?: string;
  suffix?: string;
  class?: string;
}

export const ToggleButton = (props: ToggleButtonProps) => {
  return (
    <Button
      onClick={props.onChange}
      variant="secondary"
      class={`flex items-center justify-between ${props.class || ""}`}
    >
      {props.prefix && (
        <span class="mr-3 text-neutral-300">{props.prefix}</span>
      )}

      <Toggle
        id={props.id || "toggle-button"}
        checked={props.checked}
        onChange={() => {}}
        class="pointer-events-none"
      />

      {props.suffix && (
        <span class="ml-3 text-neutral-300">{props.suffix}</span>
      )}
    </Button>
  );
};

export default ToggleButton;
