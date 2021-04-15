<template lang="pug">
.icon(:class="color")
	img(src="@/assets/user1.svg")
	.otvet(v-if="otvet") O
	.contr(v-if="contr") K
	.done(v-if="done")
		img(src="@/assets/check.svg")
	.time(v-if="time")
		img(src="@/assets/time.svg")
</template>

<script>
export default {
	props: ['color', 'done', 'contr', 'otvet', 'time']
}
</script>

<style scoped lang="scss">
.icon {
	border-radius: 50%;
	width: 24px;
	height: 24px;
	position: relative;
	text-align: center;
	margin-right: 5px;
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
.otvet {
	font-size: 10px;
	color: #fff;
	width: 11px;
	height: 11px;
	background: #C633E3;
	border-radius: 50%;
	border: 1px solid #fff;
	position: absolute;
	top: -4px;
	left: -6px;
}
.contr {
	font-size: 10px;
	color: #fff;
	width: 11px;
	height: 11px;
	background: orange;
	border-radius: 50%;
	border: 1px solid #fff;
	position: absolute;
	top: -4px;
	right: -6px;
}
.time {
	width: 11px;
	height: 11px;
	background: red;
	border-radius: 50%;
	border: 1px solid #fff;
	position: absolute;
	bottom: -4px;
	left: -6px;
	img {
		transform: translateY(-3px);
		width: 7px;
	}
}
.done {
	width: 11px;
	height: 11px;
	background: green;
	border: 1px solid #fff;
	position: absolute;
	bottom: -4px;
	right: -6px;
	img {
		transform: translateY(-4px);
		width: 8px;
	}
}
</style>
