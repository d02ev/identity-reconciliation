import { HttpStatusCodes } from "#enums/index.js";

export class InternalServerError extends Error {
  public readonly statusCode: number = HttpStatusCodes.INTERNAL_SERVER_ERROR;
  public readonly message: string;

  constructor(message: string) {
    super(message);
    this.message = message;
  }
}