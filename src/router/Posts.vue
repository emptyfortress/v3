<template lang="pug">
h2 Posts
br
routerLink(v-for="post in testPosts" :to="`/posts/${post.id}`").link {{post.title}}
routerView
</template>

<script>
// import { watchEffect } from 'vue'
// import { useRoute } from 'vue-router'
import {testPosts} from '../microblog/posts.js'

export default {
	setup() {
		// const route = useRoute()
		// watchEffect(() => {
		// 	console.log(route.params)
		// })

		return {
			testPosts
		}
	}
}
</script>

<style lang="scss">
.link {
	margin-right: 1rem;
	display: inline-block;
}
</style>
