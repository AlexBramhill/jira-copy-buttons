export const CSS_CLASS_PREFIX = "jbc-extension-" as const;

export type CssClassName = `${typeof CSS_CLASS_PREFIX}${string}`;

export const createCssClassName = (className: string): CssClassName =>
  `${CSS_CLASS_PREFIX}${className}`;
