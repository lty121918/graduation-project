<template>
    <div class="index">
        <div class="index-banner">
            <img src="../../assets/banner.jpg" alt="banner" />
            <Article></Article>
        </div>
        <div class="index-content">
            <div class="index-content__left">文章</div>
            <div class="index-content__sider">
                <div class="index-content__sider__select">
                    <div class="index-content__sider__item">
                        <a href>
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-shuju" />
                            </svg>
                            <strong>基金交易</strong>
                            <p>一折起申购 ></p>
                        </a>
                    </div>
                    <div class="line"></div>
                    <div class="index-content__sider__item">
                        <a href>
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-gongjijin" />
                            </svg>
                            <strong>股票行情</strong>
                            <p>大盘涨跌详情 ></p>
                        </a>
                    </div>
                    <div class="line"></div>
                    <div class="index-content__sider__item">
                        <a href>
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-baosheng" />
                            </svg>
                            <strong>私募中心</strong>
                            <p>新品发布季 ></p>
                        </a>
                    </div>
                    <div class="line"></div>

                    <div class="index-content__sider__item">
                        <a href>
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-qianbi" />
                            </svg>
                            <strong>期货开户</strong>
                            <p>T+0双向杠杆交易 ></p>
                        </a>
                    </div>
                </div>
                <div class="index-content__sider__ranking">
                    <Ranking></Ranking>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
import Ranking from "../../components/Ranking.vue";
import { PostTop, PostDaily } from "../../request/api";
import Article from "./components/Article.vue";
export default {
    data() {
        return {
            news: [1, 1, 1],
        };
    },
    // mounted() {
    //     //热股龙虎榜
    //     this.postRanking();
    // },
    // methods: {
    //     //热股龙虎榜
    //     postRanking() {
    //         PostTop({
    //             token: "2aa6079a53c04ee96881c2a69ad751d938b3e8828569cea247615cdc",
    //             api_name: "top_list",
    //             params: {
    //                 trade_date: "20180928",
    //             },
    //         }).then((res) => {
    //             console.log(res.data.data.items);
    //         });
    //     },
        // getSharesIndex() {
        //     PostDaily({
        //         token: "2aa6079a53c04ee96881c2a69ad751d938b3e8828569cea247615cdc",
        //         api_name: "index_daily",
        //         params: {
        //             ts_code: "399300.SZ",
        //         },
        //     }).then((res) => {
        //         console.log(res);
        //     });
        // },
        // postRanking() {
        //     PostDaily({
        //         token: "2aa6079a53c04ee96881c2a69ad751d938b3e8828569cea247615cdc",
        //         api_name: "index_basic",
        //     })
        //         .then((res) => {
        //             console.log(res);
        //         })
        //         .catch(function (err) {
        //             console.log(err);
        //         });
        // },
        // postBasic() {
        //     axios
        //         .post("http://api.tushare.pro", {
        //             api_name: "index_basic",
        //             token: "2aa6079a53c04ee96881c2a69ad751d938b3e8828569cea247615cdc",
        //         })
        //         .then(function (response) {
        //             console.log(response);
        //         })
        //         .catch(function (error) {
        //             console.log(error);
        //         });
        // },
    //},
    components: {
        Article,
        Ranking,
    },
};
</script>
<style lang="less" scoped>
@import "./index.less";
</style>