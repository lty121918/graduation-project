<template>
    <div class="index">
        <img src="../../assets/logo.png" alt="">
        <div class="index__content">
            <el-carousel height="150px">
                <el-carousel-item v-for="item in itemList" key="item.url">
                    <img :src='item.url' alt="">
                </el-carousel-item>
            </el-carousel>
            <section>
                <div>左资讯</div>
                <div>右资讯</div>
            </section>
        </div>
    </div>
</template>
<script>
import axios from "axios";
import { getImgUrl } from "../../utils/utils";
export default {
    data() {
        return {
            itemList: [
                { url: require("../../assets/logo.png") },
                // { url: require("../../assets/swiper01.jfif") },
                // { url: require("../../assets/swiper02.jfif") },
                // { url: require("../../assets/swiper03.jfif") },
                // { url: require("../../assets/swiper05.jfif") },
            ],
        };
    },
    methods: {
    },
    mounted() {
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