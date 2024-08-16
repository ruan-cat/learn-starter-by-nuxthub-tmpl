import { parseURL } from "ufo";

export default eventHandler(async (event) => {
	// Skip during prerendering
	if (import.meta.prerender) return;

	// 不使用 hubKV 和 nuxthub 的东西了。
	// const { pathname } = parseURL(event.path);
	// const redirects = await hubKV().get<{ [key: string]: string }>("redirects");
	// if (redirects?.[pathname]) {
	// 	return sendRedirect(event, redirects[pathname]);
	// }
});
