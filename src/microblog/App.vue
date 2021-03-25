<template lang="pug">
input(type="text" :value="curTag" @input="setHashtag")
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

		const curTag = computed(() => {
			return store.state.currentTag
		})
		const setHashtag = (e) => {
			store.setHashtag(e.target.value)
		}

		return {
			filteredPosts: store.filteredPosts,
			curTag,
			setHashtag

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
