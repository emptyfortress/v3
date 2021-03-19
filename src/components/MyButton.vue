<template lang="pug">
button(
	:style="{background, color}"
	:disabled="disabled"
	)
	span Button
</template>

<script>
export default {
	props: {
		background: String,
		color: String,
		disabled: Boolean,
	},
	data() {
		return {}
	},
}
</script>

<style scoped lang="scss">
button {
	background: #ccc;
	color: black;
	font-size: 1.2rem;
	padding: 10px 30px;
	border-radius: 5px;
	border: none;
	cursor: pointer;
	&:hover {
		filter: brightness(125%);
	}
	&:disabled {
		opacity: 0.5;
	}
}
</style>
