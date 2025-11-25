import { createSignal, createMemo } from "solid-js";
import { MainContainer } from "../components/layout/MainContainer";
import { MainNavbar } from "../components/layout/MainNavbar";
import { ButtonNameField } from "../components/domain/ButtonNameField";
import { BranchNameFormatField } from "../components/domain/BranchNameFormatField";
import { BranchPreviewCard } from "../components/domain/BranchPreviewCard";
import { Case } from "../../shared/transformers/Case";
import { toCase } from "../../shared/transformers/caseTransformer";
import CaseTransformField from "../components/domain/CaseTransformField";
import {
  EXAMPLE_PREFIX,
  EXAMPLE_DESCRIPTION,
} from "../constants/exampleTicket";
import {
  TICKET_DESCRIPTION_WILDCARD,
  TICKET_PREFIX_WILDCARD,
} from "../../shared/ticketWildcards";

export const AddBranchCopyButton = () => {
  const [buttonName, setButtonName] = createSignal("Copy Branch Name");
  const [formatPattern, setFormatPattern] = createSignal(
    `${TICKET_PREFIX_WILDCARD}: ${TICKET_DESCRIPTION_WILDCARD}`
  );
  const [prefixCase, setPrefixCase] = createSignal<Case>(Case.NoChange);
  const [descriptionCase, setDescriptionCase] = createSignal<Case>(Case.Kebab);

  const previewBranchName = createMemo(() => {});

  return (
    <MainContainer>
      <MainNavbar title="Add Branch Copy Button" showBackButton />
    </MainContainer>
  );
};

export default AddBranchCopyButton;
