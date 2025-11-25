import { createSignal, createMemo } from "solid-js";
import { MainContainer } from "../components/layout/MainContainer";
import { MainNavbar } from "../components/layout/MainNavbar";
import { ButtonNameField } from "../components/domain/ButtonNameField";
import { BranchNameFormatField } from "../components/domain/BranchNameFormatField";
import { BranchPreviewCard } from "../components/domain/BranchPreviewCard";
import { Case } from "../../shared/transformers/Case";
import { transformCase } from "../../shared/transformers/caseTransformer";
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

  const previewBranchName = createMemo(() => {
    const prefix = transformCase(EXAMPLE_PREFIX, prefixCase());
    const description = transformCase(EXAMPLE_DESCRIPTION, descriptionCase());

    return formatPattern()
      .replace(new RegExp(TICKET_PREFIX_WILDCARD, "g"), prefix)
      .replace(new RegExp(TICKET_DESCRIPTION_WILDCARD, "g"), description);
  });

  return (
    <MainContainer>
      <MainNavbar title="Add Branch Copy Button" showBackButton />
      <div class="space-y-4">
        <ButtonNameField value={buttonName()} onInput={setButtonName} />
        <BranchNameFormatField
          value={formatPattern()}
          onInput={setFormatPattern}
        />
        <CaseTransformField
          id="prefix-case"
          label="Prefix Case Transform"
          value={prefixCase()}
          onChange={setPrefixCase}
        />
        <CaseTransformField
          id="description-case"
          label="Description Case Transform"
          value={descriptionCase()}
          onChange={setDescriptionCase}
        />
        <BranchPreviewCard
          prefix={transformCase(EXAMPLE_PREFIX, prefixCase())}
          description={transformCase(EXAMPLE_DESCRIPTION, descriptionCase())}
          branchName={previewBranchName()}
        />
      </div>
    </MainContainer>
  );
};

export default AddBranchCopyButton;
