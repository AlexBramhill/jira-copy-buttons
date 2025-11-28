import { useNavigate } from "@solidjs/router";
import { ContainerHeading } from "./ContainerHeading";
import { IconButton } from "./IconButton";
import { ROUTES } from "../../constants/routes";

export interface MainNavbarProps {
  title: string;
  showBackButton?: boolean;
}
export const MainNavbar = (props: MainNavbarProps) => {
  const navigate = useNavigate();

  return (
    <div class="flex items-center gap-2 mb-4">
      {props.showBackButton && (
        <IconButton
          onClick={() => navigate(ROUTES.HOME)}
          ariaLabel="Back to home"
        >
          ◀
        </IconButton>
      )}
      <ContainerHeading level={1}>{props.title}</ContainerHeading>
    </div>
  );
};

export default MainNavbar;
