<template lang="pug">
div
	button.like {{ post.likes }}
	Hashtag(:hash="tag" v-for="tag in post.hashtags")
</template>

<script>
import Hashtag from './Hashtag.vue'

export default {
	components: { Hashtag },
	props: {
		post: {
			type: Object
		}
	},
}
</script>

<style lang="scss">
.like {
	margin-bottom: .5rem;
}

</style>
