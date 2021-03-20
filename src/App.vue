<template lang="pug">
.card
	.title
	.content
	.description
</template>

<script>
export default {
	components: {},
	data() {
		return {}
	},
	computed: {},
	methods: {},
}
</script>

<style scoped lang="scss">
.card {
	border: 1px solid silver;
	border-radius: 8px;
	max-width: 200px;
	margin: 0 5px;
	cursor: pointer;
	box-shadow: 0 1px 3px darkgrey;
	transition: 0.2s;
	&:hover {
		box-shadow: 0 1px 9px darkgrey;
	}
}
.title,
.content,
.description {
	padding: 1rem;
	text-transform: capitalize;
	text-align: center;
}
.title,
.content {
	border-bottom: 1px solid silver;
}
.title {
	font-size: 1.2rem;
}
</style>
