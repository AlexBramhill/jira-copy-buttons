import {
  containerProcessorStrategiesRepository,
  ticketSelectorStrategiesRepository,
} from "../../shared/repository/chromeStorageSync";
import { DEFAULT_CONTAINER_PROCESSOR_STRATEGY_STORAGE_DATA_DEFAULT } from "../../shared/repository/containerProcessorStrategyStorageData";
import MainContainer from "../components/common/MainContainer";
import MainFooter from "../components/common/MainFooter";
import MainNavbar from "../components/common/MainNavbar";
import StrategyToggles from "../components/feature/devtools/StrategyToggles";
import { DEFAULT_TICKET_SELECTOR_STRATEGY_STORAGE_DATA } from "../../shared/repository/ticketSelectorStrategyStorageData";

export const DevTools = () => {
  return (
    <MainContainer>
      <MainNavbar title="Dev tools" showBackButton={true} />
      <StrategyToggles
        title="Container processor strategies"
        loadFromPersistence={containerProcessorStrategiesRepository.get}
        saveToPersistence={containerProcessorStrategiesRepository.save}
        createDefaultValue={() =>
          DEFAULT_CONTAINER_PROCESSOR_STRATEGY_STORAGE_DATA_DEFAULT
        }
      />
      <StrategyToggles
        title="Ticket selector strategies"
        loadFromPersistence={ticketSelectorStrategiesRepository.get}
        saveToPersistence={ticketSelectorStrategiesRepository.save}
        createDefaultValue={() => DEFAULT_TICKET_SELECTOR_STRATEGY_STORAGE_DATA}
      />
      <MainFooter />
    </MainContainer>
  );
};

export default DevTools;
