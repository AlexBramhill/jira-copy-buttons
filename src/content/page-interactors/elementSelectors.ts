import { ELEMENT_PREFIX } from "./elementNamer";

export const selectElementByTestId = (
  testIdName: string,
  container: HTMLElement = document.body
): HTMLElement | null => {
  return container.querySelector(`[data-testid="${testIdName}"]`);
};

export const selectElementsByTestId = (
  testIdName: string,
  container: HTMLElement = document.body
): HTMLElement[] => {
  return Array.from(
    container.querySelectorAll(`[data-testid="${testIdName}"]`)
  );
};

export const selectElementsByVc = (
  vcName: string,
  container: HTMLElement = document.body
): HTMLElement[] => {
  return Array.from(container.querySelectorAll(`[data-vc="${vcName}"]`));
};

export const getTextFromElementExcludingInjectedElements = (
  element: HTMLElement | null
) => {
  if (!element) return "";

  return Array.from(element.childNodes)
    .filter((node) => !containsInjectedTextElement(node))
    .map((node) => node.textContent)
    .join("")
    .trim();
};

const containsInjectedTextElement = (node: ChildNode): boolean => {
  if (node.nodeType !== Node.TEXT_NODE || !(node instanceof HTMLElement))
    return false;

  return node.id?.startsWith(ELEMENT_PREFIX);
};
