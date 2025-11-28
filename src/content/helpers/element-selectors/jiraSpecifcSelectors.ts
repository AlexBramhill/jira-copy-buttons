import { selectElementByTestId } from "./elementSelector";

// Selects the div that contains the two buttons under the title on both ticket pages and modals
// Does so in a hacky way due to no easily accessible test ids
export const selectButtonDivUnderTitle = (container: HTMLElement) => {
  const mainWrapper = selectElementByTestId(
    "issue-view-product-templates-default.ui.foundation-content.foundation-content-wrapper",
    container
  );
  const divWithButtonsIn =
    mainWrapper?.nextElementSibling as HTMLElement | null;
  const secondChildofDivWithButtons = divWithButtonsIn
    ?.children[1] as HTMLElement | null;

  return secondChildofDivWithButtons;
};
