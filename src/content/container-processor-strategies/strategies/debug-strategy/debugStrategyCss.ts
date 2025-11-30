import { createCssClassName } from "../../../helpers/cssHelper";
import {
  addCssClassToStylesheet,
  type CssClassConfig,
} from "../../../page-interactors/cssInjector";

export const DEBUG_CSS = {
  PREFIX: {
    className: createCssClassName("debug-prefix"),
    styles: "border: 2px solid red !important;",
  } as CssClassConfig,
  TITLE: {
    className: createCssClassName("debug-title"),
    styles: "border: 2px solid blue !important;",
  } as CssClassConfig,
  BUTTON: {
    className: createCssClassName("debug-button"),
    styles: "border: 2px solid green !important;",
  } as CssClassConfig,
};

export const addDebugCssClassesToStylesheet = () => {
  for (const cssClass of Object.values(DEBUG_CSS)) {
    addCssClassToStylesheet(cssClass.className, cssClass.styles);
  }
};
