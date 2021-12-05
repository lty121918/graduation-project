<template>
    <div class="index">
        <div class="index_content">
            <section>
                <div class="index_content_swiper">
                    <el-carousel height="300px">
                        <el-carousel-item v-for="item in itemList" :key="item">
                            <img :src="item.url" alt="">
                            <!-- <h3 class="small"></h3> -->
                        </el-carousel-item>
                    </el-carousel>
                </div>
                <!-- <img src="../../../src/assets/swiper01.jfif"> -->
                <div class="index_content_information">
                    <el-card class="box-card">
                        <template #header>
                            <div class="card-header">
                                <span>财经快讯</span>
                            </div>
                        </template>
                        <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
                    </el-card>
                </div>
            </section>
            <section>
                <div>左资讯</div>
                <div>右资讯</div>
            </section>
        </div>
    </div>
</template>
<script>
export default {
    setup() {
        var itemList = [
            { url: "../../../src/assets/swiper01.jfif" },
            { url: "../../../src/assets/swiper02.jfif" },
            { url: "../../../src/assets/swiper03.jfif" },
            { url: "../../../src/assets/swiper05.jfif" },
        ];
        return {
            itemList,
        };
    },
};
</script>

<style lang="less" scoped>
@import "./index.less";
</style>