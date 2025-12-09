export const SelectorType = {
  ByTestId: "test-id",
  ByVcAttribute: "vc-attribute",
  ByCssSelector: "css-selector",
} as const;

export type SelectorType = (typeof SelectorType)[keyof typeof SelectorType];

export type ElementSelector = {
  type: SelectorType;
  value: string;
};
