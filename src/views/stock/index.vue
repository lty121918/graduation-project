<template>
    <div class="stock">
        <div class="stock__links"></div>
        <div class="stock__main">
            <div class="stock__main-header">
                <div class="stock__main__name">{{stockName[2]}}(SZ:{{stockName[1]}})</div>
                <div class="stock__main__operate">
                    <a class="stock__main__operate__add">+自选</a>
                </div>
            </div>
            <div class="stock__main__price">
                <strong>￥{{stockPrice[5]}}</strong>
                <p>{{stockPrice[7]}}</p>
                <p>{{stockPrice[8]}}%</p>
            </div>
            <div class="stock__main__info">
                <span>最高:&nbsp;{{stockPrice[3]}}</span>
                <span>今开:&nbsp;{{stockPrice[2]}}</span>
                <span>涨停:&nbsp;{{stockPrice[3]}}</span>
                <span>成交量:&nbsp;{{stockPrice[9]}}万手</span>

                <span>最低:&nbsp;{{stockPrice[4]}}</span>
                <span>昨收:&nbsp;{{stockPrice[5]}}</span>
                <span>跌停:&nbsp;{{stockPrice[3]}}</span>
                <span>成交额:&nbsp;{{stockPrice[10]}}亿</span>

                <span>量比:&nbsp;{{stockInfo[5]}}</span>
                <span>换手:&nbsp;{{stockInfo[3]}}%</span>
                <span>市盈率:&nbsp;{{stockInfo[6]}}</span>
                <span>市盈率(TTM):&nbsp;{{stockInfo[7]}}</span>

                <span>市销率:&nbsp;{{stockInfo[8]}}</span>
                <span>股息率:&nbsp;{{stockInfo[9]}}</span>
                <span>股息率(TTM):&nbsp;{{stockInfo[10]}}</span>
                <span>总股本:&nbsp;{{stockInfo[11]}}亿</span>

                <span>总市值:&nbsp;{{stockInfo[16]}}亿</span>
                <span>流通市值:&nbsp;{{stockInfo[17]}}亿</span>
                <span>市场类型:&nbsp;{{stockName[5]}}</span>
                <span>所属行业:&nbsp;{{stockName[4]}}</span>
            </div>
        </div>
        <div class="stock__side"></div>
    </div>
</template>

<script>
import { PostStock } from "../../request/api";
export default {
    data() {
        return {
            stockId: "",
            stockName: [],
            stockInfo: [],
            stockPrice: [],
            stockUp: true,
            stockData: "20220209",
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
                console.log(this.stockName);
            });
            //获取股票日线信息,价格，涨跌幅
            PostStock({
                api_name: "daily",
                params: {
                    ts_code: this.stockId,
                },
            }).then((res) => {
                console.log(res.data.data.items[0]);
                this.stockPrice = res.data.data.items[0];
                console.log(this.stockData);
                this.stockPrice[8] = this.stockPrice[8].toFixed(2);
            });
            //每日指标,包括市盈率、市净率、股息率、总股本等
            PostStock({
                api_name: "daily_basic",
                params: {
                    ts_code: this.stockId,
                    // trade_date:this.stockData
                },
            }).then((res) => {
                // console.log(res.data.data.items);
                // todo:把小数点变为两位
                res.data.data.items[0].forEach((item, index, array) => {
                    console.log(item instanceof Number);
                    if (index>2) {
                        this.stockInfo.push(item);
                        console.log(111);
                    } else {
                        this.stockInfo.push(item);
                    }
                });
                console.log(this.stockInfo);
                console.log(typeof this.stockInfo[4]);
            });
        },
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
    height: 1000px;
    &__links {
        width: 150px;
        margin-left: 40px;
        background-color: aqua;
    }
    &__main {
        width: 640px;
        &-header {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
        }
        &__name {
            line-height: 28px;
            font-size: 20px;
            color: #33353c;
            letter-spacing: 0;
            margin-bottom: 5px;
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
            color: #d20;
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
            span {
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
        background-color: aquamarine;
    }
}
</style>