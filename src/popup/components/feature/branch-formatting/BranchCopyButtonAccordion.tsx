import type { BranchCopyButtonConfig } from "../../../../shared/repository/BranchCopyButtonConfig";
import type { UUID } from "crypto";
import Accordion from "../../common/Accordion";
import { BranchCopyButtonConfigurationCard } from "./BranchCopyButtonConfigurationCard";
import BranchCopyButtonHeader from "./BranchCopyButtonHeader";
import type { ValueWithId } from "../../../stores/IValueWithId";

interface BranchCopyButtonAccordionProps {
  valueWithId: ValueWithId<BranchCopyButtonConfig>;
  onUpdate: (valueWithId: ValueWithId<BranchCopyButtonConfig>) => Promise<void>;
  onRemove: (id: UUID) => Promise<void>;
}

export const BranchCopyButtonAccordion = (
  props: BranchCopyButtonAccordionProps
) => {
  const handleUpdate = async (newValue: BranchCopyButtonConfig) => {
    await props.onUpdate({ id: props.valueWithId.id, value: newValue });
  };

  const handleOnRemove = async () => {
    await props.onRemove(props.valueWithId.id);
  };
  return (
    <Accordion
      header={
        <BranchCopyButtonHeader
          config={props.valueWithId.value}
          onRemove={handleOnRemove}
        />
      }
    >
      <BranchCopyButtonConfigurationCard
        value={props.valueWithId.value}
        updateValue={handleUpdate}
      />
    </Accordion>
  );
};

export default BranchCopyButtonAccordion;
