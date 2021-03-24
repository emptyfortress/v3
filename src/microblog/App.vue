<template lang="pug">
.cards
	Card(v-for="post in store.state.posts")
		template(v-slot:title) {{post.title}}
		template(v-slot:content) {{ post.content }}
		template(v-slot:description)
			Controls(:post="post")

</template>

<script>
import { store } from './store'
import Card from '../components/Card.vue'
import Controls from './Controls.vue'

export default {
	components: {
		Card,
		Controls,
	},
	setup() {
		return {
			store,
		}
	}
}
</script>

<style scoped lang="scss">
.cards {
	font-family: Roboto,san-serif;
	display: flex;
}

</style>
