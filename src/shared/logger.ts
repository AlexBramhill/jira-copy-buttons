import pino from "pino";
import { Environment } from "./environment";

const level =
  import.meta.env.MODE === Environment.Development ? "debug" : "info";

export const logger = pino({
  level,
  browser: {
    asObject: true,
  },
});
