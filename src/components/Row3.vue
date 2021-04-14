<template lang="pug">
tr
	td.first.forth
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
Row4(v-if="expand")
</template>

<script>
import User from '@/components/User.vue'
import Row4 from '@/components/Row4.vue'

export default {
	props: ['child'],
	components: { User, Row4  },
	data() {
		return {
			expand: false,
		}
	},

}
</script>

<style scoped lang="scss">
td.first {
	/* padding: .5rem 1rem; */
	&.forth {
		padding-left: 48px;
	}
}

.link {
	color: #267DFF;
	cursor: pointer;
}
.flex {
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 5px;
}
</style>
