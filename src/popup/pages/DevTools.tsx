import {
  getContainerProcessorStrategies,
  getTicketSelectorStrategies,
  saveContainerProcessorStrategies,
  saveTicketSelectorStrategies,
} from "../../shared/repository/chromeStorageSync";
import { containerProcessorStrategyStorageDataDefault } from "../../shared/repository/containerProcessorStrategyStoageData";
import MainContainer from "../components/common/MainContainer";
import MainFooter from "../components/common/MainFooter";
import MainNavbar from "../components/common/MainNavbar";
import StrategyToggles from "../components/feature/devtools/StrategyToggles";
import { TicketSelectorStrategyStorageDataDefault } from "../../shared/repository/ticketSelectorStrategyStorageData";

export const DevTools = () => {
  return (
    <MainContainer>
      <MainNavbar title="Dev tools" showBackButton={true} />
      <StrategyToggles
        title="Container processor strategies"
        loadFromPersistence={getContainerProcessorStrategies}
        saveToPersistence={saveContainerProcessorStrategies}
        createDefaultValue={() => containerProcessorStrategyStorageDataDefault}
      />
      <StrategyToggles
        title="Ticket selector strategies"
        loadFromPersistence={getTicketSelectorStrategies}
        saveToPersistence={saveTicketSelectorStrategies}
        createDefaultValue={() => TicketSelectorStrategyStorageDataDefault}
      />
      <MainFooter />
    </MainContainer>
  );
};

export default DevTools;
