<template lang="pug">
.wrap
	.label
		label(:for="name") {{name}}
		.error this. is err
	input(type="text" :id="name" :name="name")
</template>

<script>
export default {
	props: {
		name: {
			type: String,
			required: true,
		},
		rules: {
			type: Object,
		},
	},
	data() {
		return {}
	},
}
</script>

<style scoped lang="scss">
.wrap {
	display: flex;
	flex-direction: column;
	input {
		height: 42px;
		margin: 10px 0;
		font-size: 2rem;
	}
}
.label {
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	.error {
		color: red;
		font-size: 1rem;
	}
}
</style>
