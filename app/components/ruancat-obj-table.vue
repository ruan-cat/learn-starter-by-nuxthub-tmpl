<script lang="ts" setup>
// import { type RuancatObjSelect } from "~~/server/utils/neon-db";

// const t = neonTables.ruancatObjTable.$inferSelect;

const { data: ruancatObjs, status } = useFetch("/api/ruancatObjTable/getRuancatObjTable");

const isLoading = computed(() => status.value === "pending");

const description = ref("没有数据");

// const ruancatObj: RuancatObjSelect = {
// 	content: "",
// 	id: 0,
// 	create_time: new Date(),
// 	creator: "",
// 	modified_by: "",
// 	modified_time: new Date(),
// 	remark: "",
// 	version: 1,
// };
</script>

<template>
	<section class="ruancat-obj-table-root">
		<ElTable :data="ruancatObjs" v-loading="isLoading" element-loading-text="正在加载数据">
			<template #empty>
				<ElEmpty :description="description" v-if="!isLoading"></ElEmpty>
			</template>

			<!-- <template v-for="  ">
				<ElTableColumn prop=""></ElTableColumn>
			</template> -->
		</ElTable>
	</section>
</template>

<style lang="scss" scoped>
.ruancat-obj-table-root {
}
</style>
