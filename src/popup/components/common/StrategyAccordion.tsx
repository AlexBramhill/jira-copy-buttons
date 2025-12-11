import Accordion from "./Accordion";
import type { ValueWithId } from "../../stores/IValueWithId";
import StrategyForm from "./StrategyForm";
import type { StrategyConfig } from "../feature/strategy-editors/StrategyConfig";

interface GenericStrategyAccordionProps<T> {
  valueWithId: ValueWithId<T>;
  config: StrategyConfig<T>;
  onUpdate: (value: T) => Promise<void>;
}

export const StrategyAccordion = <T,>(
  props: GenericStrategyAccordionProps<T>
) => {
  const handleUpdate = async (newValue: T) => {
    await props.onUpdate(newValue);
  };

  return (
    <Accordion header={props.config.renderHeader(props.valueWithId.value)}>
      <StrategyForm
        value={props.valueWithId.value}
        config={props.config}
        updateValue={handleUpdate}
      />
    </Accordion>
  );
};

export default StrategyAccordion;
