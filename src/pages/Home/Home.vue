<template>
    <div>
        <home-header></home-header>
        <home-swiper></home-swiper>
        <home-icons></home-icons>
        <home-recommend></home-recommend>
		<home-weekend></home-weekend>
    </div>
</template>
<script>
import HomeHeader from './components/header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/iconNav'
import HomeRecommend from './components/recommend'
import HomeWeekend from './components/weekend'
import axios from 'axios'
export default {
    name: 'Home',
    components: {
        HomeHeader: HomeHeader,
        HomeSwiper: HomeSwiper,
        HomeIcons: HomeIcons,
		HomeRecommend: HomeRecommend,
		HomeWeekend: HomeWeekend
	},
	methods: {
		getHomeInfo: function (){
			axios.get('/api/home.json')
				.then(this.getHomeInfoSucc)
				.catch((err) => {
					console.log(err);
				})
		},
		getHomeInfoSucc: function (data) {
			console.log(data);
		}
	},
	mounted: function () {
		this.getHomeInfo()
	},
}
</script>
<style>

</style>
