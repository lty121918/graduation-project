// 将request.js整体导入
import request from './request'

// 按需导出每个请求，也就是按需导出每个api

// 请求首页数据
export const GetHomeAPI = (params) => request.get('/', { params });

export const PostHomeAPI = (params) => request.post('/', params);
//龙虎榜数据
export const PostTop = (params) => request.post('/', params);

//股票详细信息
//股票基础信息
export const PostStock = (params) => {
    params.token = "2aa6079a53c04ee96881c2a69ad751d938b3e8828569cea247615cdc";
    return request.post('/', params);
};
//首页文章请求
export const PostArticle = (params) => {
    params.token = "2aa6079a53c04ee96881c2a69ad751d938b3e8828569cea247615cdc";

    return request.post('/', params);
};