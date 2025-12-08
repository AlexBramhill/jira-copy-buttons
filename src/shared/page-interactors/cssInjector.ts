const STYLE_ID = "jbc-style";
const ROOT_CLASS = "jbc-active";

export const CSS_CLASS_PREFIX = "jbc-css-" as const;

export type CssClassName = `${typeof CSS_CLASS_PREFIX}${string}`;

export interface CssClassConfig {
  className: CssClassName;
  styles: string;
}

export const addCssRootClass = (): void => {
  document.documentElement.classList.add(ROOT_CLASS);
};

const getStyleElement = (): HTMLStyleElement => {
  let styleElement = document.getElementById(STYLE_ID) as HTMLStyleElement;

  if (!styleElement) {
    styleElement = document.createElement("style");
    styleElement.id = STYLE_ID;
    document.head.appendChild(styleElement);
  }

  return styleElement;
};

export const addCssClassToStylesheet = (
  className: CssClassName,
  styles: string
): void => {
  const styleElement = getStyleElement();
  const sheet = styleElement.sheet!;

  const selector = `.${ROOT_CLASS} .${className}`;
  const rule = `${selector} { ${styles} }`;

  for (const cssRule of sheet.cssRules) {
    const isRuleAdded =
      cssRule instanceof CSSStyleRule && cssRule.selectorText === selector;

    if (isRuleAdded) {
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
