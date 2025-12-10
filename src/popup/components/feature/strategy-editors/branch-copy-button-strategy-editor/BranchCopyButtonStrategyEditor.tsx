import { createValueWithIdArrayStore } from "../../../../stores/valueWithIdArrayStore";
import ValuesTable from "../../../common/ValueEditingTable";
import { repository } from "../../../../../shared/repository/chromeStorageSync";
import StrategyAccordion from "../../../common/StrategyAccordion";
import { branchCopyButtonStrategyConfig } from "./branchCopyButtonStrategyConfig";

export const BranchCopyButtonStrategyEditor = () => {
  const createValuesStore = () =>
    createValueWithIdArrayStore({
      repository: repository.branchCopyButtonStrategies,
      createDefaultValue: () =>
        repository.branchCopyButtonStrategies.createDefaultValue()[0],
    }); // TODO: make so default value not required?

  return (
    <ValuesTable
      createValuesWithIdArrayStore={createValuesStore}
      renderRow={(valueWithId, onUpdate) => (
        <StrategyAccordion
          valueWithId={valueWithId}
          config={branchCopyButtonStrategyConfig}
          onUpdate={async (newValue) => onUpdate(newValue)}
        />
      )}
    />
  );
};

export default BranchCopyButtonStrategyEditor;
