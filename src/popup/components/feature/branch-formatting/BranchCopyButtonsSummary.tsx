import { createValueWithIdArrayStore } from "../../../stores/valueWithIdArrayStore";
import BranchCopyButtonAccordion from "./BranchCopyButtonAccordion";
import ValuesTable from "../../common/ValueEditingTable";
import { branchCopyButtonStrategiesRepository } from "../../../../shared/repository/chromeStorageSync";
import { DEFAULT_BRANCH_COPY_BUTTON_STRATEGY_STORAGE_DATA } from "../../../../shared/repository/branchCopyButtonStrategyStorageData";

export const BranchCopyButtonsSummary = () => {
  const createValuesStore = () =>
    createValueWithIdArrayStore({
      repository: branchCopyButtonStrategiesRepository,
      createDefaultValue: () =>
        DEFAULT_BRANCH_COPY_BUTTON_STRATEGY_STORAGE_DATA[0],
    }); // TODO: make so default value not required?

  return (
    <>
      <ValuesTable
        createValuesWithIdArrayStore={createValuesStore}
        renderRow={(valueWithId, onUpdate) => (
          <BranchCopyButtonAccordion
            valueWithId={valueWithId}
            onUpdate={async (newValue) => onUpdate(newValue)}
          />
        )}
      />
    </>
  );
};

export default BranchCopyButtonsSummary;
