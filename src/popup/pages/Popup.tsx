import {
  getHostnames,
  saveHostnames,
} from "../../shared/repository/chromeStorageSync";
import PersistentMultipleTextInputManager from "../components/persistant-multiple-text-input/PersistentMultipleTextInputManager";
import PopupContainer from "../components/PopupContainer";

export const Popup = () => {
  return (
    <PopupContainer>
      <h1 class="text-2xl font-bold mb-4">Jira Branch Creator</h1>
      <p>Adds helpful buttons for Jira issues to create branches easily.</p>
      <PersistentMultipleTextInputManager
        loadFromPersistence={getHostnames}
        saveToPersistence={saveHostnames}
      >
        <div class="space-y-3">
          <div class="">
            <p>
              <h2 class="text-sm font-semibold text-neutral-200">
                Whitelisted URLs
              </h2>
            </p>
            Add in the hostnames of your Jira instances where you want the
            branch creation buttons to appear.
          </div>
        </div>
      </PersistentMultipleTextInputManager>
    </PopupContainer>
  );
};

export default Popup;
