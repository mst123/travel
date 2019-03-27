<template>
    <div>
        <div class="home">home</div>
        <router-link class="home" to="/list">列表页</router-link>
    </div>
</template>
<script>
export default {
    name: 'Home'
}
</script>
<style>
    ul,li{
        list-style:none;
    }
    .home{
        font-size: 50px;
    }
</style>