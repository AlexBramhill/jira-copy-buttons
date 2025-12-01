import { createCssClassName } from "../helpers/cssHelper";
import { addCssClassToStylesheet } from "../page-interactors/cssInjector";
import type { CreateCss } from "./css";

const PREFIX_STYLES = "border: 2px solid red !important;";
const TITLE_STYLES = "border: 2px solid blue !important;";
const BUTTON_STYLES = "border: 2px solid green !important;";

export const createDebugPrefixCss: CreateCss = () => {
  const className = createCssClassName("debug-prefix");
  addCssClassToStylesheet(className, PREFIX_STYLES);
  return { className, styles: PREFIX_STYLES };
};

export const createDebugTitleCss: CreateCss = () => {
  const className = createCssClassName("debug-title");
  addCssClassToStylesheet(className, TITLE_STYLES);
  return { className, styles: TITLE_STYLES };
};

export const createDebugButtonCss: CreateCss = () => {
  const className = createCssClassName("debug-button");
  addCssClassToStylesheet(className, BUTTON_STYLES);
  return { className, styles: BUTTON_STYLES };
};
