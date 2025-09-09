import DbClient from "#db/db.js";
import { Contact } from "#models/index.js";

const dbClient = new DbClient();

const contactExists = async (email: string, phone: string) => {
  
};