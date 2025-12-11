import { For } from "solid-js";
import StrategyField from "./fields/StrategyField";
import type { StrategyConfig } from "../feature/strategy-editors/StrategyConfig";

interface StrategyFormProps<T> {
  value: T;
  config: StrategyConfig<T>;
  updateValue: (value: T) => Promise<void>;
}

export const StrategyForm = <T,>(props: StrategyFormProps<T>) => {
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
