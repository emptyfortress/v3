<template lang="pug">
tr
	td.first.fifth
		.flex
			.plus
				img(src="@/assets/plus.svg" v-if="!expand")
				img(src="@/assets/minus.svg" v-else)
			User(color="grey")
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
	props: ['child'],
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
