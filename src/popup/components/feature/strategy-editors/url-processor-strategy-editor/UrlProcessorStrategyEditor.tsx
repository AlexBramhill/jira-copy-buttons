import { createValueWithIdArrayStore } from "../../../../stores/valueWithIdArrayStore";
import ValuesTable from "../../../common/ValueEditingTable";
import { repository } from "../../../../../shared/repository/chromeStorageSync";
import StrategyAccordion from "../../../common/StrategyAccordion";
import { UrlProcessorStrategyConfig } from "./urlProcessorStrategyConfig";

export const UrlProcessorStrategyEditor = () => {
  const createValuesStore = () =>
    createValueWithIdArrayStore({
      repository: repository.urlProcessorStrategies,
    });

  return (
    <ValuesTable
      createValuesWithIdArrayStore={createValuesStore}
      renderRow={(valueWithId, onUpdate) => (
        <StrategyAccordion
          valueWithId={valueWithId}
          config={UrlProcessorStrategyConfig}
          onUpdate={async (newValue) => onUpdate(newValue)}
        />
      )}
    />
  );
};

export default UrlProcessorStrategyEditor;
