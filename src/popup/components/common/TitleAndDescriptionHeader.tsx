import ContainerHeading from "./ContainerHeading";

type StrategyDefaultHeaderProps = {
  title: string;
  description?: string;
};

export const TitleAndDescriptionHeader = (props: StrategyDefaultHeaderProps) => (
  <div class="flex-1">
    <ContainerHeading level={3} class="text-sm">
      {props.title}
    </ContainerHeading>
    {props.description && (
      <p class="text-xs text-neutral-400 mt-1">{props.description}</p>
    )}
  </div>
);

export default TitleAndDescriptionHeader;
