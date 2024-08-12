// export default defineTask({
// 	meta: {
// 		name: "db:seed",
// 		description: "Run database seed task",
// 	},
// 	async run() {
// 		console.log("Running DB seed task...");

// 		const initProduct: Product[] = [];

// 		await useDrizzle().insert(tables.users).values(users);
// 		return { result: "success" };
// 	},
// });
