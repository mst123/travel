<template>
    <div>
        <div class="recommend-title">
            热门推荐
        </div>
        <ul>
            <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
                <img class="item-img" :src="item.imgUrl" alt="">
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.describe}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>

</template>
<script>
export default {
    name: 'HomeRecommend',
    data: function () {
        return {
            recommendList: [{
                id: '0001',
                imgUrl: 'https://www.w3cplus.com/sites/default/files/blogs/w3cplus-ad-160.png',
                title:'大连海洋馆',
                describe:'阿斯达撒旦撒旦多啥多啥多'
            },{
                id: '0002',
                imgUrl: 'https://www.w3cplus.com/sites/default/files/blogs/w3cplus-ad-160.png',
                title:'大连海洋馆',
                describe:'阿斯达撒旦撒旦多啥多啥多'
            },{
                id: '0003',
                imgUrl: 'https://www.w3cplus.com/sites/default/files/blogs/w3cplus-ad-160.png',
                title:'大连海洋馆',
                describe:'阿斯达撒旦撒旦多啥多啥多'
            },{
                id: '0004',
                imgUrl: 'https://www.w3cplus.com/sites/default/files/blogs/w3cplus-ad-160.png',
                title:'大连海洋馆',
                describe:'阿斯达撒旦撒旦多啥多啥多'
            },{
                id: '0005',
                imgUrl: 'https://www.w3cplus.com/sites/default/files/blogs/w3cplus-ad-160.png',
                title:'大连海洋馆',
                describe:'阿斯达撒旦撒旦多啥多啥多'
            },{
                id: '0006',
                imgUrl: 'https://www.w3cplus.com/sites/default/files/blogs/w3cplus-ad-160.png',
                title:'大连海洋馆',
                describe:'阿斯达撒旦撒旦多啥多啥多'
            }]
        }
    },
}
</script>s
<style scoped>
    .recommend-title{
        line-height: 0.8rem;
        background: #cccccc;
        text-indent: 0.4rem;
        margin-top: 0.4rem;
    }
    .item{
        display: flex;
        height: 1.9rem;
        overflow: hidden;
    }
    .item-img{
        height: 1.7rem;
        width: 1.7rem;
        padding: 0.1rem;
    }
    .item-info{
        flex: 1;
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
    .item-button{
        background: #ff9300;
        padding: 0 0.2rem;
        border-radius: 0.06rem;
        margin-top: 0.2rem
    }
</style>
