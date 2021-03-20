<template lang="pug">
form(@submit.prevent="submit")
	MyInput(name="User" 
		:value="user.value" 
		:rules="{required: true, min: 5}" 
		type="text"
		@update="update")
	p {{ user }}
	MyInput(name="Password" 
		:value="password.value" 
		:rules="{required: true, min: 10}" 
		type="password"
		@update="update")
	p {{ password }}
	MyButton(type="submit" background="darkslateblue" color="white" :disabled="!valid")
</template>

<script>
import MyButton from '@/components/MyButton.vue'
import MyInput from '@/components/MyInput.vue'

export default {
	components: { MyButton, MyInput },
	data() {
		return {
			user: {
				value: '',
				valid: false,
			},
			password: {
				value: '',
				valid: false,
			},
		}
	},
	computed: {
		valid() {
			return this.user.valid && this.password.valid
		},
	},
	methods: {
		submit() {
			console.log('submit')
		},
		update(e) {
			this[e.name.toLowerCase()] = {
				value: e.value,
				valid: e.valid,
			}
		},
	},
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
form {
	max-width: 600px;
}
</style>
