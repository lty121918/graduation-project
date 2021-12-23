<template>
    <div class="index">
        <div class="index_content">
            <section>
                <div class="index_content_swiper">
                    <el-carousel height="300px">
                        <el-carousel-item v-for="item in itemList" :key="item">
                            <img :src="item.url" alt="">
                            <!-- <h3 class="small"></h3> -->
                        </el-carousel-item>
                    </el-carousel>
                </div>
                <!-- <img src="../../../src/assets/swiper01.jfif"> -->
                <div class="index_content_information">
                    <el-card class="box-card">
                        <template #header>
                            <div class="card-header">
                                <span>财经快讯</span>
                            </div>
                        </template>
                        <!-- <div v-for="item in news" :key="item[0]" class="text item">{{item[1]}}</div> -->
                    </el-card>
                </div>
            </section>
            <section>
                <div>左资讯</div>
                <div>右资讯</div>
            </section>
        </div>
    </div>
</template>
<script>
import axios from "axios";
import { reactive } from '@vue/reactivity';
export default {
    setup() {
        var itemList = [
            { url: "../../../src/assets/swiper01.jfif" },
            { url: "../../../src/assets/swiper02.jfif" },
            { url: "../../../src/assets/swiper03.jfif" },
            { url: "../../../src/assets/swiper05.jfif" },
        ];
        const state=reactive({
            news:[]
        })
        //查看所有股票
        // axios
        //     .post(
        //         "http://api.tushare.pro",
        //         {
        //             api_name: "stock_basic",
        //             token: "2aa6079a53c04ee96881c2a69ad751d938b3e8828569cea247615cdc",
        //             params: { list_status: "L" },
        //             fields: "",
        //         },
        //         {
        //             headers: {
        //                 "Content-Type": "application/x-www-form-urlencoded",
        //             },
        //         }
        //     )
        //     .then(function (response) {
        //         console.log(response);
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });

        axios
            .post(
                "http://api.tushare.pro",
                {
                    api_name: "news",
                    token: "2aa6079a53c04ee96881c2a69ad751d938b3e8828569cea247615cdc",
                    params: { start_date: "20181120","end_date":"20211220","src":"sina" },
                    fields: "",
                },
                {
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                }
            )
            .then(function (response) {
                console.log(response.data.data.items.slice(0,8));
                news=response.data.data;
                console.log(news);
            })
            .catch(function (error) {
                console.log(error);
            });
        return {
            itemList,
            ...state
        };
    },
};
</script>

<style lang="less" scoped>
@import "./index.less";
</style>