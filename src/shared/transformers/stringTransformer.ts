const WORD_SEPARATOR_REGEX = /[\s_-]+/;
const WHITESPACE_REGEX = /\s+/g;
const UPPERCASE_LETTER_REGEX = /[A-Z]/g;
const LEADING_UNDERSCORE_REGEX = /^_/;
const LEADING_DASH_REGEX = /^-/;

interface StringTransformer {
  (text: string): string;
}

export const toSnakeCase: StringTransformer = (text) =>
  text
    .replace(WHITESPACE_REGEX, "_")
    .replace(UPPERCASE_LETTER_REGEX, (letter) => `_${letter.toLowerCase()}`)
    .replace(LEADING_UNDERSCORE_REGEX, "")
    .toLowerCase();

export const toKebabCase: StringTransformer = (text) =>
  text
    .replace(WHITESPACE_REGEX, "-")
    .replace(UPPERCASE_LETTER_REGEX, (letter) => `-${letter.toLowerCase()}`)
    .replace(LEADING_DASH_REGEX, "")
    .toLowerCase();

export const toPascalCase: StringTransformer = (text) =>
  text
    .split(WORD_SEPARATOR_REGEX)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("");

export const toCamelCase: StringTransformer = (text) => {
  const pascal = toPascalCase(text);
  return pascal.charAt(0).toLowerCase() + pascal.slice(1);
};
