<template>
    <div class="index">
        <div class="index-banner">
            <img src="../../assets/banner.jpg" alt="banner" />
            <Article></Article>
        </div>
        <div class="index-content">
            <div class="article">文章</div>
            <div class="sider">侧边栏</div>
        </div>
        <!-- <div v-html="news[0][0]"></div> -->
    </div>
</template>
<script>
import axios from "axios";
//todo：学习怎么引入方法来使用
import Article from "../../components/Article.vue"
export default {
    data(){
        return{
news:[1,1,1]
        }
    },
    methods: {

    },
    mounted() {
        var __this = this;
        //todo：封装axios
        axios
            .post(
                "http://api.tushare.pro",
                {
                    api_name: "major_news",
                    token: "2aa6079a53c04ee96881c2a69ad751d938b3e8828569cea247615cdc",
                    // params: { start_date: "20181120", "end_date": "20211220", "src": "sina" },
                    fields: "content",
                },
                {
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                }
            )
            .then(function (response) {
                __this.news = response.data.data.items;
                console.log(__this.news);
            })
            .catch(function (error) {
                console.log(error);
            });
    },
    components: {
        Article
    }
};
</script>
<style lang="less" scoped>
@import "./index.less";
</style>