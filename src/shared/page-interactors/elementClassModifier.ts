import type { CssClassName } from "./cssInjector";

export const addClassToElement = (
  element: HTMLElement,
  className: CssClassName
): void => {
  element.classList.add(className);
};
