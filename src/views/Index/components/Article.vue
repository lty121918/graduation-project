<template>
  <div class="article">
    <el-tabs v-model="activeName">
      <el-tab-pane label="热帖" name="first">
        <div v-for="(item,index) in articleList" class="article__item">
          <router-link :to="{ path: `/article/${index}`}">
            <div class="article__item-title">{{ item[0] }}</div>
            <div class="article__item-content" >&nbsp;&nbsp;&nbsp;{{ item[1] }}</div>
            <div class="article__item-time">
              {{ item[2] }}
            </div>
          </router-link>
        </div>
      </el-tab-pane>
      <el-tab-pane label="7x24" name="second">7x24</el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import { setStorage, getStorage, cutString } from "../../../utils/utils";
import { PostArticle } from "../../../request/api";
export default {
  data() {
    return {
      activeName: "first",
      articleList: [],
    };
  },
  created() {
    this.showArticle();
  },
  mounted() {
    this.printArticle();
  },
  methods: {
    showArticle() {
      PostArticle({
        api_name: "major_news",
        params: {},
        fields: "title,content,pub_time,src",
      })
        .then((res) => {
          console.log(res);
          if (res.data.data.items) {
            setStorage("articleList", res.data.data.items);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    printArticle() {
      this.articleList = getStorage("articleList");
      this.articleList.forEach((element) => {
        return (element[1] = cutString(element[1], 155));
      });
    },
  },
};
</script>
<style lang="less">
.article {
  margin-top: 20px;
  &__item {
    width: 640px;
    cursor: pointer;
    padding: 20px 0 15px 0;
    border-bottom: 1px solid #edf0f5;
    a{
      text-decoration: none;
    }
    &:hover {
      background-color: #f6f6f6;
    }
    &-title {
      font-size: 18px;
      color: #000;
      margin-bottom: 10px;
    }
        &-content {
      font-size: 16px;
  color: #33353c;
  overflow: hidden;
    }
    &-time {
      margin-top: 8px;
      margin-right: auto;
      width: 180px;
      font-size: 14px;
      color: #909499;
    }
  }
  .el-tabs__header {
    margin-bottom: 0;
  }
  .el-tabs__item {
    font-size: 16px;
    padding-right: 10px;
    margin-bottom: 5px;
  }
}
</style>
