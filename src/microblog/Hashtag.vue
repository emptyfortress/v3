<template lang="pug">
div(@click="setHashtag").hash ~{{ hash }}
</template>

<script>

export default {
	props: ['hash'],
	setup(props, ctx) {
		const setHashtag = () => { 
			ctx.emit('setHashtag', props.hash) 
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
