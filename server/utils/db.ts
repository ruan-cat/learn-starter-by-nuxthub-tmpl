import { drizzle } from "drizzle-orm/d1";
import * as schema from "../database/cloudflare-D1/schema";

export { sql, eq, and, or } from "drizzle-orm";

export const tables = schema;

export function useDB() {
	return drizzle(hubDatabase(), { schema });
}

/**
 * @see https://hub.nuxt.com/docs/recipes/drizzle#usedrizzle
 */
export const useDrizzle = useDB;

/** 商品 */
export type Product = typeof schema.product.$inferSelect;

type Product1 = {
	completed: number;
	createdAt: Date;
	productId: number;
	sales: number;
	skuId: number | null;
};

// const a1: Product1 = {
// 	completed: 1,
// 	createdAt: new Date(),
// 	productId: 1,
// 	sales: 1,
// 	// skuId: 1,
// };
