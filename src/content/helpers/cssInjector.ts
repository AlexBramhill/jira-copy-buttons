import type { CssClassName } from "./cssHelper";

const STYLE_ID = "jbc-style";
const ROOT_CLASS = "jbc-active";

export interface CssClassConfig {
  className: CssClassName;
  styles: string;
}

export const activateExtensionStyles = (): void => {
  document.documentElement.classList.add(ROOT_CLASS);
};

const getStyleElement = (): HTMLStyleElement => {
  let styleEl = document.getElementById(STYLE_ID) as HTMLStyleElement;

  if (!styleEl) {
    styleEl = document.createElement("style");
    styleEl.id = STYLE_ID;
    document.head.appendChild(styleEl);
  }

  return styleEl;
};

export const addCssClassToStylesheet = (
  className: CssClassName,
  styles: string
): void => {
  const styleEl = getStyleElement();
  const sheet = styleEl.sheet!;

  const selector = `.${ROOT_CLASS} .${className}`;
  const rule = `${selector} { ${styles} }`;

  for (const cssRule of sheet.cssRules) {
    if (cssRule instanceof CSSStyleRule && cssRule.selectorText === selector) {
      return;
    }
  }

  sheet.insertRule(rule, sheet.cssRules.length);
};

export const setCssVariable = (name: string, value: string): void => {
  document.documentElement.style.setProperty(name, value);
};

export const removeCssVariable = (name: string): void => {
  document.documentElement.style.removeProperty(name);
};
