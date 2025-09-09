import { PrismaClient } from "@prisma/client";

export default class DbClient extends PrismaClient {
  constructor() {
    super();
  }
}