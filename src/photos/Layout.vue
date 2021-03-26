<template lang="pug">
.wrapper
	.header
		slot(name="header")
	.main
		.sidebar
			slot(name="sidebar")
		.content
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

<style scoped lang="scss">
.wrapper {
	height: 100vh;
}
.header {
	height: 50px;
}
.main {
	height: calc(100vh - 50px);
	display: flex;
	border-top: 2px solid silver;
}
.sidebar {
	flex-basis: 300px;
	flex-shrink: 0;
	flex-grow: 0;
	border-right: 2px solid silver;
	padding: 1rem;
}
</style>
