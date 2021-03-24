<template lang="pug">
.cards
	Card(v-for="post in filteredPosts" )
		template(v-slot:title) {{post.title}}
		template(v-slot:content) {{ post.content }}
		template(v-slot:description)
			Controls(:post="post" @setHashtag="setHashtag")
</template>

<script>
import { ref, computed } from 'vue'
import { store } from './store'
import Card from '../components/Card.vue'
import Controls from './Controls.vue'

export default {
	components: {
		Card,
		Controls,
	},
	setup() {
		const currentTag = ref()

		const filteredPosts = computed(() => {
			if (!currentTag.value) {
				return store.state.posts
			}
			return store.state.posts.filter(post => post.hashtags.includes(currentTag.value)) 
		})

		const setHashtag = (tag) => {
			currentTag.value = tag
		}
		return {
			filteredPosts,
			setHashtag,
			currentTag,
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
