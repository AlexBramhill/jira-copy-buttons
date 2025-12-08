import { CSS_CLASS_PREFIX, type CssClassName } from "../../shared/page-interactors/cssInjector";

export const createCssClassName = (className: string): CssClassName =>
  `${CSS_CLASS_PREFIX}${className}`;
