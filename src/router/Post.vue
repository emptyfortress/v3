<template lang="pug">
h3 {{ post.title }}
p {{ post.content }}
</template>

<script>
// import { useRoute, } from 'vue-router'
// import { computed } from 'vue'
import {testPosts} from '../microblog/posts.js'

export default {
	beforeRouteEnter(to, from, next) {
		next('/posts')
	},
	computed: {
		post() {
			return testPosts.find((x) => x.id === parseInt(this.$route.params.id ))
		}

	}
	// setup() {
	// 	const route = useRoute()
	// 	const post = computed(() =>testPosts.find((x) => x.id === parseInt(route.params.id)))
	// 	return {
	// 		post
	// 	}
	// }
}
</script>

<style lang="scss">
</style>
