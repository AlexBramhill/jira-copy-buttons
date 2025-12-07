import type { BranchCopyButtonStrategy } from "../../../../shared/strategies/BranchCopyButtonStrategy";
import Accordion from "../../common/Accordion";
import { BranchCopyButtonStrategyCard } from "./BranchCopyButtonStrategyCard";
import BranchCopyButtonHeader from "./BranchCopyButtonHeader";
import type { ValueWithId } from "../../../stores/IValueWithId";

interface BranchCopyButtonAccordionProps {
  valueWithId: ValueWithId<BranchCopyButtonStrategy>;
  onUpdate: (value: BranchCopyButtonStrategy) => Promise<void>;
}

export const BranchCopyButtonAccordion = (
  props: BranchCopyButtonAccordionProps
) => {
  const handleUpdate = async (newValue: BranchCopyButtonStrategy) => {
    await props.onUpdate(newValue);
  };

  return (
    <Accordion
      header={<BranchCopyButtonHeader config={props.valueWithId.value} />}
    >
      <BranchCopyButtonStrategyCard
        value={props.valueWithId.value}
        updateValue={handleUpdate}
      />
    </Accordion>
  );
};

export default BranchCopyButtonAccordion;
