import {
  EXAMPLE_DESCRIPTION,
  EXAMPLE_PREFIX,
} from "../../popup/constants/exampleTicket";
import type { BranchCopyButtonConfig } from "../repository/BranchCopyButtonConfig";
import {
  TICKET_DESCRIPTION_WILDCARD,
  TICKET_PREFIX_WILDCARD,
} from "../ticketWildcards";
import { toCase } from "./caseTransformer";

export const toPrefixButtonText = (
  prefix: string,
  config: BranchCopyButtonConfig
) => {
  return toCase(prefix, config.prefixCase);
};

export const toDescriptionButtonText = (
  description: string,
  config: BranchCopyButtonConfig
) => {
  return toCase(description, config.descriptionCase);
};

const toJoinedButtonText = (
  transformedPrefix: string,
  transformedDescription: string,
  config: BranchCopyButtonConfig
) => {
  return config.formatPattern
    .replace(new RegExp(TICKET_PREFIX_WILDCARD, "g"), transformedPrefix)
    .replace(
      new RegExp(TICKET_DESCRIPTION_WILDCARD, "g"),
      transformedDescription
    );
};

export const toBranchCopyButtonText = (
  prefix: string,
  description: string,
  config: BranchCopyButtonConfig
) => {
  const transformedPrefix = toPrefixButtonText(prefix, config);
  const transformedDescription = toDescriptionButtonText(description, config);

  return toJoinedButtonText(transformedPrefix, transformedDescription, config);
};

export const getExampleBranchCopyButtonText = (
  config: BranchCopyButtonConfig
) => toBranchCopyButtonText(EXAMPLE_PREFIX, EXAMPLE_DESCRIPTION, config);
