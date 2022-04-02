<template>
    <div class="create">
        <h2>发表新帖子</h2>
        <el-divider></el-divider>
        <h3>请输入标题</h3>
        <el-input v-model="content.title"></el-input>
        <h3>请输入内容</h3>
        <div class="create-main">
            <vue-editor v-model="content.content"></vue-editor>
        </div>
        <el-button type="primary" class="create-button" @click="create">发表</el-button>
    </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
import { setStorage, getStorage, getTime } from "../../utils/utils";
export default {
    name: "create",
    components: {
        VueEditor,
    },
    data() {
        return {
            content: {
                title: "",
                content: this.content,
                time: getTime(),
                user: getStorage("user").username,
            },
            userArticleList: [],
        };
    },
    methods: {
        create() {
            if (this.content.length === 0) {
                this.$message.error("帖子不能为空");
            } else {
                this.userArticleList = getStorage("userArticleList");
                this.userArticleList.push(this.content);
                setStorage("userArticleList", this.userArticleList);
                this.$message.success("发表成功");
                this.content = "";
                this.$router.push("/");
            }
        },
    },
};
</script>

<style lang="less">
.create {
    padding-top: 60px;
    width: 980px;
    margin: auto;
    h2 {
        margin: 20px 0;
    }
    h3 {
        margin: 10px 0;
    }
    // &-main {
    // }
    &-button {
        display: block;
        margin-left: auto;
        margin-top: 20px;
        margin-bottom: 20px;
    }
}
</style>