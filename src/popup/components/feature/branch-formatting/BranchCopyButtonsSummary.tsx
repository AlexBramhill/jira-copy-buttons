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
      <tr id={valueWithId.id}>
        <td>{valueWithId.value.buttonName}</td>
        <td>
          <a href={`#config-card-${valueWithId.id}`}>
            <button type="button">Edit</button>
          </a>
        </td>
      </tr>
    );
  };

  return (
    <>
      Test
      <table>
        <tbody>
          <For each={values}>{renderRow}</For>
        </tbody>
      </table>
    </>
  );
};

export default BranchCopyButtonsSummary;
