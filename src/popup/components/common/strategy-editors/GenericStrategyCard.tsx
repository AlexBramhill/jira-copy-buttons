import { For } from "solid-js";
import type { StrategyStorageItem, StrategyConfig } from "./types";
import StrategyField from "./StrategyField";

interface GenericStrategyCardProps<T extends StrategyStorageItem> {
  value: T;
  config: StrategyConfig<T>;
  updateValue: (value: T) => Promise<void>;
}

export const GenericStrategyCard = <T extends StrategyStorageItem>(
  props: GenericStrategyCardProps<T>
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

export default GenericStrategyCard;
