import type { ParentProps } from "solid-js";
import ContainerHeading from "../../common/ContainerHeading";

export const DangerZone = (props: ParentProps) => {
  return (
    <div class="mt-6 space-y-4">
      <ContainerHeading level={2}>Danger Zone</ContainerHeading>
      {props.children}
    </div>
  );
};

export default DangerZone;
