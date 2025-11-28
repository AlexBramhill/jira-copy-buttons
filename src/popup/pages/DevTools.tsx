import MainContainer from "../components/common/MainContainer";
import MainFooter from "../components/common/MainFooter";
import MainNavbar from "../components/common/MainNavbar";

export const DevTools = () => {
  return (
    <MainContainer>
      <MainNavbar title="Dev tools" showBackButton={true} />
      <MainFooter />
    </MainContainer>
  );
};

export default DevTools;
