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

/**
 * 阮喵喵对象表 仅仅是用来学习如何实现单表的CURD写法。
 *
 * @description
 * 尝试自己设计一个数据库表应该有的基础字段。
 *
 * @see https://developer.aliyun.com/article/1393401s
 */
export const ruancatObjTable = pgTable("ruancat_obj_table", {
	id: integer("id").primaryKey(),
	create_time: timestamp("create_time").notNull().defaultNow(),
	modified_time: timestamp("modified_time")
		.notNull()
		.defaultNow()
		.$onUpdate(() => new Date()),
	version: integer("version"),
	remark: text("remark"),
	modified_by: text("modified_by"),
	creator: text("creator"),
});
