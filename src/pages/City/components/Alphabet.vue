<template>
	<ul class="list">
		<li class="item"
			v-for="(value, key) of cities"
			:key="key"
			:ref="key"
			@click="handleClick"
			@touchstart="handleTouchStart"
			@touchmove="handleTouchMove"
			@touchend="handleTouchEnd"
		>
			{{key}}
		</li>
	</ul>
</template>
<script>
	export default {
		name: 'CityAlphabet',
		data() {
			return {
				touchStatus: false
			}
		},
		computed: {
			letters: function　(){
				const letters = []
				for (const key in this.cities) {
					letters.push(key)
				}
				return letters
			}
		},
		props: {
			cities: Object
		},
		methods: {
			handleClick (e){
				this.$emit('clickLetter',e.target.innerText)
			},
			handleTouchStart (){
				this.touchStatus = true
			},
			handleTouchMove (e){
				if(this.touchStatus){
					const startY = this.$refs['A'][0].offsetTop
					console.log(this.$refs['A'][0].offsetTop);
					console.log(e);
					const touchY = e.touches[0].clientY -79
					const index = Math.floor((touchY - startY)/20)
					if(index >=0 && index <= this.letters.length){
						this.$emit('clickLetter',this.letters[index])
					}

				}
			},
			handleTouchEnd (){
				this.touchStatus = false
			}
		},
	}
</script>
<style scoped>
	.list{
		position: absolute;
		top: 1.8rem;
		right: 0;
		bottom: 0;
		width: 0.4rem;
		display: flex;
		flex-flow: column;
		justify-content: center;
	}
	.list .item{
		text-align: center;
		line-height: 0.44rem;
		cursor: pointer;
	}
</style>
