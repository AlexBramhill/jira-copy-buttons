import { For } from "solid-js";
import { TextInput } from "../../common/TextInput";
import { createValueWithIdStore } from "../../../stores/valueWithIdStore";
import {
  getHostnames,
  saveHostnames,
} from "../../../../shared/repository/chromeStorageSync";
import type { UUID } from "crypto";

export const WhitelistManager = () => {
  const { values, addValue, updateValue, removeValue } = createValueWithIdStore(
    {
      loadFromPersistence: getHostnames,
      saveToPersistence: saveHostnames,
      createDefaultValue: () => "",
    }
  );

  const handleInput = (id: UUID, value: string) => {
    updateValue({ id, value });

    const lastValue = values[values.length - 1];
    const isLastValueCurrentlyPopulated = lastValue.value !== "";
    if (isLastValueCurrentlyPopulated) {
      addValue();
    }

    const isNewValueEmpty = value === "";
    const isOnlyValue = values.length === 0;

    if (!isOnlyValue && isNewValueEmpty) {
      removeValue(id);
    }
  };

  return (
    <div class="flex flex-col gap-2">
      <For each={values}>
        {(valueWithId) => (
          <TextInput
            id={valueWithId.id}
            value={valueWithId.value}
            onInput={(newValue) => handleInput(valueWithId.id, newValue)}
            placeholder="example.atlassian.net"
            prefix="https://"
            suffix="/"
          />
        )}
      </For>
    </div>
  );
};

export default WhitelistManager;
