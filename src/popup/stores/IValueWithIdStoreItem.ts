import type { UUID } from "crypto";

export interface ValueWithIdStoreItem<T> {
  id: UUID;
  value: T;
}
