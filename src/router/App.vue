<template lang="pug">
h2 Router
routerLink(to="/hello").link Hello
routerLink(to="/posts").link Posts
routerView
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
.link {
	margin-right: 1rem;
}
</style>
