<template>
    <div>
        <el-skeleton :rows="12" animated style="width: 1040px;margin:100px auto;" v-if="loading" />
        <div class="stock" v-else>
            <Side></Side>
            <div class="stock__main">
                <div class="stock__main-header">
                    <div class="stock__main__name">
                        {{ stockName[2] }}(SZ:{{ stockName[1] }})
                    </div>
                    <div class="stock__main__operate">
                        <a class="stock__main__operate__add">+自选</a>
                    </div>
                </div>
                <div class="stock__main__price" :class="stockPrice[8] > 0 ? 'redStock' : 'greenStock'">
                    <strong>￥{{ stockPrice[5] }}</strong>
                    <p>{{ stockPrice[7] }}</p>
                    <p>{{ stockPrice[8] }}%</p>
                </div>
                <div class="stock__main__info">
                    <span>最高:&nbsp;<b :class="stockPrice[8] > 0 ? 'redStock' : 'greenStock'">{{ stockPrice[3] }}</b></span>
                    <span>今开:&nbsp;<b :class="stockPrice[8] > 0 ? 'redStock' : 'greenStock'">{{ stockPrice[2] }}</b></span>
                    <span>涨停:&nbsp;<b :class="
              (1.1 * stockPrice[5]).toFixed(2) > stockPrice[5]
                ? 'redStock'
                : 'greenStock'
            ">{{ (1.1 * stockPrice[5]).toFixed(2) }}</b></span>
                    <span>成交量:&nbsp;<b>{{ stockPrice[9] }}万手</b></span>

                    <span>最低:&nbsp;<b>{{ stockPrice[4] }}</b></span>
                    <span>昨收:&nbsp;<b>{{ stockPrice[5] }}</b></span>
                    <span>跌停:&nbsp;<b :class="
              (0.9 * stockPrice[5]).toFixed(2) > stockPrice[5]
                ? 'redStock'
                : 'greenStock'
            ">{{ (0.9 * stockPrice[5]).toFixed(2) }}</b></span>
                    <span>成交额:&nbsp;<b>{{ stockPrice[10] }}亿</b></span>

                    <span>量比:&nbsp;<b :class="stockInfo[5] > 0 ? 'redStock' : 'greenStock'">{{ stockInfo[5] }}</b></span>
                    <span>换手:&nbsp;<b>{{ stockInfo[3] }}%</b></span>
                    <span>市盈率:&nbsp;<b>{{ stockInfo[6] }}</b></span>
                    <span>市盈率(TTM):&nbsp;<b>{{ stockInfo[7] }}</b></span>

                    <span>市销率:&nbsp;<b>{{ stockInfo[8] }}</b></span>
                    <span>股息率:&nbsp;<b>{{ stockInfo[9] }}</b></span>
                    <span>股息率(TTM):&nbsp;<b>{{ stockInfo[10] }}</b></span>
                    <span>总股本:&nbsp;<b>{{ stockInfo[11] }}亿</b></span>

                    <span>总市值:&nbsp;<b>{{ stockInfo[16] }}亿</b></span>
                    <span>流通市值:&nbsp;<b>{{ stockInfo[17] }}亿</b></span>
                    <span>市场类型:&nbsp;<b>{{ stockName[5] }}</b></span>
                    <span>所属行业:&nbsp;<b>{{ stockName[4] }}</b></span>
                </div>
                <div class="stock__main__echarts">
                    <Aecharts :echartsData="echartsData" v-if="flag"></Aecharts>
                </div>
                <div class="stock__main__comment">
                    <Comment :stockId="stockId"></Comment>
                </div>
            </div>

            <!-- 右侧侧边栏 -->
            <div class="stock__side">
                <div class="stock__side-item">
                    <div class="stock__side__title">简介</div>
                    <div class="stock__side__desc">
                        <Ellipsis :text-style="{
              'font-size': '14px',
              color: '#3353c',
            }" :text="stockCompany[0]" :showMore="true"></Ellipsis>
                    </div>
                </div>
                <div class="stock__side-item">
                    <div class="stock__side__title">公司官网</div>
                    <a class="stock__side__desc" :href="'https://' + stockCompany[1]">
                        {{ stockCompany[1] }}
                    </a>
                </div>
                <div class="stock__side-item">
                    <div class="stock__side__title">主要业务</div>
                    <div class="stock__side__desc">
                        <Ellipsis :text-style="{
              'font-size': '14px',
              color: '#3353c',
            }" :text="stockCompany[3]" :showMore="true"></Ellipsis>
                    </div>
                </div>
                <div class="stock__side-item">
                    <div class="stock__side__title">经营范围</div>
                    <div class="stock__side__desc">{{ stockCompany[4] }}</div>
                </div>

                <div class="stock__side-item">
                    <div class="stock__side__title">联系邮箱</div>
                    <div class="stock__side__desc">{{ stockCompany[2] }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { PostStock } from "../../request/api";
import Aecharts from "./components/stockEcharts/Echarts.vue";
import Ellipsis from "./components/ellipsis/index.vue";
import Comment from "../../components/comment/index.vue";
import Side from "./components/side.vue";
export default {
    data() {
        return {
            stockId: "",
            stockName: [],
            stockInfo: [],
            stockPrice: [],
            stockCompany: [],
            stockUp: true,
            echartsData: [],
            flag: false,
            loading: true,
        };
    },
    created() {
        this.getInfo();
    },
    mounted() {},
    methods: {
        getInfo() {
            this.stockId = this.$route.params.id;
            //获取股票基础信息:名字
            PostStock({
                api_name: "stock_basic",
                params: {
                    ts_code: this.stockId,
                    limit: 3,
                },
            }).then((res) => {
                this.stockName = res.data.data.items[0];
            });
            //获取股票日线信息,价格，涨跌幅
            PostStock({
                api_name: "daily",
                params: {
                    ts_code: this.stockId,
                },
            }).then((res) => {
                this.flag = true;
                this.echartsData = res.data.data.items;
                this.stockPrice = res.data.data.items[0];
                this.stockPrice[8] = this.stockPrice[8].toFixed(2);
            });
            //每日指标,包括市盈率、市净率、股息率、总股本等
            PostStock({
                api_name: "daily_basic",
                params: {
                    ts_code: this.stockId,
                },
            }).then((res) => {
                this.loading = false;
                this.stockInfo = res.data.data.items[0].map(
                    (item, index, array) => {
                        if (typeof item === "number") {
                            return item.toFixed(2);
                        } else {
                            return item;
                        }
                    }
                );
                // console.log(this.stockInfo);
            });
            //获得公司简介，业务介绍
            PostStock({
                api_name: "stock_company",
                params: {
                    ts_code: this.stockId,
                },
                fields: "introduction,main_business,business_scope,website,email",
            }).then((res) => {
                this.stockCompany = res.data.data.items[0];
            });
        },
    },
    components: {
        Aecharts,
        Ellipsis,
        Comment,
        Side,
    },
};
</script>

<style lang="less">
.stock {
    width: 1150px;
    margin: 60px auto 0 auto;
    display: flex;
    flex-direction: row;
    padding-top: 30px;
    //中间那部分
    &__main {
        width: 640px;
        .redStock {
            color: #d20;
        }
        .greenStock {
            color: green;
        }
        &-header {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
        }
        &__name {
            line-height: 28px;
            font-size: 25px;
            color: #33353c;
            letter-spacing: 0;
            margin-bottom: 5px;
            font-weight: 500;
        }
        &__operate {
            margin-left: auto;
            &__add {
                background: #06c;
                color: #fff;
                display: inline-block;
                width: 90px;
                height: 30px;
                line-height: 30px;
                text-align: center;
                border-radius: 2px;
                font-size: 14px;
            }
        }
        &__price {
            margin-bottom: 10px;
            strong {
                font-size: 38px;
            }
            p {
                padding-top: 15px;
                display: inline-block;
                margin-left: 10px;
                font-size: 20px;
            }
        }
        &__info {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            margin-bottom: 30px;
            & > span {
                display: inline-block;
                width: 160px;
                height: 22px;
                font-size: 13px;
                line-height: 20px;
            }
        }
    }
    &__side {
        width: 280px;
        margin-left: 35px;
        &-item {
            margin-bottom: 30px;
        }
        &__title {
            width: 280px;
            font-size: 16px;
            color: #33353c;
            float: left;
            font-weight: 700;
            margin-bottom: 10px;
            overflow: hidden;
            border-bottom: 1px solid #edf0f5;
            padding-bottom: 9px;
        }
        &__desc {
            font-size: 14px;
            word-break: break-all;
            color: #33353c;
            line-height: 21px;
            text-decoration: none;
        }
    }
}
</style>
