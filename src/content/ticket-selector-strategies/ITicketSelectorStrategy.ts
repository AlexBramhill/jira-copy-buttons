export interface ITicketSelectorStrategy {
  selectContainers: () => HTMLElement[];
  selectPrefixElement: (container: HTMLElement) => HTMLElement | null;
  selectTitleElement: (container: HTMLElement) => HTMLElement | null;
}
