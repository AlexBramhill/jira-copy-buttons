import { createValueWithIdArrayStore } from "../../../../stores/valueWithIdArrayStore";
import ValuesTable from "../../../common/ValueEditingTable";
import { repository } from "../../../../../shared/repository/chromeStorageSync";
import StrategyAccordion from "../../../common/StrategyAccordion";
import { ticketSelectorStrategyConfig } from "./ticketSelectorStrategyConfig";

export const TicketSelectorStrategyEditor = () => {
  const createValuesStore = () =>
    createValueWithIdArrayStore({
      repository: repository.ticketSelectorStrategies,
      createDefaultValue: () =>
        repository.ticketSelectorStrategies.createDefaultValue()[0],
    });

  return (
    <ValuesTable
      createValuesWithIdArrayStore={createValuesStore}
      renderRow={(valueWithId, onUpdate) => (
        <StrategyAccordion
          valueWithId={valueWithId}
          config={ticketSelectorStrategyConfig}
          onUpdate={async (newValue) => onUpdate(newValue)}
        />
      )}
    />
  );
};

export default TicketSelectorStrategyEditor;
