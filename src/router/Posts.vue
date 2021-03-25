<template lang="pug">
h2 Posts
br
routerLink(v-for="post in testPosts" :to="`/posts/${post.id}`").link {{post.title}}
routerView
</template>

<script>
import {testPosts} from '../microblog/posts.js'

export default {
	setup() {
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
