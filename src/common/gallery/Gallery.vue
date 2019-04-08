<template>
    <div class="container" @click="handleGalleryClick">
        <div class="wrapper">
            <swiper :options="swiperOption">
                <!-- slides -->
                <swiper-slide v-for="(item, index) of imgs" :key="index">
                    <img class="swiper-img" :src="item" alt="" />
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
                <!-- <div class="swiper-scrollbar" slot="scrollbar"></div> -->
            </swiper>
        </div>
   </div>
</template>
<script>
export default {
    name: 'CommonGallery',
    props: {
        imgs: {
            type: Array,
            default (){
                return []
            }
        }
    },
    methods: {
        handleGalleryClick (){
            this.$emit('close')
        }
    },
    data: function () {
        return {
            swiperOption: {
                pagination:'.swiper-pagination',
                paginationType : 'fraction',
                loop: true,
                observeParents: true,//解决隐藏后显示之后带来的滚动bug
                observer: true,       //解决隐藏后显示之后带来的滚动bug
            }
        };
    },
}
</script>
<style scoped>
    .container >>> .swiper-container{
        overflow: inherit;
    }
    .container{
        position: fixed;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        background: #000000;
        z-index: 99;
        display: flex;
        flex-flow: column;
        justify-content: center;
    }
    .wrapper{
        background: #ffffff;
        height: 0;
        width: 100%;
        padding-bottom: 100%;
    }
    .swiper-img{
        width: 100%;
    }
    .swiper-pagination{
        color: #ffffff;
        bottom: -4rem;
    }
</style>
