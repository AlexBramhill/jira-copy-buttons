import { MainContainer } from "../components/common/MainContainer.tsx";
import { MainNavbar } from "../components/common/MainNavbar.tsx";
import WhitelistManager from "../components/feature/whitelist-management/WhitelistManager.tsx";
import BranchCopyButtonsSummary from "../components/feature/branch-formatting/BranchCopyButtonsSummary.tsx";

export const Popup = () => {
  return (
    <MainContainer>
      <MainNavbar title="Jira Branch Creator" />
      <p class="mb-4">
        Adds helpful buttons for Jira issues to create branches easily.
      </p>
      <WhitelistManager />
      <BranchCopyButtonsSummary />
    </MainContainer>
  );
};

export default Popup;
