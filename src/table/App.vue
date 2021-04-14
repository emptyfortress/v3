<template lang="pug">
.ap
	h2 Таблица исполнения
	Butt
	<!-- User(color="grey") -->
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
</style>
