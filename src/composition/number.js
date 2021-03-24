import { ref, reactive, computed, watchEffect } from 'vue'
export function useNumbers() {

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

	watchEffect(() => {
		console.log(numbers.a)
	})

	return {
		increment,
		increase,
		numbers,
		all,
		count
	}
}
