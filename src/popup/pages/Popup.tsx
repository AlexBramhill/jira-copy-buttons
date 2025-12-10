import { MainContainer } from "../components/common/MainContainer.tsx";
import { MainNavbar } from "../components/common/MainNavbar.tsx";
import { MainFooter } from "../components/common/MainFooter.tsx";
import ContainerHeading from "../components/common/ContainerHeading.tsx";
import WhitelistManager from "../components/feature/whitelist-management/WhitelistManager.tsx";
import BranchCopyButtonStrategyEditor from "../components/feature/strategy-editors/branch-copy-button-strategy-editor/BranchCopyButtonStrategyEditor.tsx";
import TicketSelectorStrategyEditor from "../components/feature/strategy-editors/ticket-selector-strategy-editor/TicketSelectorStrategyEditor.tsx";

export const Popup = () => {
  return (
    <MainContainer>
      <MainNavbar title="Jira Copy Buttons" />
      <p class="mb-4">
        Adds helpful buttons for copying Jira issues in any format.
      </p>
      <div>
        <ContainerHeading level={2}>Whitelisted sites:</ContainerHeading>
        <WhitelistManager />
      </div>
      <div>
        <ContainerHeading level={2}>Buttons:</ContainerHeading>
        <BranchCopyButtonStrategyEditor />
      </div>
      <div>
        <ContainerHeading level={2}>
          Ticket Selector Strategies:
        </ContainerHeading>
        <TicketSelectorStrategyEditor />
      </div>
      <MainFooter />
    </MainContainer>
  );
};

export default Popup;
