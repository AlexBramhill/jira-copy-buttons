import { Case } from "../../../../shared/transformers/Case";
import SelectField from "./SelectField";

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
  label?: string;
  value: Case;
  onChange: (value: Case) => void;
  class?: string;
  prefix?: string;
  suffix?: string;
}

export const CaseTransformField = (props: CaseTransformFieldProps) => (
  <SelectField
    id={props.id}
    label={props.label}
    value={props.value}
    onChange={props.onChange}
    options={caseTransformOptions}
    class={props.class}
    prefix={props.prefix}
    suffix={props.suffix}
  />
);

export default CaseTransformField;
