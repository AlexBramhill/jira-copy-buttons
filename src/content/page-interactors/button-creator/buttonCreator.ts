import { addCssClassToStylesheet } from "../cssInjector";
import { addClassToElement } from "../elementClassModifier";
import { BUTTON_CLASS } from "./buttonCreatorCss";

export const createButton = (
  buttonId: string,
  buttonText: string,
  onClick: (event: MouseEvent) => void
): HTMLButtonElement => {
  addCssClassToStylesheet(BUTTON_CLASS.className, BUTTON_CLASS.styles);

  const button = document.createElement("button");
  button.id = buttonId;
  button.textContent = buttonText;
  addClassToElement(button, BUTTON_CLASS.className);
  button.onclick = (event) => {
    event.stopPropagation();
    event.preventDefault();
    onClick(event);
  };
  return button;
};

export const createCopyButton = (
  buttonId: string,
  buttonText: string,
  copyText: string
): HTMLButtonElement => {
  return createButton(buttonId, buttonText, () => {
    navigator.clipboard.writeText(copyText);
  });
};
