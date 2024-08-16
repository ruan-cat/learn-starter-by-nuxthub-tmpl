/**
 * 参考资料如下
 *
 * @description
 * neon 教程
 *
 * @see https://neon.tech/docs/get-started-with-neon/connect-neon#connecting-to-your-application
 *
 * @description
 * drizzle 教程
 *
 * @see https://orm.drizzle.team/learn/tutorials/drizzle-with-neon
 */

// Drizzle example with the Neon serverless driver
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { config } from "dotenv";
import * as schema from "../database/neon/schema";

export { sql, eq, and, or } from "drizzle-orm";

export const tables = schema;

config({ path: ".env" }); // or .env.local
// const sql = neon(process.env.DATABASE_URL);
const sql = neon(process.env.DATABASE_URL!);

export function useNeonDB() {
	return drizzle(sql, { schema });
}

/** 商品 */
export type Product = typeof schema.product.$inferSelect;
