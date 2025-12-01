import type { BranchCopyButtonConfig } from "../../../../shared/repository/BranchCopyButtonConfig";
import Accordion from "../../common/Accordion";
import { BranchCopyButtonConfigurationCard } from "./BranchCopyButtonConfigurationCard";
import BranchCopyButtonHeader from "./BranchCopyButtonHeader";
import type { ValueWithId } from "../../../stores/IValueWithId";

interface BranchCopyButtonAccordionProps {
  valueWithId: ValueWithId<BranchCopyButtonConfig>;
  onUpdate: (value: BranchCopyButtonConfig) => Promise<void>;
}

export const BranchCopyButtonAccordion = (
  props: BranchCopyButtonAccordionProps
) => {
  const handleUpdate = async (newValue: BranchCopyButtonConfig) => {
    await props.onUpdate(newValue);
  };

  return (
    <Accordion
      header={<BranchCopyButtonHeader config={props.valueWithId.value} />}
    >
      <BranchCopyButtonConfigurationCard
        value={props.valueWithId.value}
        updateValue={handleUpdate}
      />
    </Accordion>
  );
};

export default BranchCopyButtonAccordion;
