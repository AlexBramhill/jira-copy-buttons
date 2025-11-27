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
import Button from "../../common/Button";
import BranchCopyButtonAccordion from "./BranchCopyButtonAccordion";
import type { UUID } from "crypto";
import type { ValueWithId } from "../../../stores/IValueWithId";
import type { BranchCopyButtonConfig } from "../../../../shared/repository/BranchCopyButtonConfig";

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

  const handleOnRemove = async (id: UUID) => {
    await removeValue(id);
  };

  const handleOnUpdate = async (
    valueWithId: ValueWithId<BranchCopyButtonConfig>
  ) => {
    await updateValue(valueWithId);
  };

  const handleAddButtonOnClick = async () => {
    await addValue();
  };

  return (
    <>
      <table class="w-full">
        <tbody>
          <For each={values}>
            {(valueWithId) => (
              <BranchCopyButtonAccordion
                valueWithId={valueWithId}
                onUpdate={handleOnUpdate}
                onRemove={handleOnRemove}
              />
            )}
          </For>
        </tbody>
      </table>
      <Button onClick={handleAddButtonOnClick}>Add new button</Button>
    </>
  );
};

export default BranchCopyButtonsSummary;
