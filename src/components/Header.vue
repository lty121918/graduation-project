<template>
  <header class="header">
    <div class="header-container">
      <div class="header-left">
        <div class="header__logo">
          <img src="../assets/logo.png" alt />
        </div>
        <el-menu
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          active-text-color="#fff"
          background-color="#1369bf"
          text-color="#fff"
        >
          <el-menu-item index="1" @click="goHome">首页</el-menu-item>
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

        <div class="header__search">
          <el-select
            placeholder="搜索"
            v-model="value"
            size="small"
            multiple
            filterable
            remote
          ></el-select>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-sousuo" />
          </svg>
        </div>
      </div>
      <div class="header-right">
        <div class="header__app">下载app</div>
        <button class="header__login">登录/注册</button>
      </div>
    </div>
    <login></login>
  </header>
</template>
<script>
import login from "./login/index.vue"
export default {
  data() {
    return {
      activeIndex: "1",
      value: [],
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    goHome() {
      this.$router.push("/");
    },
  },
  components:{
    login
  }
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
  padding-left: 10px;
  padding-right: 10px;
}
.header .el-submenu__title {
  border: none !important;
}
.el-menu--popup > .el-menu-item {
  background: #fff !important;
  color: #666c72 !important;
}
</style>
<style>
@import "../assets/iconfont/iconfont.css";
</style>
<style lang="less" scoped>
@b: header;
.@{b} {
  position: fixed;
  background: #1369bf;
  left: 0;
  top: 0;
  z-index: 999;
  width: 100%;
  color: #fff;
  &-container {
    width: 980px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
  }
  &-left {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  &__search {
    .icon {
      font-size: 25px;
      position: relative;
      left: -35px;
      top: 6px;
    }
  }
  &__logo {
    img {
      width: 65px;
      height: 25px;
      vertical-align: middle;
      margin-right: 10px;
    }
  }
  &-right {
    display: flex;
  }
  &__app {
    font-size: 14px;
    margin: auto;
    margin-right: 10px;
  }
  &__login {
    width: 128px;
    padding: 6px 0px;
    text-align: center;
    font-size: 15px;
    border: 1px #fff solid;
    border-radius: 32px;
    vertical-align: middle;
    color: #fff;
    cursor: pointer;
    background-color: transparent;
  }
}
</style>
