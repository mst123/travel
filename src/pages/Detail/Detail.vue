<template>
	<div>
		<detail-banner></detail-banner>
        <detail-header></detail-header>
        <div class="content">
            <detail-list :list="list"></detail-list>
        </div>
	</div>
</template>
<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'
export default {
	name: 'Detail',
	components: {
        DetailBanner: DetailBanner,
        DetailHeader: DetailHeader,
        DetailList: DetailList
    },
    data() {
        return {
            list: []
        }
    },
    methods: {
        getDetailInfo: function (){
            axios.get('./static/mock/detail.json',{
                params: {
                    id: this.$route.params.id
                }
            }).then(
                this.hanleGetDataSucc
            ).catch((err) => {
                console.log(err);
            })
        },
        hanleGetDataSucc: function (res){
            console.log(res)
           const data = res.data.data          
           this.list = data.categoryList
        }
    },
    mounted() {
        this.getDetailInfo ()
    },
}
</script>
<style scoped>
    .content{
        height: 50rem;
    }
</style>
