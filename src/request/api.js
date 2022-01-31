// 将request.js整体导入
import request from './request'

// 按需导出每个请求，也就是按需导出每个api

// 请求首页数据
export const GetHomeAPI = (params) => request.get('/',  {params});

export const PostHomeAPI = (params) => request.post('/', params);

export const PostDaily = (params) => request.post('/', params);