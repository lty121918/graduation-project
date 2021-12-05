<template>
<header class="header">
<ul class="header_left">
    <li>首页</li>
    <li>股票</li>
    <li>财经</li>
    <li>基金</li>
    <li>理财产品</li>
    <li>论坛</li>

</ul>
<ul class="header_right">
    <li>登录</li>
    <li>注册</li>
</ul>
</header>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
header{
    width: 100vw;
    display: flex;
    height: 50px;
    background-color: aqua;
    justify-content: space-around;
 ul{
    display: flex;
    list-style-type: none;
     background-color: aquamarine;
     li{
         margin: 0 10px;
         line-height: 50px;
     }
 }

}

</style>