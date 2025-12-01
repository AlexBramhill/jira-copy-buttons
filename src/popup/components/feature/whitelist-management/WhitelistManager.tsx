import { TextInput } from "../../common/TextInput";
import { createValueWithIdArrayStore } from "../../../stores/valueWithIdArrayStore";
import {
  getHostnames,
  saveHostnames,
} from "../../../../shared/repository/chromeStorageSync";
import ValuesTable from "../../common/ValueEditingTable";

export const WhitelistManager = () => {
  return (
    <ValuesTable
      createValuesWithIdArrayStore={() =>
        createValueWithIdArrayStore({
          loadFromPersistence: getHostnames,
          saveToPersistence: saveHostnames,
          createDefaultValue: () => "",
        })
      }
      renderRow={(valueWithId, onInput) => (
        <TextInput
          id={valueWithId.id}
          value={valueWithId.value}
          onInput={(newValue) => onInput(newValue)}
          placeholder="example.atlassian.net"
          prefix="https://"
          suffix="/"
        />
      )}
    />
  );
};

export default WhitelistManager;
