import { A } from "@solidjs/router";
import { ROUTES } from "../../constants/routes";

export const MainFooter = () => {
  return (
    <div class="flex items-center justify-between mt-6 pt-1">
      <A
        href="https://github.com/AlexBramhill/jira-branch-creator-button"
        target="_blank"
        rel="noopener noreferrer"
        class="text-xs text-neutral-400 hover:text-neutral-100 transition"
      >
        GitHub
      </A>
      <A
        href={ROUTES.DEVTOOLS}
        class="text-xs text-neutral-400 hover:text-neutral-100 transition"
      >
        Devtools
      </A>
    </div>
  );
};

export default MainFooter;
