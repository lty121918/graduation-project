<template>
    <div class="ranking">
        <header class="ranking__header">
            <strong>热股榜</strong>
            <span><a>更多</a></span>
        </header>
        <div class="ranking__content">
            <template>
                <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
                    <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
                    <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
                    <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
                    <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
                </el-tabs>
            </template>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeName: "second",
        };
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        },
    },
};
</script>

<style lang="less">
.ranking {
    width: 260px;
    &__header {
        width: 100%;
        display: flex;
        align-items: center;
        padding: 0 10px;
        strong {
            text-align: left;
        }
        span {
            margin-left: auto;
            font-size: 12px;
            cursor: pointer;
        }
    }
    &__content {
    }
}
</style>