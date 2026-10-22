import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export const config = {
  databaseName : process.env.DATABASE_URL,
  port : process.env.PORT,
  secrate : process.env.jWT_SECRATE,
  node_env : process.env.NODE_ENV
}

