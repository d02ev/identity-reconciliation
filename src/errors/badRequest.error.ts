import { HttpStatusCodes } from "#enums/index.js";

export class BadRequestError extends Error {
  public readonly statusCode: number = HttpStatusCodes.BAD_REQUEST;
  public readonly message: string;

  constructor(message: string) {
    super(message);
    this.message = message;
  }
}