<template lang="pug">
button(@click="increment") {{ count }}
button(@click="increase('a')") {{ numbers.a }}
button(@click="increase('b')") {{ numbers.b }}
p {{all}}
</template>

<script>
import { ref, reactive, computed, watch, watchEffect } from 'vue'

export default {
	setup() {
		const count = ref(0)
		const increment = () => (count.value += 1)
		const increase = (num) => {
			numbers[num] += 1
		}

		const all = computed(() => count.value + numbers.a + numbers.b)
		const numbers = reactive({
			a: 0,
			b: 0,
		})

		// watch(
		// 	numbers,
		// 	(newVal) => {
		// 		console.log(newVal.a, newVal.b)
		// 	}, { immediate: true, })
		watchEffect(() => {
			console.log(numbers.a)
		})

		return {
			count,
			increment,
			numbers,
			increase,
			all,
		}
	},
}
</script>

<style scoped lang="scss">
h2 {
	text-align: center;
}
</style>
