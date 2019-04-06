<template>
	<ul class="list">
		<li class="item">A</li>
		<li class="item">A</li>
		<li class="item">A</li>
		<li class="item">A</li>
	</ul>
</template>
<script>
	export default {
		name: 'CityAlphabet',
		mounted() {

		},
	}
</script>
<style scoped>
	.list{
		position: absolute;
		top: 1.8rem;
		right: 0;
		bottom: 0;
		width: 0.4rem;
		display: flex;
		flex-flow: column;
		justify-content: center;
	}
	.list .item{
		text-align: center;
		line-height: 0.44rem;
	}
</style>
