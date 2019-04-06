<template>
	<div class="header">
		城市选择
		<router-link to="/">
            <span class="iconfont header-return">&#xe624;</span>
		</router-link>
	</div>
</template>
<script>
	export default {
		name: 'CityHeader'
	}
</script>
<style scoped>
	.header{
		position: relative;
		overflow: hidden;
		height: 0.86rem;
		line-height: 0.86rem;
		text-align: center;
		color: #ffffff;
		background: #918bf1;
		font-size: 0.32rem;
	}
	.header-return{
		width: 0.64rem;
		position: absolute;
		top: 0;
		left: 0;
		text-align: center;
		font-size: 0.4rem;
		color: #ffffff;
	}

</style>
