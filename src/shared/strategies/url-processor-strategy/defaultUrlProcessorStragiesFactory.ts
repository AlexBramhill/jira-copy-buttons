import { createExampleUrlStrategy } from "./default-strategies-factories/exampleHostnameFactory";

export const createDefaultUrlProcessorStrategies = () => [
  createExampleUrlStrategy(),
];
