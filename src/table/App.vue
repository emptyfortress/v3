<template lang="pug">
.ap
	h2 Таблица исполнения
	Butt
	List
</template>

<script>
import Butt from '@/components/Butt.vue'
import User from '@/components/User.vue'
import List from '@/components/List.vue'
export default {
	components: { Butt, User, List },

}
</script>

<style lang="scss">
.ap {
	font-family: Roboto, Helvetica, Arial, sans-serif;
	font-size: 1rem;
	font-weight: 400;
	margin: 0 3rem;
}

h2 {
	font-family: Roboto, Helvetica, Arial, sans-serif;
	font-size: 1.5rem;
	font-weight: normal;
	text-align: center;
}
.plus {
	width: 9px;
	height: 9px;
	line-height: 0;
	background: #fff;
	border: 1px solid #aaa;
	cursor: pointer;
	display: inline-block;
	img {
		display: block;
		margin: 1px;
		opacity: .6;
	}
}
</style>
