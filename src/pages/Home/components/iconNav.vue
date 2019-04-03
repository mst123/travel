<template>
    <div class="icons">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(page, index) of pages" :key="index">
                <div class="icon" v-for="item of page" :key="item.id">
                    <div class="img-box">
                        <img :src="item.imgUrl" alt="" >
                    </div>
                
                    <p class="nav-des" v-text="item.des"></p>
                </div>   
            </swiper-slide>

        </swiper>    
    </div>
</template>
<script>
export default {
    name:'HomeIcons',
    data: function () {
        return {
            swiperOption: {
                
            },
            iconList: [{
                id: '0001',
                imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554211021057&di=3c56e4343daad044c801adec1632592c&imgtype=0&src=http%3A%2F%2Fcdn6.haitou.cc%2Fcompany%2Flogo%2F62%2F5262_7e20.png%3Fv%3D1460098902',
                des: '景点门票'
            },
            {
                id: '0002',
                imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554211021057&di=3c56e4343daad044c801adec1632592c&imgtype=0&src=http%3A%2F%2Fcdn6.haitou.cc%2Fcompany%2Flogo%2F62%2F5262_7e20.png%3Fv%3D1460098902',
                des: '滑雪季'
            },
            {
                id: '0003',
                imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554211021057&di=3c56e4343daad044c801adec1632592c&imgtype=0&src=http%3A%2F%2Fcdn6.haitou.cc%2Fcompany%2Flogo%2F62%2F5262_7e20.png%3Fv%3D1460098902',
                des: '泡温泉'
            },
            {
                id: '0004',
                imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554211021057&di=3c56e4343daad044c801adec1632592c&imgtype=0&src=http%3A%2F%2Fcdn6.haitou.cc%2Fcompany%2Flogo%2F62%2F5262_7e20.png%3Fv%3D1460098902',
                des: '动植物园'
            },
            {
                id: '0005',
                imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554211021057&di=3c56e4343daad044c801adec1632592c&imgtype=0&src=http%3A%2F%2Fcdn6.haitou.cc%2Fcompany%2Flogo%2F62%2F5262_7e20.png%3Fv%3D1460098902',
                des: '一日游'
            },
            {
                id: '0006',
                imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554211021057&di=3c56e4343daad044c801adec1632592c&imgtype=0&src=http%3A%2F%2Fcdn6.haitou.cc%2Fcompany%2Flogo%2F62%2F5262_7e20.png%3Fv%3D1460098902',
                des: '必游榜单'
            },
            {
                id: '0007',
                imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554211021057&di=3c56e4343daad044c801adec1632592c&imgtype=0&src=http%3A%2F%2Fcdn6.haitou.cc%2Fcompany%2Flogo%2F62%2F5262_7e20.png%3Fv%3D1460098902',
                des: '自然风光'
            },
            {
                id: '0008',
                imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554211021057&di=3c56e4343daad044c801adec1632592c&imgtype=0&src=http%3A%2F%2Fcdn6.haitou.cc%2Fcompany%2Flogo%2F62%2F5262_7e20.png%3Fv%3D1460098902',
                des: '异国风情'
            },
            {
                id: '0009',
                imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554211021057&di=3c56e4343daad044c801adec1632592c&imgtype=0&src=http%3A%2F%2Fcdn6.haitou.cc%2Fcompany%2Flogo%2F62%2F5262_7e20.png%3Fv%3D1460098902',
                des: '全部'
            }]
        };
    },
    computed: {
        pages: function () {
            const pages = []
            this.iconList.forEach((item, index) => {
                const page = Math.floor( index/8 )
                if(!pages[page]){
                    pages[page] = []
                }
                pages[page].push(item)
            });
            return pages
        }
    },
}
</script>
<style scoped>
    .icons >>> .swiper-container{
        height: 0;
        padding-bottom: 50%;
    }
    .icons{
        height: 0;
        padding-bottom: 50%;
    }
    .icons .icon{
        width: 25%;
        height: 0;
        padding-bottom: 25%;
        overflow: hidden;
        position: relative;
        float: left;
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
    .nav-des{
        height: 0.44rem;
        line-height: 0.44rem;
        text-align: center;
        position: absolute;
        bottom: 0;
        width: 100%;
    }
</style>