import type { Config } from "drizzle-kit";

export default {
	schema: "./server/database/schema.ts",
	out: "./server/database/migrations",

	dialect: "postgresql",
	// driver: "aws-data-api",

	// dialect: "sqlite",
	// cloudflare D1
	// driver: "d1-http",
	// dbCredentials: {
	// 	accountId: "3412269ab0def154c8806e38acd1b493",
	// 	databaseId: "22850cc9-7519-4d48-bf90-ea886519f86f",
	// 	token: "SFJXyE38Aa8qcMfLpCHueuYB4PAgyN_O14d0vkn7",
	// },

	migrations: {
		prefix: "none",
	},
} satisfies Config;
