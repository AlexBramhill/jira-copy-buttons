import Accordion from "./Accordion";
import type { ValueWithId } from "../../stores/IValueWithId";
import type { StrategyStorageItem } from "./StrategyStorageItem";
import type { StrategyConfig } from "./StrategyConfig";
import StrategyForm from "./StrategyForm";
import ContainerHeading from "./ContainerHeading";

interface GenericStrategyAccordionProps<T extends StrategyStorageItem> {
  valueWithId: ValueWithId<T>;
  config: StrategyConfig<T>;
  onUpdate: (value: T) => Promise<void>;
}

export const StrategyAccordion = <T extends StrategyStorageItem>(
  props: GenericStrategyAccordionProps<T>
) => {
  const handleUpdate = async (newValue: T) => {
    await props.onUpdate(newValue);
  };

  const defaultHeader = () => (
    <div class="flex-1">
      <ContainerHeading level={3} class="text-sm">
        {props.valueWithId.value.name}
      </ContainerHeading>
      {props.valueWithId.value.description && (
        <p class="text-xs text-neutral-400 mt-1">
          {props.valueWithId.value.description}
        </p>
      )}
    </div>
  );

  return (
    <Accordion
      header={
        props.config.renderHeader
          ? props.config.renderHeader(props.valueWithId.value)
          : defaultHeader()
      }
    >
      <StrategyForm
        value={props.valueWithId.value}
        config={props.config}
        updateValue={handleUpdate}
      />
    </Accordion>
  );
};

export default StrategyAccordion;
