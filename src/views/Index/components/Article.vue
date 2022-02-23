<template>
  <div class="article">
      <!-- <img src="//comment.10jqka.com.cn/sourcepic/12/sbGextagqcnMsagtsay.png" alt=""> -->
    <div v-for="item in articleList" class="article__item">
      {{ item[0] }}
    </div>
  </div>
</template>
<script>
import { setStorage, getStorage ,cutString} from "../../../utils/utils";
import { PostArticle } from "../../../request/api";
export default {
  data() {
    return {
      articleList: [],
    };
  },
  created() {
    //  this.showArticle();
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
        // articleList
      this.articleList = getStorage("articleList").data.data.items
    //   .map(
    //     (item,index, array) => {

    //         console.log(item[0]);
    //     //   item = cutString(item[1], 200);
    //       console.log(index);
    //     }
    //   );
    },
  },
};
</script>
<style lang="less">
.article {
  &__item {
    width: 640px;
    height: 60px;
    padding: 0 15px;
    border-bottom: 1px solid #edf0f5;
  }
}
</style>
