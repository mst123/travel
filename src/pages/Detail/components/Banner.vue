<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" src="https://himg1.qunarzz.com/imgs/201811/30/C._M0DCifUaginvYBai480.jpg" alt="">
            <div class="banner-info">
                <div class="banner-title">沙嗲假哦个按实际哦个决赛</div>
                <div class="banner-number"><span class="iconfont banner-icon">&#xe624;</span>39</div>
            </div>
        </div>
        <common-gallery :imgs="imgs" v-show="showGallery" @close="galleryClose"></common-gallery>
    </div>
</template>
<script>
import CommonGallery from 'common/gallery/Gallery'
export default {
    name: 'DetailBanner',
    components: {
        CommonGallery: CommonGallery
    },
    data() {
        return {
            imgs: [
                "https://himg1.qunarzz.com/imgs/201811/30/C._M0DCifUaginvYBai480.jpg",
                "https://himg2.qunarzz.com/imgs/201811/30/C._M0DCiiyfb7F1H4xi480.jpg",
                "https://himg3.qunarzz.com/imgs/201811/30/C._M0DCiiyynJIZCEOi480.jpg",
                "https://himg2.qunarzz.com/imgs/201811/30/C._M0DCiiyyqwBymFVi480.jpg"
            ],
            showGallery:false
        }
    },
    methods: {
        handleBannerClick (){
            this.showGallery = true
        },
        galleryClose (){
            this.showGallery = false
        },
    },
}
</script>
<style scoped>
	.banner{
		position: relative;
		overflow: hidden;
		height: 0;
		padding-bottom: 55%;
	}
	.banner-img{
		width: 100%;
	}
	.banner-info{
		display: flex;
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		line-height: 0.6rem;
		color: #ffffff;
        background: linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,0.8) )
	}
	.banner-title{
		flex: 1;
		font-size: 0.32rem;
		padding: 0 0.2rem;
	}
	.banner-number{
		margin-top: 0.14rem;
		padding: 0 0.4rem;
		line-height: 0.4rem;
		height: 0.32rem;
		border-radius: 0.2rem;
		background: rgba(0, 0, 0, 0.8);
		font-size: 0.24rem;
	}
	.banner-icon{
		font-size: 0.24rem;
	}
</style>
