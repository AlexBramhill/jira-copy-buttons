// TODO: Fix these imports to not rely on content (most likely through reworking strategy structure)
import { createCopyButton } from "../../content/components/button/copyButton";
import { createElementName } from "../../content/helpers/elementHelper";
import { logger } from "../logger";
import type { BranchCopyButtonStrategyEditorHeader } from "../strategies/branch-copy-button-strategies/BranchCopyButtonStrategy";
import { toBranchCopyButtonText } from "../transformers/branchCopyButtonTransformer";

export const upsertCopyButtonOnDom = (
  branchCopyButtonStrategy: BranchCopyButtonStrategyEditorHeader,
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
