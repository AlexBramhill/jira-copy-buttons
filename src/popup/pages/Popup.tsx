import { A } from "@solidjs/router";
import { MainContainer } from "../components/layout/MainContainer.tsx";
import { MainNavbar } from "../components/layout/MainNavbar.tsx";
import { ROUTE_ADD_BUTTON } from "../constants/routes.ts";
import { WhitelistedUrlsInput } from "../components/domain/WhitelistedUrlsInput";

export const Popup = () => {
  return (
    <MainContainer>
      <MainNavbar title="Jira Branch Creator" />
      <p class="mb-4">
        Adds helpful buttons for Jira issues to create branches easily.
      </p>
      <WhitelistedUrlsInput />

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
