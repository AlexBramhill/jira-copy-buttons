import {
  toCamelCase,
  toKebabCase,
  toPascalCase,
  toSnakeCase,
} from "./stringTransformer";
import { Case } from "./Case";

export const transformCase = (text: string, caseType: Case): string => {
  switch (caseType) {
    case Case.Upper:
      return text.toUpperCase();
    case Case.Lower:
      return text.toLowerCase();
    case Case.Snake:
      return toSnakeCase(text);
    case Case.Kebab:
      return toKebabCase(text);
    case Case.Pascal:
      return toPascalCase(text);
    case Case.Camel:
      return toCamelCase(text);
    case Case.NoChange:
      return text;
    default:
      throw new Error(`Unsupported case type: ${caseType}`);
  }
};
