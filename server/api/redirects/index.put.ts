export default eventHandler(async (event) => {
	const body = await readBody(event);

	// 不使用 hubKV 和 nuxthub 的东西了。
	// Used in server/routes/redirects.ts
	// await hubKV().set("redirects", body);

	return body;
});
