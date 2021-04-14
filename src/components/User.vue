<template lang="pug">
.icon.blue
	img(src="@/assets/user1.svg")
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.icon {
	border-radius: 50%;
	width: 24px;
	height: 24px;
	text-align: center;
	&.blue {
		background: #0096DC;
	}
	&.grey {
		background: #999;
	}
	&.green {
		background: #B8E986;
	}
	img {
		width: 15px;
		margin-top: 4px;
	}
}
</style>
