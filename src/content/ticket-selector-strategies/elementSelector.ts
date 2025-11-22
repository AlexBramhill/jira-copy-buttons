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
