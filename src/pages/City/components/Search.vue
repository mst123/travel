<template>
	<div>
		<div class="search">
			<input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音" />
		</div>
		<div class="search-content" v-show="keyword" ref="search">
			<ul>
				<li class="search-item" v-for="item of list" :key="item.id" @click="handleCityClick(item.name)">{{item.name}}</li>
				<li v-show="!list.length">没有找到匹配数据</li>
			</ul>
		</div>
	</div>
</template>
<script>
	import Bscroll from 'better-scroll'
	export default {
		name: 'CitySearch',
		data() {
			return {
				keyword: '',
				list: [],
				timer:null
			}
		},
		props: {
			cities: Object
		},

		methods: {
			handleCityClick (city){
				console.log(city);
				this.$store.commit('changeCity', city)
				this.$router.push('/')
				// this.$store.dispatch('changeCity', city)
			}
		},
		watch: {
			keyword (){
				if (this.timer) {
					clearTimeout(this.timer)
				}
				if(!this.keyword){
					this.list = []
					return
				}
				this.timer = setTimeout(() => {
					const result = [];
					for (const i in this.cities) {
						this.cities[i].forEach((value) => {
							if(value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1){
								result.push(value)
							}
						});
					}
					this.list = result;
				},100)
			}
		},
		mounted() {
			this.scroll = new Bscroll(this.$refs.search)
		}
	}
</script>
<style scoped>
	.search{
		height: 0.82rem;
		padding: 0.1rem;
		background: #918bf1;
		width: 100%;
		box-sizing: border-box;
	}
	.search-input{
		width: 100%;
		text-align: center;
		height: 0.62rem;
		line-height: 0.62rem;
		border-radius: 0.06rem;
		padding: 0 0.1rem;
		box-sizing: border-box;
	}
	.search-content{
		overflow: hidden;
		position: absolute;
		top: 1.8rem;
		left: 0;
		right: 0;
		bottom: 0;
		background: #eeeeee;
		z-index: 1;
	}
	.search-item{
		line-height: 0.62rem;
		padding-left: 0.2rem;
		color: #666666;
		background: #ffffff;
	}
</style>
