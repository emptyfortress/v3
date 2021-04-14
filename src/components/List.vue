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
		Row(v-for="item in rows"
			:color="item.color"
			:done="item.done"
			:contr="item.contr"
			:time="item.time"
			:otvet="item.otvet"
			:child="item.child"
			)

</template>

<script>
import Row from '@/components/Row.vue'
import { rows } from '@/table/rows.js'

export default {
	components: { Row },
	data() {
		return {
			rows
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
</style>
