<template lang="pug">
table.tab
	thead
		th
		th Описание
		th Текущий исполнитель
		th Состояние
		th
			div Плановая дата
			div завершения
		th
			div Фактическая дата
			div завершения
		th Автор
		th Контролер
		th
			div Ответственный
			div исполнитель
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
</style>
