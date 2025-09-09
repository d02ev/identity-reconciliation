import { Request, Response, NextFunction } from "express";
import { PrismaClientUnknownRequestError, PrismaClientKnownRequestError } from "#models/runtime/library.js";
import { logger } from "#core/index.js";
import { BadRequestError, InternalServerError, NotFoundError } from "#errors/index.js";
import { HttpStatusCodes } from "#enums/index.js"

export const globalErrorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (
    err instanceof BadRequestError ||
    err instanceof InternalServerError ||
    err instanceof NotFoundError
  ) {
    return res.status(err.statusCode).json(err);
  }
  if (err instanceof PrismaClientKnownRequestError) {
    logger.error(`Prisma Known Error: ${err.message}`, { stack: err.stack });
    return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({
      statusCode: HttpStatusCodes.INTERNAL_SERVER_ERROR,
      message: "A database error occurred. Please try again later.",
    });
  }
  if (err instanceof PrismaClientUnknownRequestError) {
    logger.error(`Prisma Unknown Error: ${err.message}`, { stack: err.stack });
    return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({
      statusCode: HttpStatusCodes.INTERNAL_SERVER_ERROR,
      message: "An unknown database error occurred. Please try again later.",
    });
  }

  logger.error(`Unhandled Error: ${err.message}`, { stack: err.stack });
  return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({
    statusCode: HttpStatusCodes.INTERNAL_SERVER_ERROR,
    message: "An unexpected error occurred. Please try again later.",
  });
};
