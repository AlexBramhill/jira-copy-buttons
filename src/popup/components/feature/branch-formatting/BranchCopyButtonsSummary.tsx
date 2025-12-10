import { createValueWithIdArrayStore } from "../../../stores/valueWithIdArrayStore";
import BranchCopyButtonAccordion from "./BranchCopyButtonAccordion";
import ValuesTable from "../../common/ValueEditingTable";
import { repository } from "../../../../shared/repository/chromeStorageSync";

export const BranchCopyButtonsSummary = () => {
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
        <BranchCopyButtonAccordion
          valueWithId={valueWithId}
          onUpdate={async (newValue) => onUpdate(newValue)}
        />
      )}
    />
  );
};

export default BranchCopyButtonsSummary;
