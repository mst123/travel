<template>
	<div>
		<city-header></city-header>
		<city-search></city-search>
		<city-list v-bind="cityData"></city-list>
		<city-alphabet v-bind="cityData"></city-alphabet>
	</div>
</template>
<script>
	import axios from 'axios'
	import CityHeader from './components/Header'
	import CitySearch from './components/Search'
	import CityList from './components/List'
	import CityAlphabet from './components/Alphabet'
	export default {
		name: 'City',
		components: {
			CityHeader: CityHeader,
			CitySearch: CitySearch,
			CityList: CityList,
			CityAlphabet: CityAlphabet
		},
		data() {
			return {
				cityData:{}
			}
		},
		methods: {
			getCityInfo (){
				axios.get('/api/city.json')
					.then(this.getCityInfoSuc)
					.catch((err) => {
						console.log(err);
					})
			},
			getCityInfoSuc (data){
				if (data.data.ret) {
					this.cityData = data.data.data
				}
			}
		},
		mounted() {
			this.getCityInfo()
		},
	}
</script>
<style scoped>

</style>
