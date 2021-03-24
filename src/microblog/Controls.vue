<template lang="pug">
div
	button(@click="like").like {{ post.likes }}
	Hashtag(:hash="tag" v-for="tag in post.hashtags")
</template>

<script>
import Hashtag from './Hashtag.vue'
import { store } from './store.js'

export default {
	components: { Hashtag },
	props: {
		post: {
			type: Object
		}
	},
	setup(props) {
		const like = () => store.incrementLike(props.post)

		return {
			like
		}
	}
}
</script>

<style lang="scss">
.like {
	margin-bottom: .5rem;
}

</style>
