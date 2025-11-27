import type { ParentProps } from "solid-js";

export const MainContainer = (props: ParentProps) => {
  return (
    <div class="min-w-[18rem] max-w-md space-y-4 border border-neutral-800 bg-neutral-900 p-4 text-neutral-100 shadow-lg">
      {props.children}
    </div>
  );
};

export default MainContainer;
