import {
  getHostnames,
  saveHostnames,
} from "../../shared/repository/chromeStorageSync";
import PersistentMultipleTextInputManager from "../components/persistent-multiple-text-input/PersistentMultipleTextInputManager";
import PopupContainer from "../components/PopupContainer";
import UrlInput from "../components/text-inputs/UrlInput";

export const Popup = () => {
  return (
    <PopupContainer>
      <h1 class="text-2xl font-bold mb-4">Jira Branch Creator</h1>
      <p>Adds helpful buttons for Jira issues to create branches easily.</p>
      <PersistentMultipleTextInputManager
        textInput={UrlInput}
        loadFromPersistence={getHostnames}
        saveToPersistence={saveHostnames}
      >
        <div class="space-y-3">
          <div class="">
            <h2 class="text-sm font-semibold text-neutral-200">
              Whitelisted URLs
            </h2>
            <p>
              Add in the hostnames of your Jira instances where you want the
              branch creation buttons to appear.
            </p>
          </div>
        </div>
      </PersistentMultipleTextInputManager>
    </PopupContainer>
  );
};

export default Popup;
