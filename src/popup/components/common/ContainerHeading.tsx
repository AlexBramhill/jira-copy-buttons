import type { ParentProps } from "solid-js";

interface ContainerHeadingProps extends ParentProps {
  level?: 1 | 2 | 3;
  class?: string;
}

export const ContainerHeading = (props: ContainerHeadingProps) => {
  const level = props.level ?? 2;

  const baseClasses = "font-semibold text-neutral-100";

  const sizeClasses = {
    1: "text-2xl",
    2: "text-lg",
    3: "text-base",
  };

  const classes = `${baseClasses} ${sizeClasses[level]} ${
    props.class ?? ""
  }`.trim();

  switch (level) {
    case 1:
      return <h1 class={classes}>{props.children}</h1>;
    case 2:
      return <h2 class={classes}>{props.children}</h2>;
    case 3:
      return <h3 class={classes}>{props.children}</h3>;
  }
};

export default ContainerHeading;
