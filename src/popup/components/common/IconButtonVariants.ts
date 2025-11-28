export const IconButtonVariants = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  DELETE: "delete",
} as const;

export type IconButtonVariant =
  (typeof IconButtonVariants)[keyof typeof IconButtonVariants];
