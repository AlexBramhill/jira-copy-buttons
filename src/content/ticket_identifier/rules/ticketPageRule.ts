import type { TicketRule } from "./ticketRule";

/**
 * Rule for ticket page ie https://example.atlassian.net/browse/PD-1
 */
export const ticketPageRule: TicketRule = {
  shouldRun: () => {
    return /\/browse\/[A-Z]+-\d+/.test(window.location.pathname);
  },
};
