import { For } from "solid-js";
import {
  getBranchCopyButtonConfigs,
  saveBranchCopyButtonConfigs,
} from "../../../../shared/repository/chromeStorageSync";
import {
  TICKET_DESCRIPTION_WILDCARD,
  TICKET_PREFIX_WILDCARD,
} from "../../../../shared/ticketWildcards";
import { Case } from "../../../../shared/transformers/Case";
import { createValueWithIdStore } from "../../../stores/valueWithIdStore";
import Accordion from "../../common/Accordion";
import { BranchCopyButtonConfigurationCard } from "./BranchCopyButtonConfigurationCard";
import Button from "../../common/Button";

export const BranchCopyButtonsSummary = () => {
  const { values, addValue, updateValue, removeValue } = createValueWithIdStore(
    {
      loadFromPersistence: getBranchCopyButtonConfigs,
      saveToPersistence: saveBranchCopyButtonConfigs,
      createDefaultValue: () => ({
        buttonName: "Create Branch",
        formatPattern: `git checkout -b ${TICKET_PREFIX_WILDCARD}-${TICKET_DESCRIPTION_WILDCARD}`,
        prefixCase: Case.Kebab,
        descriptionCase: Case.Kebab,
      }),
    }
  );

  const renderRow = (valueWithId: (typeof values)[number]) => {
    return (
      <>
        <Accordion title={valueWithId.value.buttonName}>
          <BranchCopyButtonConfigurationCard
            value={valueWithId.value}
            updateValue={(newValue) =>
              updateValue({ ...valueWithId, value: newValue })
            }
          ></BranchCopyButtonConfigurationCard>
        </Accordion>
        <Button onClick={() => removeValue(valueWithId.id)}>Remove</Button>
      </>
    );
  };

  return (
    <>
      <table>
        <tbody>
          <For each={values}>{renderRow}</For>
          <Button onClick={addValue}>Add new button</Button>
        </tbody>
      </table>
    </>
  );
};

export default BranchCopyButtonsSummary;
