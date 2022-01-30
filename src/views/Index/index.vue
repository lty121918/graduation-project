<template>
    <div class="index">
        <div class="index-banner">
            <img src="../../assets/banner.jpg" alt="banner" />
            <div @click="PostInfo">sdfsafas</div>
            <Article></Article>
        </div>
        <div class="index-content">
            <div class="index-content__left">文章</div>
            <div class="index-content__sider">
                <div class="index__sider__select">
                    <div class="index-content__sider__item"><a>基金交易</a></div>
                    <div class="line"></div>
                    <div class="index-content__sider__item"><a>A股开户</a></div>
                    <div class="line"></div>
                    <div class="index-content__sider__item"><a>私募中心</a></div>
                    <div class="line"></div>
                    <div class="index-content__sider__item"><a>期货开户</a></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
import { PostHomeAPI, PostDaily } from "../../request/api";
//todo：学习怎么引入方法来使用
import Article from "./components/Article.vue";
export default {
    data() {
        return {
            news: [1, 1, 1],
        };
    },
    mounted() {
        this.PostInfo();
        this.getSharesIndex();
    },
    methods: {
        PostInfo() {
            PostHomeAPI({
                token: "2aa6079a53c04ee96881c2a69ad751d938b3e8828569cea247615cdc",
                api_name: "major_news",
                fields: "content",
            }).then((res) => {
                console.log(res);
            });
        },
        getSharesIndex() {
            // axios.defaults.withCredentials=true;
            // document.cookie='device_id=0e6a8832b086befb93826a55583f11f6; s=c7117cxko5; xq_a_token=fbc7bfef1e09beda4e5ad33d503c29e5aa980eb8; xqat=fbc7bfef1e09beda4e5ad33d503c29e5aa980eb8; xq_r_token=692e7688d33c8aedebdcd521135ae3706921c61c; xq_id_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1aWQiOi0xLCJpc3MiOiJ1YyIsImV4cCI6MTY0NDk2NDAyNCwiY3RtIjoxNjQzNTEwMTg1NTg4LCJjaWQiOiJkOWQwbjRBWnVwIn0.TLmgES0Gw6noasarC0vCR3RNHYEPcRa25Z6MALbEVijtkppQGQQkwYEjXjkLhB6MmdYihYLODGpGEv-k65Uxa7a64UvqfBKfkcLevGAgvIH0zCzn_FN8GuOcnoL9qztF1-spAJWXh9xEIqj7Tbqn94bEnFXMkDsGaCB1qjMotNmdzUNYuMPgwRny92Je_OxXgevW3_5VO48iEyX6Il_Rfal62I8wyq3BBgCl7Z4IgiO9fjIz_8vB72qvBI2AL7v9Dhcpz1V5_DZEpGI3BpE6Ab3K0U3_nozZ2d6Q1MeE6wgUGq9h0Yd-bsKpCp69UsvgH_-0oZBf-x8ia-TNU723dA; u=831643510195989; Hm_lvt_1db88642e346389874251b5a1eded6e3=1643510199,1643549014,1643552438; Hm_lpvt_1db88642e346389874251b5a1eded6e3=1643552438'
            // axios({
            //     method: "get",
            //     url: "/v5/stock/batch/quote.json",
            // //    headers: {
            // //         "Content-Type": "application/x-www-form-urlencoded",
            // //        "Access-Control-Allow-Origin":"application/x-www-form-urlencoded",
            // //    },
            //     params: {
            //         symbol: "SH000001,SZ399001,SZ399006,SH000688,HKHSI,HKHSCEI,HKHSCCI,.DJI,.IXIC,.INX",
            //     },
            // }).then(function (response) {
            //     console.log(response);
            // });
            PostDaily({
                token: "2aa6079a53c04ee96881c2a69ad751d938b3e8828569cea247615cdc",
                api_name: "index_daily",
                params: {
                    ts_code: "399300.SZ",
                },
            }).then((res) => {
                console.log(res);
            });
        },
    },
    components: {
        Article,
    },
};
</script>
<style lang="less" scoped>
@import "./index.less";
</style>