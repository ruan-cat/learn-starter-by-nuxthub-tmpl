/**
 * 参考资料
 * @see https://orm.drizzle.team/learn/tutorials/drizzle-with-neon
 */

import { pgTable, text, integer, timestamp } from "drizzle-orm/pg-core";

export const todos = pgTable("todos", {
	id: integer("id").primaryKey(),
	userId: integer("user_id").notNull(), // GitHub Id
	title: text("title").notNull(),
	completed: integer("completed").notNull().default(0),
	// pg的语法和sqlite的语法，有差异
	// createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
	createdAt: timestamp("created_at").notNull().defaultNow(),
	updatedAt: timestamp("updated_at")
		.notNull()
		.$onUpdate(() => new Date()),
});

export const product = pgTable("product", {
	/** 商品id */
	productId: integer("product_id").primaryKey(),
	sales: integer("sales").notNull().default(0),
	skuId: integer("sku_id"),
	completed: integer("completed").notNull().default(0),
	// pg的语法和sqlite的语法，有差异
	// createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
	createdAt: timestamp("created_at").notNull().defaultNow(),
	updatedAt: timestamp("updated_at")
		.notNull()
		.$onUpdate(() => new Date()),
});
