import type { ToggleableStorageData } from "../../../shared/repository/ToggleableStorageData";
import type { ConfigurableStrategy } from "../../../shared/strategies/ConfigurableStrategy";

export type StrategyStorageItem = ToggleableStorageData & ConfigurableStrategy;
