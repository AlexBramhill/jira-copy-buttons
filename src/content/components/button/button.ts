import type { ElementName } from "../../helpers/elementHelper";
import { createButtonCss } from "../../css/buttonCss";
import { addClassToElement } from "../../../shared/page-interactors/elementClassModifier";

export const createButton = (
  buttonId: ElementName,
  buttonText: string,
  onClick: (event: MouseEvent) => void
): HTMLButtonElement => {
  const buttonCss = createButtonCss();
  const button = document.createElement("button");

  button.id = buttonId;
  button.textContent = buttonText;

  addClassToElement(button, buttonCss.className);

  button.onclick = (event) => {
    event.stopPropagation();
    event.preventDefault();
    onClick(event);
  };

  return button;
};
