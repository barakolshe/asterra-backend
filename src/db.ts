import { Pool, QueryResult } from "pg";
import { DB_ADDRESS, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER } from "./consts";

const pool: Pool = new Pool({
  host: DB_ADDRESS,
  port: DB_PORT,
  database: DB_NAME,
  user: DB_USER,
  password: DB_PASSWORD,
});

export function execQuery(
  text: string,
  ...params: any[]
): Promise<QueryResult<any>> {
  console.log("running query:", text, params);
  return pool.query(text, params);
}
