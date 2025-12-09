import { For } from "solid-js";
import ContainerHeading from "../../common/ContainerHeading";
import ToggleButton from "../../common/buttons/ToggleButton";
import type { StorageRepository } from "../../../../shared/repository/chromeStorageSync";
import type { ToggleableStorageData } from "../../../../shared/repository/ToggleableStorageData";
import { createValueWithIdArrayStore } from "../../../stores/valueWithIdArrayStore";
import IconButton, {
  IconButtonVariants,
} from "../../common/buttons/IconButton";
import type { ValueWithId } from "../../../stores/IValueWithId";
import type { ConfigurableStrategy } from "../../../../shared/strategies/ConfigurableStrategy";

interface StrategyTogglesProps<
  T extends ConfigurableStrategy & ToggleableStorageData
> {
  title: string;
  repository: StorageRepository<T[]>;
}

export const StrategyToggles = <
  T extends ConfigurableStrategy & ToggleableStorageData
>(
  props: StrategyTogglesProps<T>
) => {
  const { values, updateValue, resetToDefaults } = createValueWithIdArrayStore({
    repository: props.repository,
    createDefaultValue: () => props.repository.createDefaultValue()[0],
  });

  const handleToggle = async (value: ValueWithId<T>) => {
    await updateValue({
      ...value,
      value: {
        ...value.value,
        isEnabled: !value.value.isEnabled,
      },
    });
  };

  return (
    <>
      <div class="flex items-center justify-between">
        <ContainerHeading level={2}>{props.title}</ContainerHeading>
        <IconButton
          onClick={resetToDefaults}
          ariaLabel="Reset to defaults"
          variant={IconButtonVariants.SECONDARY}
        >
          ↻
        </IconButton>
      </div>
      <div class="space-y-2">
        <For each={values}>
          {(value) => (
            <ToggleButton
              id={`toggle-${String(value.id)}`}
              checked={value.value.isEnabled}
              onChange={() => handleToggle(value)}
              prefix={String(value.value.name)}
            />
          )}
        </For>
      </div>
    </>
  );
};

export default StrategyToggles;
