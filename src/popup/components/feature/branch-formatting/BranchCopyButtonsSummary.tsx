import {
  getBranchCopyButtonStrategies,
  saveBranchCopyButtonStrategies,
} from "../../../../shared/repository/chromeStorageSync";
import {
  TICKET_DESCRIPTION_WILDCARD,
  TICKET_PREFIX_WILDCARD,
} from "../../../../shared/transformers/ticketWildcards";
import { Case } from "../../../../shared/transformers/Case";
import { createValueWithIdArrayStore } from "../../../stores/valueWithIdArrayStore";
import BranchCopyButtonAccordion from "./BranchCopyButtonAccordion";
import ValuesTable from "../../common/ValueEditingTable";

export const BranchCopyButtonsSummary = () => {
  const createValuesStore = () =>
    createValueWithIdArrayStore({
      loadFromPersistence: getBranchCopyButtonStrategies,
      saveToPersistence: saveBranchCopyButtonStrategies,
      createDefaultValue: () => ({
        buttonName: "Create Branch",
        formatPattern: `git checkout -b ${TICKET_PREFIX_WILDCARD}-${TICKET_DESCRIPTION_WILDCARD}`,
        prefixCase: Case.Kebab,
        descriptionCase: Case.Kebab,
      }),
    });

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
