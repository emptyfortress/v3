<template lang="pug">
.cards
	Card(v-for="post in filteredPosts" )
		template(v-slot:title) {{post.title}}
		template(v-slot:content) {{ post.content }}
		template(v-slot:description)
			Controls(:post="post")
</template>

<script>
import { computed } from 'vue'
import { store } from './store'
import Card from '../components/Card.vue'
import Controls from './Controls.vue'

export default {
	components: {
		Card,
		Controls,
	},
	setup() {
		const filteredPosts = computed(() => {
			if (!store.state.currentTag) {
				return store.state.posts
			}
			return store.state.posts.filter(post => post.hashtags.includes(store.state.currentTag)) 
		})

		return {
			filteredPosts,
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
