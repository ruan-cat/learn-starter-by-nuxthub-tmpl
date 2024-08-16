export default eventHandler(async () => {
	// const db = hubDatabase();
	// console.log(" 看看生产环境会不会有反应？ ");
	// // TODO: move it a a Server Task
	// await db.exec("CREATE TABLE IF NOT EXISTS messages (id INTEGER PRIMARY KEY, text TEXT, created_at INTEGER)");
	// const { results } = await db.prepare("SELECT * FROM messages ORDER BY created_at DESC").all();
	// return results;
	return "你好，我是来自vercel的边缘服务器函数。";
});
