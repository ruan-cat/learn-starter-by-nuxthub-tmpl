const initProduct: Product[] = [
	{
		productId: 1,
		skuId: 1,
		sales: 0,
		completed: 0,
		createdAt: new Date(),
	},
	{
		productId: 2,
		skuId: 2,
		sales: 0,
		completed: 0,
		createdAt: new Date(),
	},
	{
		productId: 3,
		skuId: 3,
		sales: 0,
		completed: 0,
		createdAt: new Date(),
	},
];

export default defineTask({
	meta: {
		name: "db:seed",
		description: "Run database seed task",
	},
	async run() {
		console.log("Running DB seed task...");

		await useDrizzle().insert(tables.product).values(initProduct);
		return { result: "success" };
	},
});
