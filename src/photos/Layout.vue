<template lang="pug">
.wrapper
	.header
		slot(name="header")
	.main
		slot(name="sidebar")
		slot(name="content")
</template>

<script>

export default {
	setup() {
		return {

		}
	}
}
</script>

<style lang="scss">
</style>
