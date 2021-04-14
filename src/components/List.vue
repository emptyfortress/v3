<template lang="pug">
table.tab
	thead
		th
		th Описание
		th Текущий исполнитель
		th Состояние
		th Плановая дата завершения
		th Фактическая дата завершения
		th Автор
		th Контролер
		th Ответственный исполнитель
	tbody
		Row

</template>

<script>
import Row from '@/components/Row.vue'

export default {
	components: { Row },
	data() {
		return {
			rows: [
				{  }
			]
		}
	},
}
</script>

<style lang="scss">
.tab {
	margin-top: 2rem;
	width: 100%;
	font-size: .9rem;
	border-collapse: collapse;
	th {
		text-align: left;
		border-bottom: 1px solid #ccc;
		font-size: .85rem;
		font-weight: 300;
	}
	tr {
		&:hover {
			background: #efefef;
		}
	}
	td {
		padding: 8px 0;
		border-bottom: 1px solid #eee;
	}
}
/* td.first { */
/* 	padding: .5rem 1rem; */
/* 	.second & { */
/* 		padding-left: 37px; */
/* 	} */
/* } */
/*  */
/* .link { */
/* 	color: #267DFF; */
/* 	cursor: pointer; */
/* } */
/* .flex { */
/* 	display: flex; */
/* 	justify-content: flex-start; */
/* 	align-items: center; */
/* 	gap: 5px; */
/* } */
/* .plus { */
/* 	width: 9px; */
/* 	height: 9px; */
/* 	line-height: 0; */
/* 	background: #fff; */
/* 	border: 1px solid black; */
/* 	cursor: pointer; */
/* 	display: inline-block; */
/* 	img { */
/* 		display: block; */
/* 		margin: 1px; */
/* 	} */
/* } */
</style>
