import type { ParentProps } from "solid-js";

interface PreviewCardProps extends ParentProps {
  title: string;
}

export const PreviewCard = (props: PreviewCardProps) => {
  return (
    <div class="rounded-md border border-neutral-700 bg-neutral-800/70 p-4 space-y-2 shadow-sm">
      <div class="text-sm font-semibold text-neutral-200 mb-1">
        {props.title}
      </div>
      {props.children}
    </div>
  );
};

export default PreviewCard;
