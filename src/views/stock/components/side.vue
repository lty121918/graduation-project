<template>
    <div class="stock__links">
        <div class="stock__links-item">
            <div class="stock__links__title">公司概况</div>
            <a class="stock__links__desc">公司简介</a>
            <a class="stock__links__desc">公司高管</a>
            <a class="stock__links__desc">IPO文件</a>
        </div>
        <div class="stock__links-item">
            <div class="stock__links__title">股权信息</div>
            <a class="stock__links__desc">股本结构</a>
            <a class="stock__links__desc">十大股东</a>
            <a class="stock__links__desc">十大流通股东</a>
            <a class="stock__links__desc">基金持股</a>
            <a class="stock__links__desc">高管增减持</a>
            <a class="stock__links__desc">股东人数</a>
            <a class="stock__links__desc">限售解禁</a>
        </div>
        <div class="stock__links-item">
            <div class="stock__links__title">股票交易</div>
            <a class="stock__links__desc">成交明细</a>
            <a class="stock__links__desc">分价表</a>
            <a class="stock__links__desc">大单统计</a>
            <a class="stock__links__desc">大宗交易</a>
            <a class="stock__links__desc">龙虎榜数据</a>
            <a class="stock__links__desc">融资融券</a>
        </div>
        <div class="stock__links-item">
            <div class="stock__links__title">公司公告</div>
            <a class="stock__links__desc">最新公告</a>
            <a class="stock__links__desc">年度报告</a>
        </div>
        <div class="stock__links-item">
            <div class="stock__links__title">公司运作</div>
            <a class="stock__links__desc">股东大会</a>
            <a class="stock__links__desc">收入构成</a>
            <a class="stock__links__desc">重大事项</a>
            <a class="stock__links__desc">分红配送</a>
            <a class="stock__links__desc">增发一览</a>
            <a class="stock__links__desc">内部交易</a>
            <a class="stock__links__desc">IR活动记录</a>
        </div>
        <div class="stock__links-item">
            <div class="stock__links__title">财务数据</div>
            <a class="stock__links__desc">业绩预告</a>
            <a class="stock__links__desc">主要指标</a>
            <a class="stock__links__desc">利润表</a>
            <a class="stock__links__desc">资产负债表</a>
            <a class="stock__links__desc">现金流量表</a>
            <a class="stock__links__desc">所有者权益变动</a>
            <a class="stock__links__desc">选股器</a>
        </div>
        <div class="stock__links-item">
            <div class="stock__links__title">研究分析</div>
            <a class="stock__links__desc">杜邦分析</a>
            <a class="stock__links__desc">研究报告</a>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.stock__links {
    width: 150px;
    margin-left: 40px;
    &-item {
        display: flex;
        flex-direction: column;
        margin-top: 10px;
        margin-bottom: 20px;
    }
    &__title {
        width: 110px;
        font-size: 15px;
        font-weight: 500;
        color: #33353c;
        border-bottom: 1px solid #edf0f5;
        padding-bottom: 8px;
        margin-bottom: 8px;
    }
    &__desc {
        text-decoration: none;
        line-height: 20px;
        font-size: 14px;
        color: #33353c;
        margin-bottom: 5px;
        cursor: pointer;
    }
}
</style>