import { IconButton } from "../IconButton";

interface HostnameRowProps {
  index: number;
  value: string;
  onChange: (index: number, value: string) => void;
  onRemove: (index: number) => void;
}

export function HostnameRow({
  index,
  value,
  onChange,
  onRemove,
}: HostnameRowProps) {
  return (
    <div class="flex items-center gap-2">
      <IconButton
        ariaLabel="Remove hostname"
        onClick={() => onRemove(index)}
        class="py-2"
      >
        -
      </IconButton>
      <span class="text-neutral-500">https://</span>
      <input
        id={`url-input-${index}`}
        type="text"
        value={value}
        onInput={(event) =>
          onChange(index, (event.target as HTMLInputElement).value)
        }
        placeholder="example.atlassian.net"
        class="flex-1 rounded-md border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm text-neutral-100 placeholder:text-neutral-500 focus:border-neutral-500 focus:outline-none"
      />
      <span class="text-neutral-500">/</span>
    </div>
  );
}
