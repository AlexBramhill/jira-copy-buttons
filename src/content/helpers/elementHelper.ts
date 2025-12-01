export const ELEMENT_PREFIX = `jcb-element`;

export type ElementName = `${typeof ELEMENT_PREFIX}-${string}`;

export const createElementName = (className: string): ElementName => {
  return `${ELEMENT_PREFIX}-${className}`;
};
