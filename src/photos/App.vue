<template lang="pug">
Layout
	template(v-slot:header) Header
	template(v-slot:sidebar)
		Album(v-for="album in albums" :album="album") {{ album.title }}
	template(v-slot:content)
		img(v-for="photo in currentAlbumPhotos" :src="photo.thumbnailUrl")
</template>

<script>
import Layout from './Layout.vue'
import Album from './Album.vue'

export default {
	components: { Layout, Album },
	created() {
		this.$store.dispatch('albums/fetchAlbums')
	},
	computed: {
		albums() {
			return this.$store.state.albums.all
		},
		currentAlbumPhotos() {
			return this.$store.state.photos.currentAlbumPhotos
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
