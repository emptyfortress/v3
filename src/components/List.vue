<template lang="pug">
table.tab
	thead
		th alsdkj
		th Описание
		th Текущий исполнитель
		th Состояние
		th Плановая дата завершения
		th Фактическая дата завершения
		th Автор
		th Контролер
		th Ответственный исполнитель
	tbody
		tr
			td
			td На исполнение
			td Орлов П.К.
			td Завершено
			td 31.07.2020
			td 27.07.2020
			td Поликарпов С.М.
			td Docsvision
			td Суворов А.А.

</template>

<script>
export default {

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
	td {
		padding: .9rem 0;
		border-bottom: 1px solid #ccc;
	}
}
</style>
