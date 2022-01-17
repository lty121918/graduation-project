<template>
    <div class="article">
    </div>
</template>
<script>
import axios from "../utils/axios";
//todo：学习怎么引入方法来使用
export default {
    data() {
        return {};
    },
    methods: {},
    mounted() {
        axios
            .post(
                "http://api.tushare.pro",
                {
                    api_name: "news",
                    token: "2aa6079a53c04ee96881c2a69ad751d938b3e8828569cea247615cdc",
                    params: {
                        start_date: "20181120",
                        end_date: "20211220",
                        src: "sina",
                    },
                    fields: "",
                },
                {
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                }
            )
            .then(function (response) {
                console.log(response.data.data.items.slice(0, 8));
                news = response.data.data;
                console.log(news);
            })
            .catch(function (error) {
                console.log(error);
            });
    },
};
</script>
<style lang="less" scoped>
</style>