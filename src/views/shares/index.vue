<template>
    <div class="shares">
        股票页面
        <button @click="getInfo" class="button">qqqqqq</button>
    </div>
</template>

<script>
import { PostShares } from "../../request/api";
export default {
    data() {
        return {
            sharesId: "",
        };
    },
    created() {
        this.getInfo();
    },
    mounted() {},
    methods: {
        //获取股票日线信息
        getInfo() {
            this.sharesId = this.$route.params.id;
            PostShares({
                token: "2aa6079a53c04ee96881c2a69ad751d938b3e8828569cea247615cdc",
                api_name: "daily",
                params: {
                    ts_code: this.sharesId,
                },
            }).then((res) => {
                console.log(res.data);
            });
        },
    },
};
</script>

<style lang="less">
.shares {
    height: 1000px;
    background-color: aqua;
    margin-top: 60px;
}
.button {
    height: 100px;
    width: 200px;
    background: rebeccapurple;
    z-index: 11111111111;
}
</style>