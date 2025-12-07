import Accordion from "../../common/Accordion";
import { BranchCopyButtonStrategyCard } from "./BranchCopyButtonStrategyCard";
import BranchCopyButtonHeader from "./BranchCopyButtonHeader";
import type { ValueWithId } from "../../../stores/IValueWithId";
import type { BranchCopyButtonStrategyStorageDataItem } from "../../../../shared/repository/branchCopyButtonStrategyStorageData";

interface BranchCopyButtonAccordionProps {
  valueWithId: ValueWithId<BranchCopyButtonStrategyStorageDataItem>;
  onUpdate: (value: BranchCopyButtonStrategyStorageDataItem) => Promise<void>;
}

export const BranchCopyButtonAccordion = (
  props: BranchCopyButtonAccordionProps
) => {
  const handleUpdate = async (
    newValue: BranchCopyButtonStrategyStorageDataItem
  ) => {
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
