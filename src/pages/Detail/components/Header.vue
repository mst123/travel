<template>
	<div>
		<router-link tag="div" to="/" class="header-abs" v-show="showAbs">
			<span class="iconfont icon-return">&#xe624;</span>
		</router-link>
        <div class="header-fixed"  v-show="!showAbs" :style="opacityStyle">
            经典详情
            <router-link to="/">
                <span class="iconfont header-return">&#xe624;</span>
            </router-link>
		</div>
	</div>
</template>
<script>
export default {
	name: 'DetailHeader',
	components: {

    },
    methods: {
        handleScroll: function (){
            let top = document.documentElement.scrollTop
            if (top >= 60 && top <= 140) {
                this.showAbs = false
                this.opacityStyle = {
                    opacity: (top-60)/80
                } 
                this.opacityStyle.opacity = (top-60)/80
            } else if(top >= 140) {
                this.showAbs = false 
            } else if(top <= 60){
                this.showAbs = true 
            }
        }
    },
    data() {
        return {
            showAbs: true,
            opacityStyle:{
                opacity: 1
            }
        }
    },
    activated() { //keepalive 后才会有的钩子函数 每当组件展示都会执行
        window.addEventListener('scroll',this.handleScroll)
        //事件解绑
    },
    deactivated() {  //与上述方法对应
         window.removeEventListener('scroll',this.handleScroll)
    },
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
        text-align: center;
	}
    .header-fixed{
        position: fixed;
        z-index: 20;
        top: 0;
        left: 0;
		overflow: hidden;
		height: 0.86rem;
		line-height: 0.86rem;
		text-align: center;
		color: #ffffff;
		background: #918bf1;
		font-size: 0.32rem;
		width: 100%;
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
