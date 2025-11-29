import { logger } from "../../shared/logger";
import type { BranchCopyButtonConfig } from "../../shared/repository/BranchCopyButtonConfig";
import { toBranchCopyButtonText } from "../../shared/transformers/branchCopyButtonTransformer";
import { createCopyButton } from "./buttonCreator";
import { createElementName } from "./elementNamer";

export const upsertButtonOnDom = (
  branchCopyButtonConfig: BranchCopyButtonConfig,
  prefixText: string,
  titleText: string,
  domElementToAppend: HTMLElement | null
) => {
  const buttonId = createElementName(
    `copy-button-${branchCopyButtonConfig.buttonName}`
  );

  if (document.getElementById(buttonId)) {
    logger.debug({ buttonId }, "Button already exists, skipping injection");
    return;
  }

  const copyText = toBranchCopyButtonText(
    prefixText,
    titleText,
    branchCopyButtonConfig
  );

  const button = createCopyButton(
    buttonId,
    branchCopyButtonConfig.buttonName,
    copyText
  );

  if (domElementToAppend) {
    domElementToAppend.appendChild(button);
  }
};
