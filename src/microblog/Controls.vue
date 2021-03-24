<template lang="pug">
div
	button.like {{ post.likes }}
	Hashtag(:hashtags="post.hashtags").hash ~{{ hash }}
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
	setup() {
		return {
		}
	}
}
</script>

<style lang="scss">
.like {
	margin-bottom: .5rem;
}

</style>
