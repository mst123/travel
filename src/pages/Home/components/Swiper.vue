<template>
    <div class="wrap">
        <swiper :options="swiperOption">
            <!-- slides -->
			<swiper-slide  v-for="item in swiperList" :key="item.id">
				<img class="swiper-img" :src=item.imgUrl alt="" />
			</swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination" slot="pagination"></div>
            <!-- <div class="swiper-scrollbar" slot="scrollbar"></div> --> 
        </swiper>
    </div>
    
</template>

<script>
export default {
    name: "HomeSwiper",
    data: function () {
        return {
            swiperOption: {
                pagination:'.swiper-pagination'
            },
            swiperList: [{
                id:'0001',
                imgUrl:'../../../assets/img/miao/1551084808808.jpg'
            },
            {
                id:'0002',
                imgUrl:'../../../assets/img/miao/1551084808835.jpg'
            },
            {
                id:'0003',
                imgUrl:'../../../assets/img/miao/1551084808854.jpg'
            },
            {
                id:'0004',
                imgUrl:'../../../assets/img/miao/1551084808872.jpg'
            }]
        };
    },
    mounted() {

    }
    };
</script>
<style scoped>
    /* 穿透模式 */
    .wrap >>> .swiper-pagination-bullet-active{
        background-color: rebeccapurple;
    }
    .wrap{
        height: 0px;
        overflow: hidden;
        width: 100%;
        padding-bottom: 25.15%;
    }
    .swiper-img{
        width: 100%;
        height: 2rem;
    }
</style>