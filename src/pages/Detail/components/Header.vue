<template>
	<div>
		<div class="header-abs">
			<span class="iconfont icon-return">&#xe624;</span>
		</div>
        <div class="header-fixed">

		</div>
	</div>
</template>
<script>
export default {
	name: 'DetailHeader',
	components: {

	}
}
</script>
<style scoped>
    .header-abs{
        position: absolute;
        left: 0.2rem;
        top: 0.2rem;
        width: 0.8rem;
        height: 0.8rem;
        border-radius: 0.4rem;
        background: rgba(0, 0, 0, 0.8);
		line-height: 0.8rem;
    }
	.icon-return{
		color: #ffffff;
		font-size: 0.4rem;
	}
</style>
