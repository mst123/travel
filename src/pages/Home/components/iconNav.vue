<template>
    <div class="icons">
        <div class="icon">
            <div class="img-box">
                 <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554211021057&di=3c56e4343daad044c801adec1632592c&imgtype=0&src=http%3A%2F%2Fcdn6.haitou.cc%2Fcompany%2Flogo%2F62%2F5262_7e20.png%3Fv%3D1460098902" alt="" >
            </div>
           
            <p class="nav-des">热门景点</p>
        </div>
    </div>
</template>
<script>
export default {
    name:'HomeIcons'
}
</script>
<style scoped>
    .icons{
        height: 0;
        padding-bottom: 50%;
        background: green;
    }
    .icons .icon{
        width: 25%;
        height: 0;
        padding-bottom: 25%;
        background: red;
        overflow: hidden;
        position: relative;
        
    }
    .icons .icon .img-box{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0.44rem;
        box-sizing: border-box;
        padding: 0.1rem;
    }
    .icons .icon .img-box img{
        height: 100%;
        width: 100%;
        display: block;
        margin: 0 auto;
    }
</style>