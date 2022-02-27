<template>
  <div class="article">
      <!-- <headers></headers> -->
    <div class="article-main">
    <div class="article-main__title">{{article[0]}}</div>
    <div class="article-main__time">{{article[2]}}</div>
      <div class="article-main__content">&nbsp;&nbsp;&nbsp;&nbsp;{{article[1]}}</div>
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
      article:"",
      articleTitle:"",
    };
  },
  created() {
    this.getInfo();
    this.regArticle();
  },
  methods: {
    getInfo() {
      this.articleId = this.$route.params.id;
      this.article = getStorage("articleList")[this.articleId];
    },
    //正则表达式格式化文本内容
    regArticle(){
      let reg=/关注同花顺财经[\d\D]+/;
      let reg2=/\(image[\d\D]+\)/g
      this.article[1]=this.article[1].replace(reg,"").replace(reg2,"");
    }
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
    &__time{
        margin-bottom: 15px;
        color: #909499;
    }
    &__title{
        font-size: 20px;
        font-weight: 600;
        margin-top: 90px;
        margin-bottom: 20px;
    }
    &__content{
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
