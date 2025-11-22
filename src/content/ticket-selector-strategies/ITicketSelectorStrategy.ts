export interface ITicketSelectorStrategy {
  selectContainers: () => NodeListOf<HTMLElement>;
  selectPrefixElement: (container: HTMLElement) => HTMLElement | null;
  selectTitleElement: (container: HTMLElement) => HTMLElement | null;
}
