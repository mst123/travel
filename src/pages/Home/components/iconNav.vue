<template>
    <div class="icons">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(page, index) of pages" :key="index">
                <div class="icon" v-for="item of page" :key="item.id">
                    <div class="img-box">
                        <img :src="item.imgUrl" alt="" >
                    </div>

                    <p class="nav-des" v-text="item.desc"></p>
                </div>
            </swiper-slide>

        </swiper>
    </div>
</template>
<script>
export default {
	name:'HomeIcons',
	props: {
		iconList: Array
	},
    data: function () {
        return {
            swiperOption: {

            }
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
