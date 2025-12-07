import {
  EXAMPLE_DESCRIPTION,
  EXAMPLE_PREFIX,
} from "../../popup/constants/exampleTicket";
import type { BranchCopyButtonStrategy } from "../strategies/branch-copy-button-strategies/BranchCopyButtonStrategy";
import {
  TICKET_DESCRIPTION_WILDCARD,
  TICKET_PREFIX_WILDCARD,
} from "./ticketWildcards";
import { toCase } from "./caseTransformer";

export const toPrefixButtonText = (
  prefix: string,
  config: BranchCopyButtonStrategy
) => {
  return toCase(prefix, config.prefixCase);
};

export const toDescriptionButtonText = (
  description: string,
  config: BranchCopyButtonStrategy
) => {
  return toCase(description, config.descriptionCase);
};

const toJoinedButtonText = (
  transformedPrefix: string,
  transformedDescription: string,
  config: BranchCopyButtonStrategy
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
  config: BranchCopyButtonStrategy
) => {
  const transformedPrefix = toPrefixButtonText(prefix, config);
  const transformedDescription = toDescriptionButtonText(description, config);

  return toJoinedButtonText(transformedPrefix, transformedDescription, config);
};

export const getExampleBranchCopyButtonText = (
  config: BranchCopyButtonStrategy
) => toBranchCopyButtonText(EXAMPLE_PREFIX, EXAMPLE_DESCRIPTION, config);
