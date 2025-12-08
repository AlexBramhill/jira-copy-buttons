import { For } from "solid-js";
import ContainerHeading from "../../common/ContainerHeading";
import { createValueWithIdStore } from "../../../stores/valueWithIdStore";
import IconButton, {
  IconButtonVariants,
} from "../../common/buttons/IconButton";
import ToggleButton from "../../common/buttons/ToggleButton";
import type { StorageRepository } from "../../../../shared/repository/chromeStorageSync";

interface StrategyTogglesProps<T extends Record<string, boolean>> {
  title: string;
  repository: StorageRepository<T>;
}

export const StrategyToggles = <T extends Record<string, boolean>>(
  props: StrategyTogglesProps<T>
) => {
  const { value, updateValue, resetValue } = createValueWithIdStore({
    loadFromPersistence: props.repository.get,
    saveToPersistence: props.repository.save,
    createDefaultValue: props.repository.createDefaultValue,
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
            <ToggleButton
              id={`toggle-${String(key)}`}
              checked={value.value[key]}
              onChange={() => handleToggle(String(key))}
              prefix={String(key)}
            />
          )}
        </For>
      </div>
    </>
  );
};

export default StrategyToggles;
