<template>
    <div class="ranking">
        <header class="ranking__header">
            <strong>热股榜</strong>
            <span><a>更多</a></span>
        </header>
        <div class="ranking__content">
            <template>
                <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
                    <el-tab-pane label="沪深" name="first">
                        <p class="ranking__content__top" v-for="(item,index) in topList">
                            <span>{{index+1}}</span>
                            <router-link :to="{ path: `/stock/${item[1]}`}" class="ranking__content__shares-name" @click="getInfo">{{item[2]}}</router-link>
                            <span class="ranking__content__shares-price">{{item[3]}}</span>
                        </p>
                    </el-tab-pane>
                    <el-tab-pane label="美股" name="second">配置管理</el-tab-pane>
                    <el-tab-pane label="港股" name="third">角色管理</el-tab-pane>
                </el-tabs>
            </template>
        </div>
    </div>
</template>

<script>
import { PostTop } from "../request/api";
export default {
    data() {
        return {
            activeName: "second",
            topList: [],
        };
    },
    mounted() {
        //热股龙虎榜
        this.postRanking();
    },
    methods: {
        //热股龙虎榜
        postRanking() {
            PostTop({
                token: "2aa6079a53c04ee96881c2a69ad751d938b3e8828569cea247615cdc",
                api_name: "top_list",
                params: {
                    trade_date: "20180928",
                },
            }).then((res) => {
                if (res.data.data.items) {
                    this.topList = res.data.data.items.splice(0, 8);
                    console.log(this.topList);
                }
            });
        },
        getInfo(){
            console.log('股票信息');
        },
        //tab
        handleClick(tab, event) {
            console.log(tab, event);
        },
    },
};
</script>

<style lang="less">
.ranking {
    width: 260px;
    &__header {
        width: 100%;
        display: flex;
        align-items: center;
        padding: 0 10px;
        margin-bottom: 20px;
        strong {
            text-align: left;
        }
        span {
            margin-left: auto;
            font-size: 12px;
            cursor: pointer;
        }
    }
    &__content {
        &__top{
            padding: 0 25px;
        }
        &__shares-name{
            cursor: pointer;
            text-decoration: none;
            color: #33353c;
            margin-left: 10px;
        }
        &__shares-price{
            color: red;
            float: right;

        }
    }
    //龙虎榜element ui样式
    .el-tabs__nav-scroll{
        display: flex;
        justify-content: center;
    }
    .el-tabs__item{
        height: 30px;
        line-height: 30px;
    }
}
</style>