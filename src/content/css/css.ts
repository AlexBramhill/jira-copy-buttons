import type { CssClassName } from "../../shared/page-interactors/cssInjector";

export type CreateCss = () => CreateCssResponse;

interface CreateCssResponse {
  className: CssClassName;
  styles: string;
}
