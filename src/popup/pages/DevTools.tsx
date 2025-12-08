import MainContainer from "../components/common/MainContainer";
import MainFooter from "../components/common/MainFooter";
import MainNavbar from "../components/common/MainNavbar";
import StrategyToggles from "../components/feature/devtools/StrategyToggles";
import { repository } from "../../shared/repository/chromeStorageSync";

export const DevTools = () => {
  return (
    <MainContainer>
      <MainNavbar title="Dev tools" showBackButton={true} />
      // TODO: update to take repository
      <StrategyToggles
        title="Container processor strategies"
        loadFromPersistence={repository.containerProcessorStrategies.get}
        saveToPersistence={repository.containerProcessorStrategies.save}
        createDefaultValue={() =>
          repository.containerProcessorStrategies.createDefaultValue()
        }
      />
      <StrategyToggles
        title="Ticket selector strategies"
        loadFromPersistence={repository.ticketSelectorStrategies.get}
        saveToPersistence={repository.ticketSelectorStrategies.save}
        createDefaultValue={() =>
          repository.ticketSelectorStrategies.createDefaultValue()
        }
      />
      <MainFooter />
    </MainContainer>
  );
};

export default DevTools;
