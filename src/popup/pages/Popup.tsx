import { A } from "@solidjs/router";
import {
  getHostnames,
  saveHostnames,
} from "../../shared/repository/chromeStorageSync";
import PersistentMultipleTextInputs from "../components/domain/multiple-text-inputs/PersistentMultipleTextInputs.tsx";
import { MainContainer } from "../components/layout/MainContainer.tsx";
import { MainNavbar } from "../components/layout/MainNavbar.tsx";
import UrlTextInput from "../components/domain/text-input/UrlTextInput.tsx";
import { ROUTE_ADD_BUTTON } from "../constants/routes.ts";

export const Popup = () => {
  return (
    <MainContainer>
      <MainNavbar title="Jira Branch Creator" />
      <p class="mb-4">
        Adds helpful buttons for Jira issues to create branches easily.
      </p>
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

      <A
        href={ROUTE_ADD_BUTTON}
        class="mt-4 block w-full rounded-md bg-blue-600 px-4 py-2 text-center text-sm font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-neutral-900"
      >
        Add Custom Branch Button
      </A>
    </MainContainer>
  );
};

export default Popup;
