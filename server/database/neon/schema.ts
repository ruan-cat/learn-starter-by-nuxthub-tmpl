import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

import { sqliteTable, text, integer, sqliteTableCreator } from "drizzle-orm/sqlite-core";

export const todos = sqliteTable("todos", {
	id: integer("id").primaryKey(),
	userId: integer("user_id").notNull(), // GitHub Id
	title: text("title").notNull(),
	completed: integer("completed").notNull().default(0),
	createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
});

export const product = sqliteTable("product", {
	/** 商品id */
	productId: integer("product_id").primaryKey(),
	sales: integer("sales").notNull().default(0),
	skuId: integer("sku_id"),
	completed: integer("completed").notNull().default(0),
	createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
});
