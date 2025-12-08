import MainContainer from "../components/common/MainContainer";
import MainFooter from "../components/common/MainFooter";
import MainNavbar from "../components/common/MainNavbar";
import StrategyToggles from "../components/feature/devtools/StrategyToggles";
import { repository } from "../../shared/repository/chromeStorageSync";

export const DevTools = () => {
  return (
    <MainContainer>
      <MainNavbar title="Dev tools" showBackButton={true} />
      <StrategyToggles
        title="Container processor strategies"
        repository={repository.containerProcessorStrategies}
      />
      <StrategyToggles
        title="Ticket selector strategies"
        repository={repository.ticketSelectorStrategies}
      />
      <MainFooter />
    </MainContainer>
  );
};

export default DevTools;
