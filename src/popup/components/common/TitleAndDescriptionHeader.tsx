import ContainerHeading from "./ContainerHeading";

type StrategyDefaultHeaderProps = {
  title: string;
  description?: string;
};

export const TitleAndDescriptionHeader = (
  props: StrategyDefaultHeaderProps
) => (
  <span class="flex flex-col justify-center">
    <ContainerHeading level={3} class="text-sm">
      {props.title}
    </ContainerHeading>

    {props.description && (
      <p class="text-xs text-neutral-400">{props.description}</p>
    )}
  </span>
);

export default TitleAndDescriptionHeader;
