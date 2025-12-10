import { For } from "solid-js";
import type { StrategyStorageItem } from "./StrategyStorageItem";
import type { StrategyConfig } from "./StrategyConfig";
import StrategyField from "./fields/StrategyField";

interface StrategyFormProps<T extends StrategyStorageItem> {
  value: T;
  config: StrategyConfig<T>;
  updateValue: (value: T) => Promise<void>;
}

export const StrategyForm = <T extends StrategyStorageItem>(
  props: StrategyFormProps<T>
) => {
  return (
    <div class="space-y-4">
      <For each={props.config.fields}>
        {(field) => (
          <StrategyField
            field={field}
            value={props.value}
            onUpdate={props.updateValue}
          />
        )}
      </For>
    </div>
  );
};

export default StrategyForm;
