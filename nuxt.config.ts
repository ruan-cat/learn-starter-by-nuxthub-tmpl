// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2024-07-30",
	// Nuxt 4 directory structure and features
	// https://nuxt.com/docs/getting-started/upgrade#testing-nuxt-4
	future: { compatibilityVersion: 4 },
	// Nuxt Modules
	// https://nuxt.com/modules
	modules: [
		// 不直接使用nuxthub，避免直接使用cloudflare
		// "@nuxthub/core",
		"@nuxt/eslint",
		/**
		 * ```bash
		 * npx nuxi@latest module add element-plus
		 * ```
		 * @see https://github.com/element-plus/element-plus-nuxt#installation
		 */
		"@element-plus/nuxt",

		/**
		 * npx nuxi module add @scalar/nuxt
		 * @see https://github.com/scalar/scalar/blob/main/packages/nuxt/README.md
		 */
		"@scalar/nuxt",
	],

	// 不使用。
	// hub: {
	// 	database: true,
	// 	kv: true,
	// 	// 不使用blob 不想开通 配置银行卡很麻烦
	// 	blob: false,
	// 	cache: true,
	// 	projectKey: "starter-by-nuxt-h4a5",
	// 	// FIXME: 为什么这个配置不生效？
	// 	// remote: true,
	// },
	nitro: {
		/** 该配置实际上无意义 这是预设的 */
		// preset: "cloudflare-pages",
		// 尝试部署到vercel边缘运行时。
		// 可以打包
		preset: "vercel",
		// FIXME: 出现莫名其妙的错误 这个预设似乎无效
		// preset: "vercel-edge",

		experimental: {
			// Enable Server API documentation within NuxtHub
			openAPI: true,

			/**
			 * @see https://hub.nuxt.com/docs/recipes/drizzle#seed-the-database-optional
			 */
			tasks: true,
		},

		// 暂时不考虑nitro去连接数据库，用ORM去实现。
		// database: {
		// 	default: {},
		// },
	},

	// Development
	devtools: { enabled: true },

	devServer: {
		// host: "0.0.0.0",
		port: 8080,
		https: false,
	},

	vite: {
		server: {
			open: true,
		},
	},

	eslint: {
		config: {
			standalone: false,
		},
	},
});
