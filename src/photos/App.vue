<template lang="pug">
Layout
	template(v-slot:header) Header
	template(v-slot:sidebar) sidebar
	template(v-slot:content) content
</template>

<script>
import Layout from './Layout.vue'

export default {
	components: { Layout },
	created() {
		console.log(this.$store.statey)
	},
	setup() {
		return {

		}
	}
}
</script>

<style lang="scss">
</style>
