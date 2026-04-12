import pinoHttp from "pino-http";
import { logger } from "./logger";

export const httpLogger = pinoHttp({

  logger,

  customSuccessMessage(req) {

    return `${req.method} ${req.url} completed`;

  },

  customErrorMessage(req) {

    return `${req.method} ${req.url} failed`;

  }

});