<template>
    <div class="article">
    <div v-for="item in articleList" class="article__item">
{{item[1]}}
</div>
    </div>
</template>
<script>
import { PostArticle,setStorage,getStorage } from "../../../request/api";
export default {
    data() {
        return {
            articleList:[]
        };
    },
    created() {
         this.showArticle();
    },
    methods: {
        showArticle() {
            PostArticle({
                api_name :"major_news",
                params: {
                },
                 fields: "title,content,pub_time,src",
            }).then((res) => {
                console.log(res);
                if(res.data.data.items){
                    setStorage("articleList",res.data.data.items);
                }
                this.articleList=getStorage("articleList").map((index,item,array)=>{
                    item=cutString(item[1],200);
                    console.log(index);
                })
            }).catch(err=>{
                console.log(err);
            })
        }

    },
};
</script>
<style lang="less">
.article{
    &__item{
        width: 640px;
        height: 150px;
        padding: 15px 0;
        border-bottom: 1px solid #edf0f5;
    }
}
</style>