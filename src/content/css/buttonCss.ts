import { addCssClassToStylesheet } from "../../shared/page-interactors/cssInjector";
import { createCssClassName } from "../helpers/cssHelper";
import type { CreateCss } from "./css";

const BUTTON_CLASS_STYLES = "margin-left: 8px; height: 32px;";

export const createButtonCss: CreateCss = () => {
  const buttonCssName = createCssClassName("button");

  addCssClassToStylesheet(buttonCssName, BUTTON_CLASS_STYLES);
  return {
    className: buttonCssName,
    styles: BUTTON_CLASS_STYLES,
  };
};
