<template>
    <div>
        <home-header></home-header>
        <home-swiper></home-swiper>
        <home-icons></home-icons>
    </div>
</template>
<script>
import HomeHeader from './components/header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/iconNav'
export default {
    name: 'Home',
    components: {
        HomeHeader: HomeHeader,
        HomeSwiper: HomeSwiper,
        HomeIcons: HomeIcons
    }
}
</script>
<style>
    
</style>