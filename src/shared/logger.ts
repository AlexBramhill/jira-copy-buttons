import pino from "pino";

const level = import.meta.env.MODE === "development" ? "debug" : "info";

export const logger = pino({
  level,
  browser: {
    asObject: true,
  },
});
