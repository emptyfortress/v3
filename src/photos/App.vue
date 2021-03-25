<template lang="pug">
Layout
	template(v-slot:header) Header
	template(v-slot:sidebar)
		div(v-for="album in albums") {{ album.title }}
	template(v-slot:content) content
</template>

<script>
import Layout from './Layout.vue'

export default {
	components: { Layout },
	async created() {
		const res = await fetch('https://jsonplaceholder.typicode.com/albums')
		const data = await res.json()
		this.albums = data
	},
	data() {
		return {
			albums: []
		}
	}
}
</script>

<style lang="scss">
body {
	margin: 0;
}
* {
	box-sizing: border-box;
}
</style>
