<template>
    <div class="comment">
        <h3 class="comment__header">发表评论</h3>
        <div class="comment__main">
            <el-avatar :size="50" :src="userData.circleUrl"></el-avatar>
            <el-input type="textarea" placeholder="请输入内容" v-model="textarea" maxlength="60" resize="none" show-word-limit>
            </el-input>
            <el-button type="primary" size="small" @click="reply">发表</el-button>
        </div>
        <!-- 评论区 -->
        <div class="comment__items">
            <div class="comment__items__info" v-for="(item, index) in commentData">
                <div class="comment__items__info-avatar">
                    <el-avatar :size="35" :src="item.avatar"></el-avatar>
                </div>
                <div class="comment__items__info-username">{{ item.username }}</div>
                <div class="comment__items__info-data">{{ item.date }}</div>
                <div class="comment__items__info-content">{{ item.content }}</div>
                <p class="comment__items__info-reply" @click="toReply(index)">回复</p>
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
            id: "",
            textarea: "",
            userData: {
                circleUrl:
                    "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
            },
            commentData: [
                {
                    username: "默认用户",
                    avatar: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
                    date: getTime(),
                    content: "默认评论",
                    reply: [],
                },
            ],
        };
    },
    created() {
        this.init();
    },
    methods: {
        init() {
            if (getStorage("user") !== null) {
                this.userData = getStorage("user");
            }

            this.id = this.$route.params.id;
        },
        //发表
        reply() {
            //判断是否登陆
            this.userData = getStorage("user");
            if (this.userData === null) {
                this.$message.error("请先登录");
            } else {
                //与已经登陆的状态下
                let newComment = {
                    username: this.userData.username,
                    avatar: this.userData.circleUrl,
                    date: getTime(),
                    content: this.textarea,
                    reply: [],
                };
                this.commentData.unshift(newComment);
                this.textarea = "";
                setStorage(this.id, this.commentData);
            }
        },
        //回复
        toReply(index) {
            console.log(index);
            console.log(this.commentData[index]);
        },
    },
};
</script>

<style lang="less">
.comment {
    width: 630px;
    margin: 50px auto 0;
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
            &-reply {
                color: #8a919f;
                font-size: 14px;
                display: inline-block;
                margin-left: auto;
                margin-bottom: 10px;
                margin-right: 10px;
                margin-top: -20px;
                cursor: pointer;
                transition: all 0.5s;
                &:hover {
                    color: #1171ee;
                }
            }
        }
    }
}
</style>
