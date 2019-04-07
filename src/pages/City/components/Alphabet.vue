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
				touchStatus: false,
				startY: 0,
				timer: null
			}
		},
		updated() { //ajax加载之后
			this.startY = this.$refs['A'][0].offsetTop
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
					if(this.timer) {
						clearTimeout(this.timer)
					}
					this.timer = setTimeout(() => {
						const touchY = e.touches[0].clientY -79
						const index = Math.floor((touchY - this.startY)/20)
						if(index >=0 && index <= this.letters.length){
							this.$emit('clickLetter',this.letters[index])
						}
					},16)


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
