<template lang="pug">
button(:class="getClass(number)" @click="handle") {{ number }}
</template>

<script>
export default {
	props: {
		number: {
			type: Number,
			required: true,
		},
	},
	data() {
		return {}
	},
	methods: {
		handle() {
			this.$emit('chosen', { person: this.number })
		},
		isEven(num) {
			return num % 2 === 0
		},
		getClass(num) {
			return this.isEven(num) ? 'red' : 'blue'
		},
	},
}
</script>

<style scoped lang="scss">
button {
	font: 400 24px Arial;
	padding: 10px;
}
.blue {
	color: blue;
}
.red {
	color: red;
}
</style>
