import { config } from "dotenv";
config();

export const {
  PORT,
  DB_URI,
  API_PREFIX,
  HOST,
  API_KEY,
  EXTERNAL_API
} = process.env;
