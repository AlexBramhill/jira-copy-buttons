import type { ParentProps } from "solid-js";

type FormFieldProps = {
  id: string;
  label: string;
  helperText?: string;
} & ParentProps;

export const FormField = (props: FormFieldProps) => {
  return (
    <div class="space-y-2">
      <label
        for={props.id}
        class="block text-sm font-semibold text-neutral-200"
      >
        {props.label}
      </label>
      {props.children}
      {props.helperText && (
        <p class="text-xs text-neutral-400">{props.helperText}</p>
      )}
    </div>
  );
};

export default FormField;
