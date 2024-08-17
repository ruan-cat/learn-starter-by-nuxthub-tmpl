<script setup lang="ts">
const { data: messages, refresh } = await useFetch("/api/messages");
const newMessage = ref("");

const { data: recommendMsg, execute: executeRecommend } = await useFetch("/api/homePage/recommend");

const recommendMsgs = ref<string[]>([]);

async function getRecommendMsg() {
	await executeRecommend();
	recommendMsgs.value.push(recommendMsg.value!);
}

async function sendMessage() {
	if (!newMessage.value.trim()) return;
	await $fetch("/api/messages", {
		method: "POST",
		body: {
			text: newMessage.value,
		},
	});
	newMessage.value = "";
	await refresh();
}
</script>

<template>
	<section>
		<h2>{{ recommendMsg }}</h2>
		<!-- <button @click="executeRecommend()">刷新内容</button> -->
		<button @click="getRecommendMsg()">刷新内容</button>
		<ul>
			<li v-for="msg in recommendMsgs">
				{{ msg }}
			</li>
		</ul>

		<h3>Messages</h3>
		<form @submit.prevent="sendMessage">
			<input v-model="newMessage" placeholder="Type a message" />
			<button type="submit">Send</button>
		</form>
		<p v-for="message of messages" :key="message.id">
			{{ message.text }} - {{ new Date(message.created_at).toLocaleString("fr-FR") }}
		</p>
		<p v-if="!messages?.length">No messages yet</p>
	</section>
</template>
