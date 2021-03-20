<template lang="pug">
.wrap
	.label
		label(:for="name") {{name}}
		.error {{ error }}
	input(:type="type" @input="input" :value="value" :id="name" :name="name")
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
		value: {
			type: String,
		},
		type: {
			type: String,
		},
	},
	methods: {
		validate(value) {
			if (this.rules.required && !value) {
				return 'Required'
			} else if (this.rules.min && value.length < this.rules.min) {
				return `Min value need to be ${this.rules.min}`
			} else return ''
		},
		input(e) {
			this.$emit('update', {
				name: this.name,
				value: e.target.value,
				valid: this.validate(e.target.value) ? false : true,
			})
		},
	},
	computed: {
		error() {
			return this.validate(this.value)
		},
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
