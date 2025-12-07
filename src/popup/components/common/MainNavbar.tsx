import { useNavigate } from "@solidjs/router";
import { ContainerHeading } from "./ContainerHeading";
import { ROUTES } from "../../constants/routes";
import { BackButton } from "./buttons/BackButton";

export interface MainNavbarProps {
  title: string;
  showBackButton?: boolean;
}
export const MainNavbar = (props: MainNavbarProps) => {
  const navigate = useNavigate();

  return (
    <div class="flex items-center gap-2 mb-4">
      {props.showBackButton && (
        <BackButton onClick={() => navigate(ROUTES.HOME)} />
      )}
      <ContainerHeading level={1}>{props.title}</ContainerHeading>
    </div>
  );
};

export default MainNavbar;
