import { createValueWithIdArrayStore } from "../../../../stores/valueWithIdArrayStore";
import ValuesTable from "../../../common/ValueEditingTable";
import { repository } from "../../../../../shared/repository/chromeStorageSync";
import StrategyAccordion from "../../../common/StrategyAccordion";
import { branchCopyButtonStrategyConfig } from "./branchCopyButtonStrategyConfig";

export const BranchCopyButtonStrategyEditor = () => {
  const createValuesStore = () =>
    createValueWithIdArrayStore({
      repository: repository.branchCopyButtonStrategies,
    });

  return (
    <ValuesTable
      createValuesWithIdArrayStore={createValuesStore}
      renderRow={(valueWithId, onUpdate, onDelete) => (
        <StrategyAccordion
          valueWithId={valueWithId}
          config={branchCopyButtonStrategyConfig}
          onUpdate={async (newValue) => onUpdate(newValue)}
          onDelete={async () => onDelete()}
        />
      )}
    />
  );
};

export default BranchCopyButtonStrategyEditor;
