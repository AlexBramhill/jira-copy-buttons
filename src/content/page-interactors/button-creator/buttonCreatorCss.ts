import { createCssClassName } from "../../helpers/cssHelper";
import type { CssClassConfig } from "../cssInjector";

export const BUTTON_CLASS = {
  className: createCssClassName("copy-button"),
  styles: "margin-left: 8px; height: 32px;",
} as CssClassConfig;
