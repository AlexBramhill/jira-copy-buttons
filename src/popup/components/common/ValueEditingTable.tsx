import type { UUID } from "crypto";
import { type CreateValueWithIdArrayStoreResponse } from "../../stores/valueWithIdArrayStore";
import type { ValueWithId } from "../../stores/IValueWithId";
import { DeleteButton } from "./button/DeleteButton";
import { For, JSX } from "solid-js";
import Button from "./button/Button";

export interface ValuesTableProps<T> {
  createValuesWithIdArrayStore: () => CreateValueWithIdArrayStoreResponse<T>;
  renderRow: (
    valueWithId: ValueWithId<T>,
    onInput: (newValue: T) => void
  ) => JSX.Element;
  addButtonText?: string;
}

export const ValuesTable = <T,>({
  createValuesWithIdArrayStore,
  renderRow,
  addButtonText,
}: ValuesTableProps<T>) => {
  const { values, addValue, updateValue, removeValue } =
    createValuesWithIdArrayStore();

  const handleOnRemove = async (id: UUID) => {
    await removeValue(id);
  };

  const handleAddButtonOnClick = async () => {
    await addValue();
  };

  const handleInput = (id: UUID, value: T) => {
    updateValue({ id, value });
  };

  return (
    <>
      <table class="w-full">
        <tbody class="gap-2 flex flex-col p-2">
          <For each={values}>
            {(valueWithId: ValueWithId<T>) => (
              <tr class="flex items-start justify-between w-full p-2 gap-2 border border-neutral-700 rounded-md bg-neutral-900/80">
                <td class="shrink-0 pl-1 pt-1">
                  <DeleteButton
                    onClick={() => handleOnRemove(valueWithId.id)}
                  />
                </td>
                <td class="flex-1">
                  {renderRow(valueWithId, (newValue: T) =>
                    handleInput(valueWithId.id, newValue)
                  )}
                </td>
              </tr>
            )}
          </For>
          <tr>
            <Button onClick={handleAddButtonOnClick}>
              {addButtonText ?? "Add"}
            </Button>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default ValuesTable;
