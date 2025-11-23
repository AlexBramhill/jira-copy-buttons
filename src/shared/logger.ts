import pino from "pino";

const level = import.meta.env.DEV ? "debug" : "info";

export const logger = pino({
  level,
  browser: {
    asObject: true,
  },
});
