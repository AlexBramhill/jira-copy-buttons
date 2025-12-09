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
    case SelectorType.ByTestId:
      return container.querySelector(`[data-testid="${selector.value}"]`);
    case SelectorType.ByVcAttribute:
      return container.querySelector(`[data-vc="${selector.value}"]`);
    case SelectorType.ByCssSelector:
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
    case SelectorType.ByTestId:
      return Array.from(
        container.querySelectorAll(`[data-testid="${selector.value}"]`)
      );
    case SelectorType.ByVcAttribute:
      return Array.from(
        container.querySelectorAll(`[data-vc="${selector.value}"]`)
      );
    case SelectorType.ByCssSelector:
      return Array.from(container.querySelectorAll(selector.value));
    default:
      console.warn(`Unknown selector type: ${selector.type}`);
      return [];
  }
};
