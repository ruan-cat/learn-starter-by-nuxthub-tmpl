import { ruancatObjTable } from "~~/server/database/neon/schema";

export default eventHandler(async () => {
	const ruancatObjTables = await useNeonDB().select().from(ruancatObjTable);

	console.log(" 返回了全部的数据么？ ", ruancatObjTables);

	return ruancatObjTables;
});
