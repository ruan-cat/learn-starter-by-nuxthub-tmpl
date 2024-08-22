import { config } from "dotenv";
import type { Config } from "drizzle-kit";

/**
 * @see https://orm.drizzle.team/learn/tutorials/drizzle-with-neon
 */
config({ path: ".env" });

/**
 * 面向 cloudflare D1 的 drizzle 配置
 */
const drizzleConfigWithCloudflareD1: Config = {
	schema: "./server/database/cloudflare-D1/schema.ts",
	out: "./server/database/cloudflare-D1/migrations",

	dialect: "sqlite",
	driver: "d1-http",
	dbCredentials: {
		accountId: "3412269ab0def154c8806e38acd1b493",
		databaseId: "22850cc9-7519-4d48-bf90-ea886519f86f",
		token: "SFJXyE38Aa8qcMfLpCHueuYB4PAgyN_O14d0vkn7",
	},

	migrations: {
		prefix: "none",
	},
};

/**
 * 面向 neon 的 drizzle 配置
 */
const drizzleConfigWithNeon: Config = {
	schema: "./server/database/neon/schema.ts",
	out: "./server/database/neon/migrations",

	dialect: "postgresql",

	dbCredentials: {
		url: process.env.psql_database_url!,
	},

	migrations: {
		prefix: "none",
	},
};

// export default drizzleConfigWithCloudflareD1;
export default drizzleConfigWithNeon;
