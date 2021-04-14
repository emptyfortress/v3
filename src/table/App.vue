<template lang="pug">
.ap
	h2 Таблица исполнения
	Row
	User
</template>

<script>
import Row from '@/components/Row.vue'
import User from '@/components/User.vue'
export default {
	components: { Row, User },

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
