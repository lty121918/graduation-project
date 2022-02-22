<template>
    <div class="index">
        <div class="index-banner">
            <img src="../../assets/banner.jpg" alt="banner" />
        </div>
        <div class="index-content">
            <div class="index-content__left">文章
                <Article></Article>
            </div>
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
import Ranking from "../../components/Ranking.vue";
// import { PostTop, PostDaily } from "../../request/api";
import Article from "./components/Article.vue";
export default {
    data() {
        return {
            news: [1, 1, 1],
        };
    },
    components: {
        Article,
        Ranking,
    },
};
</script>
<style lang="less" scoped>
@import "./index.less";
</style>