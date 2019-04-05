<template>
    <div class="wrap">
        <swiper :options="swiperOption" v-if="swiperList.length">
            <!-- slides -->
			<swiper-slide  v-for="item of swiperList" :key="item.id">

				<img class="swiper-img" :src="item.imgUrl" alt="" />
                <!-- <img class="swiper-img" :src='require(item.imgUrl)' alt="" /> -->  <!-- 这个也不好用 -->
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
	props: {
		swiperList: Array
	},
    data: function () {
        return {
            swiperOption: {
                pagination:'.swiper-pagination',
                loop: true
            }
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
