export default eventHandler(async () => {
	// 不使用 hubKV 和 nuxthub 的东西了。
	// return (await hubKV().get("redirects")) || {};
});
