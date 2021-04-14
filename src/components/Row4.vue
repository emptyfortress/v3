<template lang="pug">
tr
	td.first.fifth
		.flex
			.plus1
			User(:color="color"
				:done="done"
				:contr="contr"
				:time="time"
				:otvet="otvet"
				)
	td.link На исполнение
	td Орлов П.К.
	td Завершено
	td 31.07.2020
	td 27.07.2020
	td Поликарпов С.М.
	td Docsvision
	td Суворов А.А.
</template>

<script>
import User from '@/components/User.vue'

export default {
	props: ['child', 'color', 'done', 'contr', 'otvet', 'time'],
	components: { User  },
	data() {
		return {
			expand: true,
		}
	},

}
</script>

<style scoped lang="scss">

</style>
