<template lang="pug">
.row
	div
		.bt.hollow Просроченные
		.bt.hollow Незавершенные
		.bt.hollow Завершенные
	div
		.bt.grey Показать все дерево
	div
		.bt.grey Свернуть все
		.bt.grey Развернуть все
		.bt.grey Обновить
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.row {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.bt {
	font-size: .8rem;
	display: inline-block;
	margin-right: 4px;
	padding: 7px 15px;
	&.hollow {
		border: 1px solid #3677a0;
	}
	&.grey {
		background: #dedede;
	}
}

</style>
