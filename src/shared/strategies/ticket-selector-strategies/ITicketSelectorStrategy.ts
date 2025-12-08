export type TicketSelectorStrategy = {
  selectContainers: () => HTMLElement[];
  selectPrefixElement: (container: HTMLElement) => HTMLElement | null;
  selectTitleElement: (container: HTMLElement) => HTMLElement | null;
  selectElementToAddButtonTo: (container: HTMLElement) => HTMLElement | null;
};
