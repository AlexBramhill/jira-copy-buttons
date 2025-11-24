export const Case = {
  NoChange: "no-change",
  Upper: "upper",
  Lower: "lower",
  Snake: "snake",
  Kebab: "kebab",
  Pascal: "pascal",
  Camel: "camel",
} as const;

export type Case = (typeof Case)[keyof typeof Case];
