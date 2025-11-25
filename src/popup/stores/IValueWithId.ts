import type { UUID } from "crypto";

export interface ValueWithId<T> {
  id: UUID;
  value: T;
}
