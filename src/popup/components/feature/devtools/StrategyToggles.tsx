import { For } from "solid-js";
import ContainerHeading from "../../common/ContainerHeading";
import Toggle from "../../common/Toggle";
import { createValueWithIdStore } from "../../../stores/valueWithIdStore";
import IconButton from "../../common/IconButton";
import { IconButtonVariants } from "../../common/IconButtonVariants";

interface StrategyTogglesProps<T extends Record<string, boolean>> {
  title: string;
  loadFromPersistence: () => Promise<T>;
  saveToPersistence: (value: T) => Promise<void>;
  createDefaultValue: () => T;
}

export const StrategyToggles = <T extends Record<string, boolean>>(
  props: StrategyTogglesProps<T>
) => {
  const { value, updateValue, resetValue } = createValueWithIdStore({
    loadFromPersistence: props.loadFromPersistence,
    saveToPersistence: props.saveToPersistence,
    createDefaultValue: props.createDefaultValue,
  });

  const handleToggle = (key: string) => {
    updateValue({
      id: value.id,
      value: {
        ...value.value,
        [key]: !value.value[key as keyof typeof value.value],
      } as T,
    });
  };

  return (
    <>
      <div class="flex items-center justify-between">
        <ContainerHeading level={2}>{props.title}</ContainerHeading>
        <IconButton
          onClick={resetValue}
          ariaLabel="Reset to defaults"
          variant={IconButtonVariants.SECONDARY}
        >
          ↻
        </IconButton>
      </div>
      <div class="space-y-2">
        <For each={Object.keys(value.value).sort() as Array<keyof T & string>}>
          {(key) => (
            <Toggle
              id={`toggle-${String(key)}`}
              checked={value.value[key]}
              onChange={() => handleToggle(String(key))}
              suffix={String(key)}
            />
          )}
        </For>
      </div>
    </>
  );
};

export default StrategyToggles;
