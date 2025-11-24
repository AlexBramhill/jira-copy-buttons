import {
  getHostnames,
  saveHostnames,
} from "../../shared/repository/chromeStorageSync";
import PersistentMultipleTextInputs from "../components/multiple-text-inputs/PersistentMultipleTextInputs";
import PopupContainer from "../components/PopupContainer";
import UrlTextInput from "../components/text-inputs/UrlTextInput.tsx";

export const Popup = () => {
  return (
    <PopupContainer>
      <h1 class="text-2xl font-bold mb-4">Jira Branch Creator</h1>
      <p>Adds helpful buttons for Jira issues to create branches easily.</p>
      <PersistentMultipleTextInputs
        textInput={UrlTextInput}
        loadFromPersistence={getHostnames}
        saveToPersistence={saveHostnames}
      >
        <div class="space-y-3">
          <h2 class="text-sm font-semibold text-neutral-200">
            Whitelisted URLs
          </h2>
          <p>
            Add in the hostnames of your Jira instances where you want the
            branch creation buttons to appear.
          </p>
        </div>
      </PersistentMultipleTextInputs>
    </PopupContainer>
  );
};

export default Popup;
