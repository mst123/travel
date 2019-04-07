<template>
	<div>
		<city-header></city-header>
		<city-search :cities="cities"></city-search>
		<city-list :letter="letter" v-bind="cityData"></city-list>
		<city-alphabet @clickLetter="clickLetter" :cities="cities"></city-alphabet>
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
				cityData: {},
				letter: '',
				cities: {},
				hotCities: ''
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
					this.cities = data.data.data.cities
					this.hotCities = data.data.data.hotCities
				}
			},
			clickLetter (letter){
				this.letter = letter
			}
		},
		mounted() {
			this.getCityInfo()
		},
	}
</script>
<style scoped>

</style>
