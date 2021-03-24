<template lang="pug">
div(v-for="hash in hashtags").hash ~{{ hash }}
</template>

<script>

export default {
	props: ['hashtags'],
	setup() {
		return {

		}
	}
}
</script>

<style lang="scss">
.hash {
	margin: 0 5px;
	font-size: 0.9rem;
	height: 100%;
	color: darkslateblue;
	&:hover {
		text-decoration: underline;
	}
}

</style>
