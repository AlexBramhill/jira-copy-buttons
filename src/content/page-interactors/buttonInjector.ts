import { logger } from "../../shared/logger";
import type { BranchCopyButtonStrategy } from "../../shared/strategies/branch-copy-button-strategies/BranchCopyButtonStrategy";
import { toBranchCopyButtonText } from "../../shared/transformers/branchCopyButtonTransformer";
import { createCopyButton } from "../components/button/copyButton";
import { createElementName } from "../helpers/elementHelper";

export const upsertCopyButtonOnDom = (
  branchCopyButtonStrategy: BranchCopyButtonStrategy,
  prefixText: string,
  titleText: string,
  domElementToAppend: HTMLElement | null
) => {
  const buttonId = createElementName(
    `copy-button-${branchCopyButtonStrategy.buttonName}`
  );

  if (document.getElementById(buttonId)) {
    logger.debug({ buttonId }, "Button already exists, skipping injection");
    return;
  }

  const copyText = toBranchCopyButtonText(
    prefixText,
    titleText,
    branchCopyButtonStrategy
  );

  const button = createCopyButton(
    buttonId,
    branchCopyButtonStrategy.buttonName,
    copyText
  );

  if (domElementToAppend) {
    domElementToAppend.appendChild(button);
  }
};
