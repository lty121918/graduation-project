<template>
    <div class="article">
        1111
        <div class="article-main">
            <div class="article-main__title">{{article.title}}</div>
            <div class="article-main__time">{{article.time}}</div>
            <div class="article-main__content" v-html="article.content"></div>
            <div class="article-main__circle">
                <a>打赏</a>
            </div>
        </div>
        <comment></comment>
    </div>
</template>

<script>
import headers from "../../components/Header.vue";
import comment from "../../components/comment/index.vue";
import { setStorage, getStorage } from "../../utils/utils";
export default {
    data() {
        return {
            articleId: 1,
            article: "",
        };
    },
    created() {
        this.getInfo();
    },
    methods: {
        getInfo() {
            this.articleId = this.$route.params.id;
            this.article = getStorage("userArticleList")[this.articleId];
            console.log(this.article);
        },
    },
    components: {
        headers,
        comment,
    },
};
</script>

<style lang="less">
.article {
    &-main {
        width: 640px;
        margin: 60px auto 0;
        text-align: center;
        &__time {
            margin-bottom: 15px;
            color: #909499;
        }
        &__title {
            font-size: 20px;
            font-weight: 600;
            margin-top: 90px;
            margin-bottom: 20px;
        }
        &__content {
            text-align: left;
            color: #33353c;
            line-height: 1.8;
            word-wrap: break-word;
            font-size: 16px;
        }
        &__circle {
            a {
                margin: 40px auto;
                text-align: center;
            }
            display: block;
            width: 56px;
            height: 56px;
            cursor: pointer;
            border-radius: 28px;
            background: #f70;
            color: #fff;
            line-height: 56px;
            margin: 30px auto 0;
        }
    }
}
</style>
