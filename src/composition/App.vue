<template lang="pug">
button(@click="increment") {{ count }}
button(@click="increase('a')") {{ numbers.a }}
button(@click="increase('b')") {{ numbers.b }}
p {{all}}
</template>

<script>
import {useNumbers} from './number'
export default {
	setup() {
		const {
			count,
			increment,
			numbers,
			increase,
			all,
		} = useNumbers()
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

