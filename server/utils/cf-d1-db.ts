import { drizzle } from "drizzle-orm/d1";
import * as schema from "../database/cloudflare-D1/schema";

export { sql, eq, and, or } from "drizzle-orm";

export const tables = schema;

export function useCloudflareD1DB() {
	return drizzle(hubDatabase(), { schema });
}

/**
 * @see https://hub.nuxt.com/docs/recipes/drizzle#usedrizzle
 */
export const useDrizzle = useCloudflareD1DB;

/** 商品 */
export type Product = typeof schema.product.$inferSelect;
