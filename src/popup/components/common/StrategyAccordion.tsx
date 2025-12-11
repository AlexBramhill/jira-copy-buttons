import Accordion from "./Accordion";
import type { ValueWithId } from "../../stores/IValueWithId";
import StrategyForm from "./StrategyForm";
import type { StrategyConfig } from "../feature/strategy-editors/StrategyConfig";
import { DeleteButton } from "./buttons/DeleteButton";

interface GenericStrategyAccordionProps<T> {
  valueWithId: ValueWithId<T>;
  config: StrategyConfig<T>;
  onUpdate: (value: T) => Promise<void>;
  onDelete: () => Promise<void>;
}

export const StrategyAccordion = <T,>(
  props: GenericStrategyAccordionProps<T>
) => {
  const handleUpdate = async (newValue: T) => {
    await props.onUpdate(newValue);
  };

  const header = (
    <div class="flex items-center justify-between w-full gap-2">
      <DeleteButton onClick={props.onDelete} />
      <span class="flex-1">
        {props.config.renderHeader(props.valueWithId.value)}
      </span>
    </div>
  );

  return (
    <Accordion header={header}>
      <StrategyForm
        value={props.valueWithId.value}
        config={props.config}
        updateValue={handleUpdate}
      />
    </Accordion>
  );
};

export default StrategyAccordion;
