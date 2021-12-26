<template>
    <div class="index">
    </div>
</template>
<script>
import axios from "axios";
//todo：学习怎么引入方法来使用
import { getImgUrl,getItem } from "../../utils/utils";
export default {
    data() {
        return {
            itemList: [
                //todo:完成轮播图，导入图片问题
                { url: require("../../assets/logo.png") },
                // { url: require("../../assets/swiper01.jfif") },
                // { url: require("../../assets/swiper02.jfif") },
                // { url: require("../../assets/swiper03.jfif") },
                // { url: require("../../assets/swiper05.jfif") },
            ],
        };
    },
    methods: {
        back(){
            getItem();
        }
    },
    mounted() {
        getItem();
        //todo：封装axios，发送请求
        axios;
        //             .post(
        //                 "http://api.tushare.pro",
        //                 {
        //                     api_name: "news",
        //                     token: "2aa6079a53c04ee96881c2a69ad751d938b3e8828569cea247615cdc",
        //                     params: { start_date: "20181120","end_date":"20211220","src":"sina" },
        //                     fields: "",
        //                 },
        //                 {
        //                     headers: {
        //                         "Content-Type": "application/x-www-form-urlencoded",
        //                     },
        //                 }
        //             )
        //             .then(function (response) {
        //                 console.log(response.data.data.items.slice(0,8));
        //                 news=response.data.data;
        //                 console.log(news);
        //             })
        //             .catch(function (error) {
        //                 console.log(error);
        //             });
    },
};
</script>
<style lang="less" scoped>
@import "./index.less";
</style>