import type { ContainerProcessorStrategyName } from "../../shared/repository/containerProcessorStrategy";
import type { IContainerProcessorStrategy } from "./IContainerProcessorStrategy";

type StrategyKeyValuePair = Map<
  ContainerProcessorStrategyName,
  IContainerProcessorStrategy
>;

interface StrategyDifferences {
  toRemove: StrategyKeyValuePair;
  toAdd: StrategyKeyValuePair;
}

export class ContainerProcessorStrategyManager {
  private activeStrategies: StrategyKeyValuePair = new Map();

  async handleStrategyChange(
    newStrategies: StrategyKeyValuePair
  ): Promise<void> {
    const { toRemove, toAdd } = this.computeStrategyDifferences(newStrategies);

    toRemove.forEach((strategy, strategyKey) => {
      this.handleRemovedStrategy(strategy, strategyKey);
    });

    toAdd.forEach((strategy, strategyKey) => {
      this.handleAddedStrategy(strategy, strategyKey);
    });
  }

  private computeStrategyDifferences(
    newStrategies: StrategyKeyValuePair
  ): StrategyDifferences {
    const toRemove = new Map<string, IContainerProcessorStrategy>();
    const toAdd = new Map<string, IContainerProcessorStrategy>();

    for (const [key] of this.activeStrategies) {
      if (!newStrategies.has(key)) {
        toRemove.set(key, this.activeStrategies.get(key)!);
      }
    }

    for (const [key, strategy] of newStrategies) {
      if (!this.activeStrategies.has(key)) {
        toAdd.set(key, strategy);
      }
    }

    return { toRemove, toAdd };
  }

  private handleRemovedStrategy(
    strategy: IContainerProcessorStrategy,
    strategyKey: ContainerProcessorStrategyName
  ): void {
    strategy.cleanUp();
    this.activeStrategies.delete(strategyKey);
  }

  private handleAddedStrategy(
    strategy: IContainerProcessorStrategy,
    strategyKey: ContainerProcessorStrategyName
  ): void {
    strategy.process();
    this.activeStrategies.set(strategyKey, strategy);
  }
}
