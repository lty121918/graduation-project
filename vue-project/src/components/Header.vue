<template>
    <header class="header">
        <div class="header-container">
            <div class="header-container__left">
                <div class="header__left__logo">
                    <img src="" alt="">
                </div>
                <el-menu class="el-menu-demo" mode="horizontal" active-text-color="#fff" background-color="#1369bf" text-color="#fff">
                    <el-menu-item index="1">首页</el-menu-item>
                    <el-submenu index="2">
                        <template slot="title">精华</template>
                        <el-menu-item index="2-1">今日话题</el-menu-item>
                        <el-menu-item index="2-2">名人访谈</el-menu-item>
                        <el-menu-item index="2-3">找人</el-menu-item>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title">行情</template>
                        <el-menu-item index="3-1">行情中心</el-menu-item>
                        <el-menu-item index="3-2">筛选器</el-menu-item>
                        <el-menu-item index="3-3">新股上市</el-menu-item>
                        <el-menu-item index="3-3">买什么</el-menu-item>
                    </el-submenu>
                    <el-submenu index="4">
                        <template slot="title">交易</template>
                        <el-menu-item index="4-1">A股交易</el-menu-item>
                        <el-menu-item index="4-2">蛋卷基金</el-menu-item>
                        <el-menu-item index="4-3">私募中心</el-menu-item>
                    </el-submenu>
                </el-menu>

                <div class="header-container__search">
                    <el-select placeholder="搜索" size="small" filterable remote></el-select>
                </div>
            </div>
            <div class="header__right">
                <div class="header__right__app">下载app</div>
                <button class="header__right__login">登录/注册</button>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {};
    },
    methods: {

    },
};
</script>
<style>
.el-menu {
    background-color: #fff !important;
}
.header .el-menu-demo {
    border: none !important;
}
.header .el-menu-item {
    border: 0px !important;
    border: none !important;
}
.header .el-menu-demo > .el-menu-item {
    font-size: 16px;
}
.header .el-menu-demo .el-submenu__title {
    font-size: 16px;
}
.header .el-submenu__title {
    border: none !important;
}
.el-menu--popup > .el-menu-item {
    background: #fff !important;
    color: #666c72 !important;
}
</style>
<style lang="less" scoped>


@b:header;
 .@{b}{
    position: fixed;
    background: #1369bf;
    left: 0;
    top: 0;
    z-index: 999;
    width: 100%;
    color: #fff;
    &__container {
        width: 980px;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row;
        }
        &__left {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
        }
        &__right {
            display: flex;
            &__app{
                font-size: 14px;
                margin: auto;
                margin-right: 15px;
            }
            &__login{
                width: 128px;
                padding: 6px 0px;
                text-align: center;
                font-size: 15px;
                border: 1px #FFF solid ;
                border-radius: 32px;
                vertical-align: middle;
                color: #fff;
                cursor: pointer;
                background-color: transparent;
            }
        }
    
}
</style>