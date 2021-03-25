<template lang="pug">
button(v-for="post in posts" @click="fetchPostData(post.id)") {{ post.title }}
br
div(v-if="currentPost")
	h1 {{ currentPost.title }}
	p {{ currentPost.content }}
</template>

<script>
import { computed} from 'vue'
import { useStore } from 'vuex'

export default {
	setup() {
		const store = useStore()
		const posts = [
			{ id: 1, title: 'post 1' },
			{ id: 2, title: 'post 2' },
		]

		const fetchPostData = (e) => store.dispatch('fetchData', e)
		const currentPost = computed(() => store.state.currentPost)
		return {
			posts,
			fetchPostData,
			currentPost
		}
	},
}
</script>

<style lang="scss">
</style>
