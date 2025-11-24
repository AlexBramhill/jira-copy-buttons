import type { TextInputProps } from "./TextInputProps";

export const UrlTextInput = ({ data, onChange }: TextInputProps) => {
  return (
    <>
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
    </>
  );
};

export default UrlTextInput;
