<template>
    <div class="header">
        <div class="header-left">
            <span class="iconfont icon-return">&#xe624;</span>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe632;</span>
            输入城市、景点
		</div>
		<router-link to="/city">
			<div class="header-right">
				<!-- {{this.city}} -->
				{{this.doubleCity}}
				<!-- {{this.$store.state.city}} -->
				<span class="iconfont icon-arrow">&#xe606;</span>
			</div>
		</router-link>

    </div>
</template>
<script>
import {mapState,mapGetters} from 'vuex'
export default {
	name: 'HomeHeader',
	computed: {
		...mapState(['city']),
		...mapGetters(['doubleCity'])
	},
}
</script>
<style scoped>
    .header{
        height: 0.86rem;
        display: flex;
        background: #00badc;
        color: #ffffff;
        line-height: 0.86rem;
    }
    .header-left{
        width: 0.64rem;
        text-align: center;
    }
    .header-left .icon-return{
        text-align: center;
        font-size: 0.4rem;
    }
    .header-right{
        min-width: 1.24rem;
		padding: 0 0.1rem;
        text-align: center;
    }
    .header-right .icon-arrow{
        font-size: 0.24rem;
    }
    .header-input{
        flex: 1;
        background: #ffffff;
        height: 0.64rem;
        line-height: 0.64rem;
        margin-top: 0.12rem;
        border-radius: 0.1rem;
        color: #cccccc;
        padding-left: 0.2rem
    }
</style>
