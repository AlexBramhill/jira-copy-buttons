export const SelectorType = {
  TestId: "test-id",
  VcAttribute: "vc-attribute",
  CssSelector: "css-selector",
} as const;

export type SelectorType = (typeof SelectorType)[keyof typeof SelectorType];

export type ElementSelector = {
  type: SelectorType;
  value: string;
};
