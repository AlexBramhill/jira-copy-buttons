import MultipleTextInputManager from "../components/multiple-text-input/MultipleTextInputManager";
import PopupContainer from "../components/PopupContainer";

export const Popup = () => {
  return (
    <PopupContainer>
      <h1 class="text-2xl font-bold mb-4">Jira Branch Creator</h1>
      <p>Adds helpful buttons for Jira issues to create branches easily.</p>
      <MultipleTextInputManager>
        <div class="space-y-3">
          <div class="">
            <p>
              <label
                for="url-input-0"
                class="text-sm font-semibold text-neutral-200"
              >
                Whitelisted URLs
              </label>
            </p>
            Add in the hostnames of your Jira instances where you want the
            branch creation buttons to appear.
          </div>
        </div>
      </MultipleTextInputManager>
    </PopupContainer>
  );
};

export default Popup;
