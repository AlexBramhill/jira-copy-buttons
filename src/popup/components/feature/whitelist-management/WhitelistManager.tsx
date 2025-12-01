import { For } from "solid-js";
import { TextInput } from "../../common/TextInput";
import { createValueWithIdArrayStore } from "../../../stores/valueWithIdArrayStore";
import {
  getHostnames,
  saveHostnames,
} from "../../../../shared/repository/chromeStorageSync";
import type { UUID } from "crypto";
import type { ValueWithId } from "../../../stores/IValueWithId";
import { DeleteButton } from "../../common/button/DeleteButton";
import Button from "../../common/button/Button";

export const WhitelistManager = () => {
  const { values, addValue, updateValue, removeValue } =
    createValueWithIdArrayStore({
      loadFromPersistence: getHostnames,
      saveToPersistence: saveHostnames,
      createDefaultValue: () => "",
    });

  const handleOnRemove = async (id: UUID) => {
    await removeValue(id);
  };

  const handleAddButtonOnClick = async () => {
    await addValue();
  };

  const handleInput = (id: UUID, value: string) => {
    updateValue({ id, value });
  };

  return (
    <>
      <table class="w-full">
        <tbody class="gap-2 flex flex-col p-2">
          <For each={values}>
            {(valueWithId) => (
              <tr class="flex items-center justify-between w-full gap-2">
                <td class="shrink-0">
                  <DeleteButton
                    onClick={() => handleOnRemove(valueWithId.id)}
                  />
                </td>
                <td class="flex-1">
                  <TextInput
                    id={valueWithId.id}
                    value={valueWithId.value}
                    onInput={(newValue) =>
                      handleInput(valueWithId.id, newValue)
                    }
                    placeholder="example.atlassian.net"
                    prefix="https://"
                    suffix="/"
                  />
                </td>
              </tr>
            )}
          </For>
          <tr>
            <Button onClick={handleAddButtonOnClick}>Add new URL</Button>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default WhitelistManager;
