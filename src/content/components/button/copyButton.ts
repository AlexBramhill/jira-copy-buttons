import type { ElementName } from "../../helpers/elementHelper";
import { createButton } from "./button";

export const createCopyButton = (
  buttonId: ElementName,
  buttonText: string,
  copyText: string
): HTMLButtonElement => {
  return createButton(buttonId, buttonText, () => {
    navigator.clipboard.writeText(copyText);
  });
};
