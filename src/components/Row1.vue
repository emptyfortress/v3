<template lang="pug">
tr
	td.first.second
		.flex
			.plus(@click="expand = !expand" v-if="child")
				img(src="@/assets/plus.svg" v-if="!expand")
				img(src="@/assets/minus.svg" v-else)
			.plus1(v-else)
			User(:color="color"
				:done="done"
				:contr="contr"
				:time="time"
				:otvet="otvet"
				)
			.link Подготовить ответ
	td Орлов П.К.
	td Завершено
	td 31.07.2020
	td 27.07.2020
	td Поликарпов С.М.
	td Docsvision
	td Суворов А.А.
Row2(v-if="expand" v-for="item in child"
	:color="item.color"
	:done="item.done"
	:contr="item.contr"
	:time="item.time"
	:otvet="item.otvet"
	:child="item.child"
	)
</template>

<script>
import User from '@/components/User.vue'
import Row2 from '@/components/Row2.vue'

export default {
	props: ['child', 'color', 'done', 'contr', 'otvet', 'time'],
	components: { User, Row2  },
	data() {
		return {
			expand: false,
		}
	},

}
</script>

<style scoped lang="scss">

</style>
