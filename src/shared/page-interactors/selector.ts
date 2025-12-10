import {
  SelectorType,
  type ElementSelector,
} from "../strategies/ticket-selector-strategies/ElementSelector";

// TOOD: Make nicer
export const select = (
  selector: ElementSelector,
  container: HTMLElement = document.body
): HTMLElement | null => {
  switch (selector.type) {
    case SelectorType.TestId:
      return container.querySelector(`[data-testid="${selector.value}"]`);
    case SelectorType.VcAttribute:
      return container.querySelector(`[data-vc="${selector.value}"]`);
    case SelectorType.CssSelector:
      return container.querySelector(selector.value);
    default:
      console.warn(`Unknown selector type: ${selector.type}`);
      return null;
  }
};

export const selectAll = (
  selector: ElementSelector,
  container: HTMLElement = document.body
): HTMLElement[] => {
  switch (selector.type) {
    case SelectorType.TestId:
      return Array.from(
        container.querySelectorAll(`[data-testid="${selector.value}"]`)
      );
    case SelectorType.VcAttribute:
      return Array.from(
        container.querySelectorAll(`[data-vc="${selector.value}"]`)
      );
    case SelectorType.CssSelector:
      return Array.from(container.querySelectorAll(selector.value));
    default:
      console.warn(`Unknown selector type: ${selector.type}`);
      return [];
  }
};
