import { TextInput } from "../../common/TextInput";
import { createValueWithIdArrayStore } from "../../../stores/valueWithIdArrayStore";
import ValuesTable from "../../common/ValueEditingTable";
import { hostnamesRepository } from "../../../../shared/repository/chromeStorageSync";

export const WhitelistManager = () => {
  return (
    <ValuesTable
      createValuesWithIdArrayStore={() =>
        createValueWithIdArrayStore({
          repository: hostnamesRepository,
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
