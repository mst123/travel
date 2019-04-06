<template>
	<div class="list" ref="scrollWrapper">
		<div>
			<div class="area">
				<div class="title border-topbottom">当前城市</div>
				<div class="button-list">
					<div class="button-wrapper">
						<div class="button">
							北京
						</div>
					</div>
				</div>
			</div>
			<div class="area">
				<div class="title border-topbottom">热门城市</div>
				<div class="button-list">
					<div class="button-wrapper">
						<div class="button">
							北京
						</div>
					</div>
					<div class="button-wrapper">
						<div class="button">
							北京
						</div>
					</div>
					<div class="button-wrapper">
						<div class="button">
							北京
						</div>
					</div>
					<div class="button-wrapper">
						<div class="button">
							北京
						</div>
					</div>
					<div class="button-wrapper">
						<div class="button">
							北京
						</div>
					</div>
				</div>
			</div>
			<div class="area">
				<div class="title border-topbottom">A</div>
				<div class="item-list">
					<div class="item border-bottom"> 阿拉尔 </div>
					<div class="item border-bottom"> 阿拉尔 </div>
					<div class="item border-bottom"> 阿拉尔 </div>
					<div class="item border-bottom"> 阿拉尔 </div>
					<div class="item border-bottom"> 阿拉尔 </div>
					<div class="item border-bottom"> 阿拉尔 </div>
					<div class="item border-bottom"> 阿拉尔 </div>
					<div class="item border-bottom"> 阿拉尔 </div>
					<div class="item border-bottom"> 阿拉尔 </div>
				</div>
				<div class="title border-topbottom">A</div>
				<div class="item-list">
					<div class="item border-bottom"> 阿拉尔 </div>
					<div class="item border-bottom"> 阿拉尔 </div>
					<div class="item border-bottom"> 阿拉尔 </div>
					<div class="item border-bottom"> 阿拉尔 </div>
					<div class="item border-bottom"> 阿拉尔 </div>
					<div class="item border-bottom"> 阿拉尔 </div>
					<div class="item border-bottom"> 阿拉尔 </div>
					<div class="item border-bottom"> 阿拉尔 </div>
					<div class="item border-bottom"> 阿拉尔 </div>
				</div>
				<div class="title border-topbottom">A</div>
				<div class="item-list">
					<div class="item border-bottom"> 阿拉尔 </div>
					<div class="item border-bottom"> 阿拉尔 </div>
					<div class="item border-bottom"> 阿拉尔 </div>
					<div class="item border-bottom"> 阿拉尔 </div>
					<div class="item border-bottom"> 阿拉尔 </div>
					<div class="item border-bottom"> 阿拉尔 </div>
					<div class="item border-bottom"> 阿拉尔 </div>
					<div class="item border-bottom"> 阿拉尔 </div>
					<div class="item border-bottom"> 阿拉尔 </div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import Bscroll from 'better-scroll'
	export default {
		name: 'CityList',
		mounted() {
			this.scroll = new Bscroll(this.$refs.scrollWrapper)

		},
	}
</script>
<style scoped>
	.list{
		overflow: hidden;
		position: absolute;
		top: 1.80rem;
		left: 0;
		bottom: 0;
		right: 0;
		width: 100%;
	}
	.area{
		min-height: 0.4rem;
		line-height: 0.4rem;
		font-size: 0.32rem;
		overflow: hidden;
		color: #666666;
	}
	.area .title{
		background: #eeeeee;
		padding-left: 0.2rem;
	}
	.button-list{
		overflow: hidden;
		padding: 0.1rem 0.6rem 0.1rem 0.1rem;
		background: #ffffff;
	}
	.button-wrapper{
		float: left;
		width: 33.33%;
	}
	.button-wrapper .button{
		margin: 0.1rem;
		padding: 0.1rem 0;
		text-align: center;
		border: 0.02rem solid #cccccc;
		border-radius: 0.06rem;
	}
	.item-list{
		min-height: 0;
	}
	.item-list .item{
		line-height: 0.76rem;
		color: #666666;
		padding-left: 0.2rem;
	}
	.border-bottom::before{
	 	border-color: #666666;
	}
	.border-bottom::before{
	 	border-color: #666666;
	}
</style>
