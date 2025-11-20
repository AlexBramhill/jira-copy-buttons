import type { Ticket } from "../ticket";

export type TicketRule = {
  shouldRun: () => boolean;
  findAllOccurrences: () => Ticket[];
  addButtons: () => void;
};
