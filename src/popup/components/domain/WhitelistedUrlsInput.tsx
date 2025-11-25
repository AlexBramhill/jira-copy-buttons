import PersistentMultipleTextInputs from "../domain/multiple-text-inputs/PersistentMultipleTextInputs.tsx";
import UrlTextInput from "../domain/text-input/UrlTextInput.tsx";
import {
  getHostnames,
  saveHostnames,
} from "../../../shared/repository/chromeStorageSync";
import type { ParentProps } from "solid-js";

export const WhitelistedUrlsInput = (props: ParentProps) => (
  <PersistentMultipleTextInputs
    textInput={UrlTextInput}
    loadFromPersistence={getHostnames}
    saveToPersistence={saveHostnames}
  >
    <div class="space-y-3">
      <h2 class="text-sm font-semibold text-neutral-200">Whitelisted URLs</h2>
      <p>
        Add in the hostnames of your Jira instances where you want the branch
        creation buttons to appear.
      </p>
      {props.children}
    </div>
  </PersistentMultipleTextInputs>
);
