<template>
  <div class="comment">
    <h3 class="comment__header">发表评论</h3>
    <div class="comment__main">
      <el-avatar :size="50" :src="circleUrl"></el-avatar>
      <el-input
        type="textarea"
        placeholder="请输入内容"
        v-model="textarea"
        maxlength="60"
        resize="none"
        show-word-limit
      >
      </el-input>
      <el-button type="primary" size="small" @click="reply">发表</el-button>
    </div>
    <div class="comment__items">
      <div class="comment__items__info" v-for="(item, index) in commentData">
        <div class="comment__items__info-avatar">
          <el-avatar :size="35" :src="item.avatar"></el-avatar>
        </div>
        <div class="comment__items__info-username">{{ item.username }}</div>
        <div class="comment__items__info-data">{{ item.date }}</div>
        <div class="comment__items__info-content">{{ item.content }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { setStorage, getStorage, getTime } from "../../utils/utils";
export default {
  name: "Comment",
  props: ["stockId"],
  data() {
    return {
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      textarea: "",
      userData: {},
      commentData: [
        {
          username: "疯狂的韭菜",
          avatar:
            "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
          date: "2022-2-17",
          content: "默认评论测试",
          reply: [],
        },
      ],
    };
  },
  mounted() {
    if (getStorage(this.stockId)) {
      this.commentData = getStorage(this.stockId);
    }
  },
  methods: {
    reply() {
      //判断是否登陆
      this.userData = getStorage("user");
      console.log(this.userData);
      if (this.userData === null) {
        this.$message.error("请先登录");
      } else {
        let newComment = {
          username: this.userData.username,
          avatar: this.userData.circleUrl,
          date: getTime(),
          content: this.textarea,
          reply: [],
        };
        this.commentData.unshift(newComment);
        this.textarea = "";
        setStorage(this.stockId, this.commentData);
      }
    },
  },
};
</script>

<style lang="less">
.comment {
  margin-top: 50px;
  margin-left: 10px;
  .el-avatar {
    display: inline-block;
    margin-bottom: 20px;
    margin-left: 10px;
  }
  .el-textarea {
    width: 500px;
    padding-top: 20px;
    .el-textarea__inner {
      height: 80px;
      margin-left: 20px;
      font-size: 16px;
      padding-top: 10px;
    }
  }
  .el-button {
    display: block;
    margin-left: auto;
    margin-right: 50px;
    margin-top: 10px;
    width: 80px;
  }
  //评论区
  &__items {
    padding: 20px;
    margin-right: 30px;
    &__info {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      margin-top: 10px;
      margin-bottom: 10px;
      align-items: center;
      flex-wrap: wrap;
      border-bottom: 1px solid #f6f6f6;
      &-avatar {
        margin-top: 10px;
        height: 40px;
      }
      &-username {
        margin-left: 10px;
      }
      &-data {
        margin-left: auto;
      }
      &-content {
        width: 480px;
        margin-left: 60px;
        word-wrap: break-word;
        margin-bottom: 10px;
      }
    }
  }
}
</style>
