import type { UUID } from "crypto";
import { IconButton } from "../IconButton";
import type { ValueStoreWithId } from "../../helpers/signalHelpers";

export type StringStoreWithId = ValueStoreWithId<string>;

interface MultipleTextInputRowProps {
  data: StringStoreWithId;
  onChange: (stringStoreWithId: StringStoreWithId) => void;
  onRemove: (id: UUID) => void;
}

export const MultipleTextInputRow = ({
  data,
  onChange,
  onRemove,
}: MultipleTextInputRowProps) => {
  return (
    <div class="flex items-center gap-2">
      <IconButton
        ariaLabel="Remove hostname"
        onClick={() => onRemove(data.id)}
        class="py-2"
      >
        -
      </IconButton>
      <span class="text-neutral-500">https://</span>
      <input
        id={`url-input-${data.id}`}
        type="text"
        value={data.value}
        onInput={(event) =>
          onChange({
            id: data.id,
            value: event.currentTarget.value,
          })
        }
        placeholder="example.atlassian.net"
        class="flex-1 rounded-md border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm text-neutral-100 placeholder:text-neutral-500 focus:border-neutral-500 focus:outline-none"
      />
      <span class="text-neutral-500">/</span>
    </div>
  );
};

export default MultipleTextInputRow;
