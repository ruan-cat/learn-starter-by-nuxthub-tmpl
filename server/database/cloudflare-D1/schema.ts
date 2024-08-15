import { sqliteTable, text, integer, sqliteTableCreator } from "drizzle-orm/sqlite-core";

// 有疑惑 可能是node无法直接识别nuxt的别名
// import { dbTableNamePrefix } from "@@/utils/index";
import { dbTableNamePrefix } from "../utils/index";

/**
 * D1 数据表名称构造器
 * @deprecated
 * 没必要 因为对数据库表的语义化程度很差。
 *
 * 除非数据库表很多，需要设计专门的前缀，否则不合适。
 */
const cloudflareD1SqliteTable = sqliteTableCreator((name) => `${dbTableNamePrefix}${name}`);

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
