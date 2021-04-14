<template lang="pug">
tr
	td.first.third
		.flex
			.plus(@click="expand = !expand")
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
Row3(v-if="expand")
</template>

<script>
import User from '@/components/User.vue'
import Row3 from '@/components/Row3.vue'

export default {
	props: ['child'],
	components: { User, Row3  },
	data() {
		return {
			expand: false,
		}
	},

}
</script>

<style scoped lang="scss">

</style>
