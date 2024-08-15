/**
 *
 * @see https://neon.tech/docs/get-started-with-neon/connect-neon#connecting-to-your-application
 */

// Drizzle example with the Neon serverless driver
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
// TODO:
import * as schema from "../database/cloudflare-D1/schema";

export { sql, eq, and, or } from "drizzle-orm";

export const tables = schema;

// TODO:
const sql = neon(process.env.DATABASE_URL);

export function useNeonDB() {
	return drizzle(sql, { schema });
}

/** 商品 */
export type Product = typeof schema.product.$inferSelect;
