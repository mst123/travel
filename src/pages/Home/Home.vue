<template>
    <div>
        <home-header></home-header>
        <home-swiper :swiperList="swiperList"></home-swiper>
        <home-icons :iconList="iconList"></home-icons>
        <home-recommend :recommendList="recommendList"></home-recommend>
		<home-weekend :weekendList="weekendList"></home-weekend>
    </div>
</template>
<script>
import HomeHeader from './components/header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/iconNav'
import HomeRecommend from './components/recommend'
import HomeWeekend from './components/weekend'
import axios from 'axios'
import { mapState } from 'vuex'
export default {
    name: 'Home',
    components: {
        HomeHeader: HomeHeader,
        HomeSwiper: HomeSwiper,
        HomeIcons: HomeIcons,
		HomeRecommend: HomeRecommend,
		HomeWeekend: HomeWeekend
	},
	data() {
		return {
			swiperList: [],
			iconList: [],
			recommendList: [],
			weekendList: [],
			lastCity:''
		}
	},
	methods: {
		getHomeInfo: function (){
			axios.get('/api/home.json?city='+this.city)
				.then(this.getHomeInfoSucc)
				.catch((err) => {
					console.log(err);
				})
		},
		getHomeInfoSucc: function (data) {
			console.log(data);
			const res = data.data
			if(res.ret){
				this.swiperList = res.data.swiperList
				this.iconList = res.data.iconList
				this.recommendList = res.data.recommendList
				this.weekendList = res.data.weekendList
			}

		}
	},
	mounted: function () {
		this.getHomeInfo()
		this.lastCity = this.city
	},
	computed: {
		...mapState['city']
	},
	activated() {
		if(this.lastCity !== this.city){
			this.lastCity = this.city
			this.getHomeInfo()
		}
	},
}
</script>
<style>

</style>
