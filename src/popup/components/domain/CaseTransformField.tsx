import Select from "../common/Select";
import { Case } from "../../../shared/transformers/Case";
import FormField from "../common/FormField";

type CaseTransformOption = {
  value: Case;
  label: string;
};
export const caseTransformOptions: CaseTransformOption[] = [
  { value: Case.NoChange, label: "No Change" },
  { value: Case.Upper, label: "UPPER CASE" },
  { value: Case.Lower, label: "lower case" },
  { value: Case.Snake, label: "snake_case" },
  { value: Case.Kebab, label: "kebab-case" },
  { value: Case.Pascal, label: "PascalCase" },
  { value: Case.Camel, label: "camelCase" },
];

interface CaseTransformFieldProps {
  id: string;
  label: string;
  value: Case;
  onChange: (value: Case) => void;
  class?: string;
}

export const CaseTransformField = (props: CaseTransformFieldProps) => (
  <FormField id={props.id} label={props.label}>
    <Select
      id={props.id}
      value={props.value}
      onChange={props.onChange}
      options={caseTransformOptions}
      class={props.class}
    />
  </FormField>
);

export default CaseTransformField;
