import { HttpStatusCodes } from "#enums/index.js";

export class NotFoundError extends Error {
  public readonly statusCode: number = HttpStatusCodes.NOT_FOUND;
  public readonly message: string;

  constructor(key?: string) {
    super(`contact with key ${key} not found.`);
    this.message = `contact with key ${key} not found.`;
  }
}