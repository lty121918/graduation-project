<template>
  <div class="index">
      <!-- 280px -->
    <div class="index__banner">
      <img src="../../assets/banner.jpg" alt="" />
    </div>
    <div v-for="item in news">{{ item[0] }}</div>
  </div>
</template>
<script>
import axios from "../../utils/axios";
import { getImgUrl, getItem } from "../../utils/utils";
export default {
  data() {
    return {
      news: [],
    };
  },
  methods: {
  },
  mounted() {
    var that = this;
    
    fetchNews();//获得新闻信息
    //todo：封装axios，发送请求
    function fetchNews() {
        axios
            .post("http://api.tushare.pro", {
                api_name: "major_news",
                token: "2aa6079a53c04ee96881c2a69ad751d938b3e8828569cea247615cdc",
                fields: "title,content",
            })
            .then(function (response) {
                that.news = response.data.data.items;
            })
            .catch(function (error) {
                console.log(error);
      });
    }
    
  },
};
</script>
<style lang="less" scoped>
@import "./index.less";
</style>
