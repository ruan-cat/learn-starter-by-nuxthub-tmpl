import { sqliteTable, text, integer, sqliteTableCreator } from "drizzle-orm/sqlite-core";
import { dbTableNamePrefix } from "~~/utils";

/** D1 数据表构造器 */
const cloudflareD1SqliteTable = sqliteTableCreator((name) => `${dbTableNamePrefix}${name}`);

// notuse 不使用 当成一个使用案例
// export const todos = sqliteTable("todos", {
// 	id: integer("id").primaryKey(),
// 	userId: integer("user_id").notNull(), // GitHub Id
// 	title: text("title").notNull(),
// 	completed: integer("completed").notNull().default(0),
// 	createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
// });

export const todos = cloudflareD1SqliteTable("todos", {
	id: integer("id").primaryKey(),
	userId: integer("user_id").notNull(), // GitHub Id
	title: text("title").notNull(),
	completed: integer("completed").notNull().default(0),
	createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
});

export const product = cloudflareD1SqliteTable("product", {
	/** 商品id */
	productId: integer("product_id").primaryKey(),
	sales: integer("sales").notNull().default(0),
	skuId: integer("sku_id"),
	completed: integer("completed").notNull().default(0),
	createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
});
