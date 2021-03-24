<template lang="pug">
div(@click="setHashtag").hash ~{{ hash }}
</template>

<script>
import {store} from './store.js'
export default {
	props: ['hash'],
	setup(props) {
		const setHashtag = () => { 
			store.setHashtag(props.hash)
		}
		return {
			setHashtag,
		}
	}
}
</script>

<style lang="scss">
.hash {
	margin: 0 5px;
	font-size: 0.9rem;
	height: 100%;
	color: darkslateblue;
	&:hover {
		text-decoration: underline;
	}
}

</style>
