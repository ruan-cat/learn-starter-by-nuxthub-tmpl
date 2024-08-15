import type { Config } from "drizzle-kit";

/**
 * 面向 cloudflare D1 的 drizzle 配置
 */
const drizzleConfigWithCloudflareD1: Config = {
	schema: "./server/database/schema.ts",
	out: "./server/database/migrations",

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
	schema: "./server/database/schema.ts",
	out: "./server/database/migrations",

	dialect: "postgresql",

	migrations: {
		prefix: "none",
	},
};

export default drizzleConfigWithCloudflareD1;

// export default {
// 	schema: "./server/database/schema.ts",
// 	out: "./server/database/migrations",

// 	dialect: "postgresql",
// 	// driver: "aws-data-api",

// 	// dialect: "sqlite",
// 	// cloudflare D1
// 	// driver: "d1-http",
// 	// dbCredentials: {
// 	// 	accountId: "3412269ab0def154c8806e38acd1b493",
// 	// 	databaseId: "22850cc9-7519-4d48-bf90-ea886519f86f",
// 	// 	token: "SFJXyE38Aa8qcMfLpCHueuYB4PAgyN_O14d0vkn7",
// 	// },

// 	migrations: {
// 		prefix: "none",
// 	},
// } satisfies Config;
