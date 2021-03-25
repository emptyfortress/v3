<template lang="pug">
button {{ album.title }}
</template>

<script>

export default {
	props: {
		album: Object
	},
	// setup() {
	// 	return {
	//
	// 	}
	// }
}
</script>

<style lang="scss">
button {
	border: none;
	padding: .7rem 1rem;
	font-size: 1.1rem;
	width: 100%;
	text-align: left;
	margin-bottom: .25rem;
	cursor: pointer;
	outline: none;
	background: darkcyan;
	color: white;
	border-radius: 6px;
	&:hover {
		filter: brightness(110%);
	}
}
</style>
