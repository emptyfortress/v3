<template lang="pug">
MyInput(name="User" :rules="{required: true, min: 5}")
MyButton(
	background="darkslateblue" 
	color="white"
	:disabled="!valid"
	)
</template>

<script>
import MyButton from '@/components/MyButton.vue'
import MyInput from '@/components/MyInput.vue'

export default {
	data() {
		return {
			valid: true,
		}
	},
	components: { MyButton, MyInput },
	methods: {},
}
</script>

<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	/* text-align: center; */
	color: #2c3e50;
	margin-top: 60px;
	font-size: 1.3rem;
	padding: 3rem;
}
</style>
