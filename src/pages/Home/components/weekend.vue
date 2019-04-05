<template>
    <div>
        <div class="recommend-title">
            周末去哪
        </div>
        <ul>
            <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
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
    data: function () {
        return {
            recommendList: [{
                id: '0001',
                imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554372807378&di=4402512cfa224a313d6c0eb26e1002eb&imgtype=0&src=http%3A%2F%2Fpic2.16pic.com%2F00%2F07%2F65%2F16pic_765502_b.jpg',
                title:'日本',
                describe:'阿斯达撒旦撒旦多啥多啥多'
            },{
                id: '0002',
                imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554372807378&di=4402512cfa224a313d6c0eb26e1002eb&imgtype=0&src=http%3A%2F%2Fpic2.16pic.com%2F00%2F07%2F65%2F16pic_765502_b.jpg',
                title:'法国',
                describe:'阿斯达撒旦撒旦多啥多啥多'
            },{
                id: '0003',
                imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554372807378&di=4402512cfa224a313d6c0eb26e1002eb&imgtype=0&src=http%3A%2F%2Fpic2.16pic.com%2F00%2F07%2F65%2F16pic_765502_b.jpg',
                title:'南京',
                describe:'阿斯达撒旦撒旦多啥多啥多'
            },{
                id: '0004',
                imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554372807378&di=4402512cfa224a313d6c0eb26e1002eb&imgtype=0&src=http%3A%2F%2Fpic2.16pic.com%2F00%2F07%2F65%2F16pic_765502_b.jpg',
                title:'武汉',
                describe:'阿斯达撒旦撒旦多啥多啥多'
            },{
                id: '0005',
                imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554372807378&di=4402512cfa224a313d6c0eb26e1002eb&imgtype=0&src=http%3A%2F%2Fpic2.16pic.com%2F00%2F07%2F65%2F16pic_765502_b.jpg',
                title:'巴黎',
                describe:'阿斯达撒旦撒旦多啥多啥多'
            },{
                id: '0006',
                imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554372807378&di=4402512cfa224a313d6c0eb26e1002eb&imgtype=0&src=http%3A%2F%2Fpic2.16pic.com%2F00%2F07%2F65%2F16pic_765502_b.jpg',
                title:'印度洋',
                describe:'阿斯达撒旦撒旦多啥多啥多'
            }]
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
