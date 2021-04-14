<template lang="pug">
tr
	td.first
		.flex
			.plus
				img(src="@/assets/plus.svg")
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
	components: { User }

}
</script>

<style scoped lang="scss">
td.first {
	padding: .5rem 1rem;
	.second & {
		padding-left: 37px;
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
.plus {
	width: 9px;
	height: 9px;
	line-height: 0;
	background: #fff;
	border: 1px solid black;
	cursor: pointer;
	display: inline-block;
	img {
		display: block;
		margin: 1px;
	}
}
</style>
