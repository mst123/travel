<template>
    <div>
        <div class="recommend-title">
            周末去哪
        </div>
        <ul>
            <li class="item border-bottom" v-for="item of weekendList" :key="item.id">
				<div class="item-img-wrapper">
					<img class="item-img" :src="item.imgUrl" alt="" />
				</div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.describe}}</p>
                </div>
            </li>
        </ul>
    </div>

</template>
<script>
export default {
	name: 'HomeWeekend',
	props: {
		weekendList: Array
	},
    data: function () {
        return {

        }
    },
}
</script>
<style scoped>
    .recommend-title{
        line-height: 0.8rem;
        background: #cccccc;
        text-indent: 0.4rem;
    }
	.item-img-wrapper{
		overflow: hidden;
		height: 0;
		padding-bottom: 33.9%;
	}
    .item-img{
        width: 100%;
    }
    .item-info{
        padding: 0.1rem;
        /* min-width: 0; */
    }
    .item-title{
        line-height: 0.54rem;
        font-size: 0.32rem;
        white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsis;
    }
    .item-desc{
        line-height: 0.4rem;
        color: #cccccc;
    }
</style>
